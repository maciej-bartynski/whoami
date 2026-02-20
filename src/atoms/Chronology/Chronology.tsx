import { FC, useCallback, useEffect, useRef, useState } from "react";
import './Chronology.css';
import { AxisStepConfig } from "../../CVSection/myTools";

const Chronology: FC<{
    onChange: (param: {
        step: number | null,
        touched: boolean;
    }) => void;
    stepsConfig: AxisStepConfig[],
    step: number | null,
    highlightedSteps: number[],
}> = ({
    onChange,
    stepsConfig,
    step,
    highlightedSteps
}) => {

        const trackRef = useRef<HTMLDivElement | null>(null);
        const handleRef = useRef<HTMLDivElement | null>(null);
        const [currentStep, setCurrentStep] = useState<number | null>(step);
        const [locked, _setLocked] = useState(false);

        useEffect(() => {
            setCurrentStep(step)
        }, [step])

        const setLocked = useCallback((locked: boolean) => {
            initialStepRef.current = currentStep;
            _setLocked(locked);
            if (!locked) {
                startMouseXRef.current = null;
            }
        }, [currentStep]);

        const initialStepRef = useRef(currentStep);
        const startMouseXRef = useRef<number | null>(null);

        useEffect(() => {
            if (currentStep === null) return;
            const handle = handleRef.current;
            const track = trackRef.current;
            if (!handle || !track) return;
            const distanceBetweenStepsPx = track.offsetWidth / (stepsConfig.length - 1);
            const handleOffset = handle.offsetWidth / 2;
            const handleX = (currentStep * distanceBetweenStepsPx) - handleOffset;
            handle.style.left = `${handleX}px`;
        });

        useEffect(() => {
            const onMouseMove = (e: MouseEvent) => {
                if (startMouseXRef.current === null) {
                    startMouseXRef.current = e.clientX;
                } else {
                    const track = trackRef.current;
                    if (!track || stepsConfig.length < 2) return;
                    const distanceBetweenStepsPx = track.offsetWidth / (stepsConfig.length - 1);
                    const currentStepToX = (initialStepRef.current || 0) * distanceBetweenStepsPx;
                    const shiftMouseX = e.clientX - startMouseXRef.current;
                    const newX = currentStepToX + shiftMouseX;
                    let newXToStep = Math.round(newX / distanceBetweenStepsPx);
                    if (newXToStep < 0) newXToStep = 0;
                    if (newXToStep >= stepsConfig.length) newXToStep = stepsConfig.length - 1;
                    setCurrentStep(newXToStep);
                }
            }
            if (locked) {
                window.addEventListener('mousemove', onMouseMove)
            }
            return () => {
                window.removeEventListener('mousemove', onMouseMove)
            }
        }, [locked, currentStep, stepsConfig]);

        useEffect(() => {
            const unlock = () => setLocked(false);
            window.addEventListener('mouseup', unlock);
            window.addEventListener('click', unlock);
            return () => {
                window.removeEventListener('mouseup', unlock);
                window.removeEventListener('click', unlock);
            }
        }, [setLocked]);

        useEffect(() => {
            if (step !== currentStep) {
                onChange({
                    step: currentStep,
                    touched: true,
                })
            }
        }, [step, currentStep, onChange])

        return (
            <div className={`Chronology_section ${locked ? '--operational' : ''}`}>
                <div className="Chronology_start-ornament"></div>
                <div
                    className="Chronology_track"
                    ref={trackRef}
                >
                    <div className="Chronology_axis" />
                    <ul className="Chronology_axis-list">
                        {stepsConfig.map((config, idx) => {
                            const isActive = step === idx;
                            const isHighlighted = highlightedSteps.includes(idx);

                            return (
                                <li
                                    key={idx}
                                    className={`Chronology_axis-unit 
                                        ${isActive ? '--active' : ''} 
                                        ${isHighlighted ? '--highlighted' : ''}
                                    `}
                                    style={{
                                        backgroundColor: config.bgColor,
                                        color: config.color
                                    }}
                                >
                                    <span
                                        className={`Chronology_axis-unit-label ${isHighlighted ? '--highlighted' : ''} ${isActive && !highlightedSteps.length ? '--active' : ''}`}
                                        style={{
                                            color: config.bgColor,
                                        }}
                                    >
                                        {config.label}
                                    </span>
                                    <span
                                        className={`Chronology_axis-unit-highlight ${isHighlighted ? '--highlighted' : ''} ${isActive && !highlightedSteps.length ? '--active' : ''}`}
                                        role="presentation"
                                        style={{
                                            background: `radial-gradient(ellipse 100% 100% at left bottom,
                                                ${config.bgColor},
                                                rgba(var(--pastel-rgb), 0))`
                                        }}
                                    />
                                </li>
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
                <div className="Chronology_end-ornament"></div>
            </div>
        )
    }

export default Chronology;