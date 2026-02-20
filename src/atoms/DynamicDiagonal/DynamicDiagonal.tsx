import { FC, useEffect, useState, JSX } from "react";
import "./DynamicDiagonal.css";
import { createPortal } from "react-dom";

const DynamicDiagonal: FC<{
    leftAnchor: string,
    rightAnchors: string[]
}> = ({
    leftAnchor,
    rightAnchors
}) => {

        const [elements, setElements] = useState<(JSX.Element)[]>([]);

        useEffect(() => {
            const updateLines = () => {
                const spans = rightAnchors.map((anchor) => {
                    const startElement = document.querySelector(`[data-anchor="${leftAnchor}"]`) as HTMLDivElement;
                    const endElement = document.querySelector(`[data-anchor="${anchor}"]`) as HTMLDivElement;
                    if (startElement && endElement) {
                        const startY = startElement.getBoundingClientRect().top + window.scrollY;
                        const startX = startElement.getBoundingClientRect().right + window.scrollX;

                        const endY = endElement.getBoundingClientRect().bottom - (endElement.getBoundingClientRect().height / 2) + window.scrollY;
                        const endX = endElement.getBoundingClientRect().left + window.scrollX;

                        const calculateLineLengthAndRotation = (): {
                            lengthPx: number,
                            rotationDeg: number,
                        } => {
                            const deltaX = endX - startX;
                            const deltaY = endY - startY;

                            const lengthPx = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
                            const rotationDeg = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

                            return {
                                lengthPx,
                                rotationDeg
                            };
                        }

                        const { lengthPx: lineWidth, rotationDeg: lineRotation } = calculateLineLengthAndRotation();

                        const line = <span
                            key={leftAnchor + anchor}
                            ref={(node) => {

                                const updateThisOne = () => {
                                    requestAnimationFrame(() => {
                                        if (node) node.style.width = `${lineWidth}px`;
                                    });
                                }

                                if (node) {
                                    updateThisOne();
                                    window.addEventListener('scroll', updateThisOne);
                                    window.addEventListener('resize', updateThisOne);
                                } else {
                                    window.removeEventListener('scroll', updateThisOne);
                                    window.removeEventListener('resize', updateThisOne);
                                }
                            }}
                            style={{
                                display: 'inline-block',
                                height: '1px',
                                background: 'var(--section-accent, var(--pastel))',
                                transition: 'width 500ms ease-out',
                                transitionDelay: '600ms',
                                position: 'absolute',
                                top: startY,
                                left: startX,
                                width: 0,
                                transform: `rotate(${lineRotation}deg)`,
                                transformOrigin: '0 0',
                            }}
                            onTransitionEnd={(e) => {
                                const self = e.currentTarget;
                                if (self) {
                                    self.style.transition = '';
                                }
                            }}
                        />;

                        return line
                    }
                }).filter(i => !!i);

                setElements(spans);
            };

            updateLines();

            window.addEventListener('scroll', updateLines);
            window.addEventListener('resize', updateLines);

            return () => {
                window.removeEventListener('scroll', updateLines);
                window.removeEventListener('resize', updateLines);
            };
        }, [leftAnchor, rightAnchors]);

        return (
            <>
                {createPortal(
                    elements,
                    document.body
                )}
            </>
        )
    }

export default DynamicDiagonal;