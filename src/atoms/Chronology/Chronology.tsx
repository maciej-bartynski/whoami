import { FC, useEffect, useRef, useState } from "react";
import './Chronology.css';

type StepConfig = {
    label: string,
    bgColor: string,
    color: string,
}

const Chronology: FC<{
    onChange: (param: {
        step: number,
        touched: boolean;
    }) => void;
    stepConfig: StepConfig[],
    step: number,
}> = ({
    onChange,
    stepConfig,
    step
}) => {

        const trackRef = useRef<HTMLDivElement | null>(null);
        const handleRef = useRef<HTMLDivElement | null>(null);
        const [locked, setLocked] = useState(false);

        useEffect(() => {
            const observer = new MutationObserver(() => {
                const handler = handleRef.current;
                const track = trackRef.current;
                if (!handler || !track) {
                    return;
                }

                const rangePx = track.offsetWidth;
                let position = parseInt(handler.style.left) + (handler.offsetWidth / 2);
                if (position < 0) position = 0;
                if (position > rangePx) position = rangePx;
                const pxPerStep = (rangePx) / (stepConfig.length - 1);
                let currentStep = Math.floor(position / pxPerStep);
                if (currentStep < 0) currentStep = 0;
                if (currentStep > (stepConfig.length - 1)) currentStep = stepConfig.length - 1;
                onChange({ step: currentStep, touched: true });
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
        }, [onChange, stepConfig])

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
                        const handlerShift = (handler.offsetWidth / 2);
                        const minShift = -handlerShift;
                        const maxShift = (track.offsetWidth) - handlerShift;

                        let finalShift = totalShift;

                        if (totalShift >= maxShift) {
                            finalShift = maxShift;
                        }
                        if (totalShift < minShift) {
                            finalShift = minShift;
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
            <div className="Chronology_section">
                <div
                    className="Chronology_track"
                    ref={trackRef}
                >
                    <div className="Chronology_axis" />
                    <ul className="Chronology_axis-list">
                        {stepConfig.map((config, idx) => {
                            return (
                                <li
                                    key={idx}
                                    className={`Chronology_axis-unit ${step === idx ? '--active' : ''}`}
                                    data-attr={config.label}
                                    style={{
                                        backgroundColor: 'var(--pastel)',
                                    }}
                                />
                            )
                        })}
                    </ul>
                    <div
                        className="Chronology_handle"
                        ref={handleRef}
                        onMouseDown={() => setLocked(true)}
                        onMouseUp={() => setLocked(false)}
                        onClick={() => setLocked(false)}
                        role="presentation"
                    >
                        &lsaquo;&rsaquo;
                    </div>
                </div>
            </div>
        )
    }

export default Chronology;