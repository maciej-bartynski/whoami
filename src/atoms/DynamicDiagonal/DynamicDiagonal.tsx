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

            const spans = rightAnchors.map((anchor) => {
                const startElement = document.querySelector(`[data-anchor="${leftAnchor}"]`) as HTMLDivElement;
                const endElement = document.querySelector(`[data-anchor="${anchor}"]`) as HTMLDivElement;
                if (startElement && endElement) {

                    const startY = startElement.getBoundingClientRect().top + window.scrollY;
                    const staryX = startElement.getBoundingClientRect().right + window.scrollX;

                    const endY = endElement.getBoundingClientRect().bottom + window.scrollY;
                    const endX = endElement.getBoundingClientRect().left + window.scrollX;

                    const calculateLineLengthAndRotation = (): {
                        lengthPx: number,
                        rotationPx: number,
                    } => {

                        /** calculations */

                        return {
                            lengthPx: NaN,
                            rotationPx: NaN
                        }
                    }

                    const lineWidth = calculateLineLengthAndRotation().lengthPx;
                    const lineRotation = calculateLineLengthAndRotation().rotationPx;

                    const line = <span
                        ref={(node) => {
                            setTimeout(() => {
                                if (node) {
                                    node.style.width = `${lineWidth}px`;
                                }
                            }, 100 / 6);
                        }}
                        style={{
                            display: 'inline-block',
                            height: 1,
                            background: 'black',
                            transition: 'width 250ms ease-in-out',
                            position: 'absolute',
                            top: startY,
                            left: staryX,
                            width: 0,
                            transform: `rotate(${lineRotation}deg)`,
                        }}
                    />;

                    return line
                }
            }).filter(i => !!i);

            setElements(spans);
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