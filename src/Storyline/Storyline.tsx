import { FC, useCallback, useMemo, useRef, useState } from "react";
import "./Storyline.css";
import StorylineTypog, { DevTools, EducationTypo } from "../copywrite/storyline";
import Typo from "../copywrite/copywrite";
import { useAppContext } from "../AppContext";
import Axis from "../atoms/Axis/Axis";
import AxisLabel from "../atoms/AxisLabel/AxisLabel";
import ExperienceTile, { ExperienceTileDates, ExperienceTileLabel, ExperienceTileProject } from "../atoms/ExperienceTile/ExperienceTile";

const storylineTrack = [
    {
        importance: 0,
        project: 'whoami?',
        role: '',
        type: '',
        stack: '',
        state: '',
        searchBy: [],
    },
    ...EducationTypo,
    ...StorylineTypog,
];

const Storyline: FC = () => {
    const { lang } = useAppContext();

    const [activeTool, setActiveTool] = useState<DevTools | null>(null);
    const [activeStepData, setActiveStep] = useState<{ step: number, positionPx: number }>({
        step: 0,
        positionPx: 0,
    });

    const {
        step: activeStep,
        positionPx
    } = activeStepData;


    const printProjects = useCallback((storyline: typeof storylineTrack) => {
        return <>
            {storyline.map(data => {
                return <ExperienceTile
                    key={data.project}
                    dates={data.state}
                    header={data.project}
                    stack={data.stack}
                    role={data.role}
                    vibe={data.type}
                />
            })}
        </>
    }, []);

    const {
        activeStoryline,
        restStoryline
    } = useMemo(() => {

        const activeStoryline = printProjects(storylineTrack.filter(item => {
            if (!activeTool) return false;
            return item.searchBy.includes(activeTool);
        }));

        const restStoryline = printProjects(storylineTrack.filter(item => {
            if (!activeTool) return true;
            return !item.searchBy.includes(activeTool);
        }));

        return {
            activeStoryline,
            restStoryline
        }
    }, [activeTool, printProjects]);

    const tileHeight = 150;
    const lastEduBreakpoint = (EducationTypo.length);
    const totalBreakpoints = (storylineTrack.length - 1);
    const eduWidthPercent = (100 / totalBreakpoints) * lastEduBreakpoint;
    const expWidthPercent = 100 - eduWidthPercent;
    const eduWidthStyle = `calc( (100% - 60px) * ${eduWidthPercent / 100} + 60px)`;
    const expWidthStyle = `calc(  (100% - 60px) * ${expWidthPercent / 100} + 60px)`;
    const stepContentRef = useRef<HTMLDivElement | null>(null)

    return (
        <div className="storyline">

            <div className="storyline_projects">
                <h2 className="storyline_title">
                    {Typo.storylineHead[lang]}
                </h2>


                <div className="storyline_axis-section">
                    <style>
                        {`
                            @media(max-width: 1000px), (orientation: portrait) {
                                .storyline_axis-section {
                                    display: none;
                                }
                            }
                        `}
                    </style>
                    <div className="storyline_chart">
                        <div className="storyline_chart-sections">
                            <div
                                className={`storyline_chart-column storyline_chart-edu ${(() => {
                                    if (activeStep < EducationTypo.length && !!activeStep) {
                                        return '--active'
                                    }
                                    return ''
                                })()}`}
                                style={{
                                    width: eduWidthStyle,
                                }}
                                data-attr={(function () {
                                    if (!activeStep) return ''
                                    return lang === 'PL'
                                        ? 'Edukacja'
                                        : 'Education'
                                })()}
                            />
                            <div
                                className={`storyline_chart-column storyline_chart-exp ${(() => {
                                    if (activeStep >= EducationTypo.length) {
                                        return '--active'
                                    }
                                    return ''
                                })()}`}
                                style={{
                                    width: expWidthStyle,
                                }}
                                data-attr={(function () {
                                    if (!activeStep) return ''
                                    return lang === 'PL'
                                        ? 'Doświadczenie w programowaniu'
                                        : 'Experience in programming'
                                })()}
                            />
                        </div>
                        <div
                            ref={stepContentRef}
                            className="storyline_step-content"
                        >
                            {!activeStep && (
                                <div
                                    className="storyline_step-invite"
                                    style={{
                                        left: positionPx
                                    }}
                                >
                                    <span className="storyline_step-invite-headline">
                                        <span>who am i</span>
                                        <span>from business perspective</span>
                                    </span>
                                    <span
                                        className="storyline_step-invite-bullet"
                                    >
                                        &rsaquo; alomost 10 y. in programming
                                    </span>
                                    <span className="storyline_step-invite-bullet">
                                        &rsaquo; communication sciencie as background
                                    </span>
                                    <span className="storyline_step-invite-bullet">
                                        &rsaquo; ui/ux experience
                                    </span>
                                    <span className="storyline_step-invite-claim">
                                        &rsaquo; always learning, always coding
                                    </span>
                                    <span className="storyline_step-invite-message">
                                        use this handle
                                    </span>
                                </div>
                            )}
                            {!!activeStep && (
                                <>
                                    <div
                                        className="storyline_y-axis-field"
                                        style={{
                                            width: positionPx + 0,
                                            height: tileHeight
                                        }}
                                    >
                                        <div className="storyline_y-axis-field-dot" />
                                    </div>

                                    <AxisLabel
                                        row={0}
                                        heightPx={tileHeight}
                                        widthPx={positionPx + 0}
                                        areaRef={stepContentRef}
                                        heightOffset={30}
                                    >
                                        <ExperienceTileDates >
                                            {storylineTrack[activeStep].state}
                                        </ExperienceTileDates>
                                    </AxisLabel>
                                    <AxisLabel
                                        row={1}
                                        heightPx={tileHeight}
                                        widthPx={positionPx + 0}
                                        areaRef={stepContentRef}
                                        heightOffset={30}
                                    >
                                        <ExperienceTileProject
                                            isOngoing={false}
                                            baseColor={((): string => {
                                                if (activeStep < EducationTypo.length) {
                                                    return 'rgba(var(--jeans-rgb), .5)';
                                                }
                                                return 'var(--pastel)'
                                            })()}
                                        >
                                            {storylineTrack[activeStep].project}
                                        </ExperienceTileProject>
                                    </AxisLabel>

                                    <AxisLabel
                                        row={2}
                                        heightPx={tileHeight}
                                        widthPx={positionPx + 0}
                                        areaRef={stepContentRef}
                                        heightOffset={40}
                                    >
                                        <ExperienceTileLabel label={lang === 'PL' ? 'rola: ' : 'role: '}>
                                            {storylineTrack[activeStep].role}
                                        </ExperienceTileLabel>
                                    </AxisLabel>

                                    <AxisLabel
                                        row={3}
                                        heightPx={tileHeight}
                                        widthPx={positionPx + 0}
                                        areaRef={stepContentRef}
                                        heightOffset={40}
                                    >
                                        <ExperienceTileLabel label={lang === 'PL' ? 'stack: ' : 'stack: '}>
                                            {storylineTrack[activeStep].stack}
                                        </ExperienceTileLabel>
                                    </AxisLabel>

                                    <AxisLabel
                                        row={4}
                                        heightPx={tileHeight}
                                        widthPx={positionPx + 0}
                                        areaRef={stepContentRef}
                                        heightOffset={40}
                                    >
                                        <ExperienceTileLabel label={lang === 'PL' ? 'vibe: ' : 'vibe: '}>
                                            {storylineTrack[activeStep].type}
                                        </ExperienceTileLabel>
                                    </AxisLabel>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="storyline_axis-wrapper">
                        <div className="storyline_axis-wrapper_before" />
                        <Axis
                            onChange={setActiveStep}
                            stepConfig={storylineTrack.map(item => item.project)}
                        />
                        <div className="storyline_axis-wrapper_after" />
                    </div>
                </div>

                <div
                    className="storyline_projects-list"
                    id="storyline-project-list"
                >
                    {activeTool ?
                        <>
                            <h2 className="storyline_subsection-title">
                                _{activeTool}
                            </h2>
                            {activeStoryline}
                        </>
                        : null
                    }
                    {activeTool && (
                        <h2 className="storyline_subsection-title">
                            {lang === 'PL' ? '_reszta' : '_the rest'}
                        </h2>
                    )}
                    {restStoryline}
                </div>
            </div>

            <div className="storyline_tags">

                <h2 className="storyline_tag-title">
                    {Typo.storylineTools[lang]}
                </h2>

                {Object.entries(DevTools).map(entry => {
                    const [key, value] = entry;
                    const isActive = value === activeTool;
                    return (
                        <button
                            key={key}
                            className={`storyline_dev-tool ${isActive ? '--active' : ''}`}
                            onClick={() => setActiveTool(value)}
                        >
                            <span>
                                {value}
                            </span>
                        </button>
                    )
                })}
            </div>
        </div >
    )
}

export default Storyline;