import { FC, useCallback, useMemo, useRef, useState } from "react";
import "./Storyline.css";
import StorylineTypo, { DevTools } from "../copywrite/storyline";
import Typo from "../copywrite/copywrite";
import { useAppContext } from "../AppContext";
import Axis from "../atoms/Axis/Axis";
import AxisLabel from "../atoms/AxisLabel/AxisLabel";
import ExperienceTile, { ExperienceTileDates, ExperienceTileLabel, ExperienceTileProject } from "../atoms/ExperienceTile/ExperienceTile";

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


    const printProjects = useCallback((storyline: typeof StorylineTypo) => {
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

        const activeStoryline = printProjects(StorylineTypo.filter(item => {
            if (!activeTool) return false;
            return item.searchBy.includes(activeTool);
        }));

        const restStoryline = printProjects(StorylineTypo.filter(item => {
            if (!activeTool) return true;
            return !item.searchBy.includes(activeTool);
        }));

        return {
            activeStoryline,
            restStoryline
        }
    }, [activeTool, printProjects]);

    const tileHeight = 150;
    const availableSpace = 400;
    const playMargin = availableSpace - tileHeight;
    const currentImportance = StorylineTypo[activeStep]?.yAxis?.y ?? 4;
    const importanceLevelPx = (playMargin / 10);
    const importanceToPx = (importanceLevelPx * currentImportance) - importanceLevelPx;

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
                    <div
                        ref={stepContentRef}
                        className="storyline_step-content"
                    // style={{
                    //     transition: 'padding-bottom 150ms linear',
                    //     paddingBottom: importanceToPx,
                    // }}
                    >
                        {/* {!!activeStep && (
                            <div className="storyline_y-axis">
                                <div className="storyline_y-axis-label">
                                    {StorylineTypo[activeStep]?.yAxis?.label[lang]}
                                </div>
                                <div
                                    className="storyline_y-axis-line"
                                    style={{ height: importanceToPx + tileHeight }}
                                />
                            </div>
                        )} */}

                        {!!activeStep && (
                            <>
                                <div
                                    className="storyline_y-axis-field"
                                    style={{
                                        width: positionPx + 0,
                                        // height: importanceToPx + tileHeight,
                                        height: tileHeight

                                    }}
                                >
                                    <div className="storyline_y-axis-field-dot" />
                                </div>

                                <AxisLabel
                                    row={0}
                                    // heightPx={importanceToPx + tileHeight}
                                    heightPx={tileHeight}
                                    widthPx={positionPx + 0}
                                    areaRef={stepContentRef}
                                    heightOffset={30}
                                >
                                    <ExperienceTileDates >
                                        {StorylineTypo[activeStep].state}
                                    </ExperienceTileDates>
                                </AxisLabel>
                                <AxisLabel
                                    row={1}
                                    // heightPx={importanceToPx + tileHeight}
                                    heightPx={tileHeight}
                                    widthPx={positionPx + 0}
                                    areaRef={stepContentRef}
                                    heightOffset={30}
                                >
                                    <ExperienceTileProject isOngoing={false}>
                                        {StorylineTypo[activeStep].project}
                                    </ExperienceTileProject>
                                </AxisLabel>

                                <AxisLabel
                                    row={2}
                                    // heightPx={importanceToPx + tileHeight}
                                    heightPx={tileHeight}
                                    widthPx={positionPx + 0}
                                    areaRef={stepContentRef}
                                    heightOffset={40}
                                >
                                    <ExperienceTileLabel label={lang === 'PL' ? 'rola: ' : 'role: '}>
                                        {StorylineTypo[activeStep].role}
                                    </ExperienceTileLabel>
                                </AxisLabel>

                                <AxisLabel
                                    row={3}
                                    // heightPx={importanceToPx + tileHeight}
                                    heightPx={tileHeight}
                                    widthPx={positionPx + 0}
                                    areaRef={stepContentRef}
                                    heightOffset={40}
                                >
                                    <ExperienceTileLabel label={lang === 'PL' ? 'stack: ' : 'stack: '}>
                                        {StorylineTypo[activeStep].stack}
                                    </ExperienceTileLabel>
                                </AxisLabel>

                                <AxisLabel
                                    row={4}
                                    // heightPx={importanceToPx + tileHeight}
                                    heightPx={tileHeight}
                                    widthPx={positionPx + 0}
                                    areaRef={stepContentRef}
                                    heightOffset={40}
                                >
                                    <ExperienceTileLabel label={lang === 'PL' ? 'vibe: ' : 'vibe: '}>
                                        {StorylineTypo[activeStep].type}
                                    </ExperienceTileLabel>
                                </AxisLabel>
                            </>
                        )}

                        {!activeStep && (
                            <div className="storyline_education">
                                {lang === 'PL'
                                    ? 'Doświadczenie w programowaniu'
                                    : 'Experience in programming'}
                            </div>
                        )}
                    </div>
                    <div className="storyline_axis-wrapper">
                        <div className="storyline_axis-wrapper_before" />
                        <Axis
                            // steps={StorylineTypo.length - 1}
                            onChange={setActiveStep}
                            stepConfig={StorylineTypo.map(item => item.project)}
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
        </div>
    )
}

export default Storyline;