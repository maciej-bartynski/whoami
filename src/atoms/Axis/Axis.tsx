import { FC, useEffect, useRef, useState } from "react";
import './Axis.css';
import Typo from "../../copywrite/copywrite";
import { useAppContext } from "../../AppContext";

const Axis: FC<{
    onChange: (param: { step: number, positionPx: number }) => void;
    // steps: number,
    stepConfig: string[]
}> = ({
    onChange,
    stepConfig
}) => {
        const steps = stepConfig.length;
        const trackEndMargin = 15;
        const { lang } = useAppContext();
        const trackRef = useRef<HTMLDivElement | null>(null);
        const handleRef = useRef<HTMLDivElement | null>(null);
        const [locked, setLocked] = useState(false);

        useEffect(() => {
            const track = trackRef.current;
            if (track) {
                const nodes = track.querySelectorAll('.Axis_axis-unit');
                const units = [...nodes];
                units.forEach((element, id) => {
                    const posRight = (track.offsetWidth) - (((track.offsetWidth + trackEndMargin) / steps) * id);
                    (element as HTMLDivElement).style.right = `${posRight}px`;
                })

            }
        })

        useEffect(() => {
            const observer = new MutationObserver(() => {
                const handler = handleRef.current;
                const track = trackRef.current;
                if (!handler || !track) {
                    return;
                }

                const rangePx = track.offsetWidth;
                const position = parseInt(handler.style.left);
                const pxPerStep = (rangePx) / steps;
                const currentStep = Math.floor(position / pxPerStep);
                onChange({ step: currentStep, positionPx: position });
            });

            const handler = handleRef.current;
            const track = trackRef.current;
            if (!handler || !track) {
                return;
            }

            observer.observe(handler, {
                attributes: true,
                attributeFilter: ["style"]
            });

            return () => {
                observer.disconnect()
            }
        }, [onChange, steps])


        useEffect(() => {
            let startPosition: number | null = null;
            let initialShift: number = 0;

            const onMouseMove = (e: MouseEvent) => {
                if (startPosition === null) {
                    startPosition = e.clientX;
                    if (handleRef.current) {
                        initialShift = parseInt(handleRef?.current.style.left || "0") ?? 0;
                    }
                } else {
                    const additionalShift = e.clientX - startPosition;
                    const totalShift = initialShift + additionalShift;
                    const handler = handleRef.current;
                    const track = trackRef.current;
                    if (handler && track) {
                        const maxShift = (track.offsetWidth) - (handler.offsetWidth / 2);
                        let finalShift = totalShift;
                        if (totalShift >= maxShift) {
                            finalShift = maxShift;
                        }
                        if (totalShift < 0) {
                            finalShift = 0;
                        }
                        handler.style.left = `${finalShift}px`
                    }
                }
            }
            if (locked) {
                window.addEventListener('mousemove', onMouseMove)
            }

            return () => {
                window.removeEventListener('mousemove', onMouseMove)
            }
        }, [locked]);

        useEffect(() => {
            const unlock = () => setLocked(false);
            window.addEventListener('mouseup', unlock);
            window.addEventListener('click', unlock);
            return () => {
                window.removeEventListener('mouseup', unlock);
                window.removeEventListener('click', unlock);
            }
        }, []);

        return (
            <div className="Axis_section">
                <div
                    className="Axis_track"
                    ref={trackRef}
                >
                    <div className="Axis_axis" />
                    {stepConfig.map((project) => {
                        return (
                            <div
                                key={project}
                                className="Axis_axis-unit"
                            >
                                {project}
                            </div>
                        )
                    })}
                    <div
                        data-attr={Typo.storylineJoke[lang]}
                        className="Axis_handle"
                        ref={handleRef}
                        onMouseDown={() => setLocked(true)}
                        onMouseUp={() => setLocked(false)}
                        onClick={() => setLocked(false)}
                        style={{
                            left: 0
                        }}
                    >
                        &lsaquo;&rsaquo;
                    </div>
                </div>
            </div>
        )
    }

export default Axis;