import { FC, useEffect, useRef, useState } from "react";
import './Axis.css';
import Typo from "../../copywrite/copywrite";
import { useAppContext } from "../../AppContext";
import { EducationTypo } from "../../copywrite/storyline";

const Axis: FC<{
    onChange: (param: { step: number, positionPx: number }) => void;
    stepConfig: string[]
}> = ({
    onChange,
    stepConfig
}) => {
        const { lang } = useAppContext();
        const trackRef = useRef<HTMLDivElement | null>(null);
        const handleRef = useRef<HTMLDivElement | null>(null);
        const [locked, setLocked] = useState(false);
        const [activeValue, setActiveValue] = useState(0);

        useEffect(() => {
            const observer = new MutationObserver(() => {
                const handler = handleRef.current;
                const track = trackRef.current;

                if (!handler || !track) {
                    return;
                }

                const joke = track.querySelector('span');

                if (!joke) return;

                const positionInsideTrack = parseInt(handler.style.left) + (handler.offsetWidth / 2);
                if (positionInsideTrack >= joke.offsetWidth) {
                    joke.style.opacity = '1';
                    joke.style.visibility = 'visible';
                } else {
                    joke.style.opacity = '0';
                    joke.style.visibility = 'hidden';
                }
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
        })

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
                onChange({ step: currentStep, positionPx: position });
                setActiveValue(currentStep)
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
            <div className="Axis_section">
                <div
                    className="Axis_track"
                    ref={trackRef}
                >
                    <div className="Axis_axis" />
                    {stepConfig.map((project, idx) => {
                        return (
                            <div
                                key={project}
                                className={`Axis_axis-unit ${(() => {
                                    let className = ''

                                    const isWhoami = idx === 0;
                                    const isEdu = (idx < EducationTypo.length) && !isWhoami;
                                    const isExp = !isEdu && !isWhoami;



                                    if (isWhoami) {
                                        className = '--edu-invite'
                                    } else {
                                        className = isEdu
                                            ? '--edu-bg'
                                            : '--exp-bg'
                                    }

                                    if (isWhoami && activeValue !== 0) {
                                        className += ' --active'
                                    } else if (isEdu && (activeValue < EducationTypo.length) && activeValue) {
                                        className += ' --active'
                                    } else if (isExp && (activeValue >= EducationTypo.length)) {
                                        className += ' --active'
                                    }

                                    return className
                                })()}`}
                                data-attr={project}
                                style={{
                                    backgroundColor: idx < EducationTypo.length
                                        ? 'var(--wall)'
                                        : 'var(--pastel)',

                                }}
                            />
                        )
                    })}
                    <div
                        className="Axis_handle"
                        ref={handleRef}
                        onMouseDown={() => setLocked(true)}
                        onMouseUp={() => setLocked(false)}
                        onClick={() => setLocked(false)}
                    >
                        &lsaquo;&rsaquo;
                        <span className="Axis_handle-joke">
                            {Typo.storylineJoke[lang]}
                        </span>
                    </div>
                </div>
            </div>
        )
    }

export default Axis;