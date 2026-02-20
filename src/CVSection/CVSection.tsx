import { FC, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useAppContext } from "../AppContext";
import "./CVSection.css";
import Heading from "../atoms/Heading";
import { normalizeH } from "../atoms/Heading/Heading.tools";
import ExperienceCase from "../atoms/ExperienceCase";
import { AxisSteps, caseItemToSelector, DisplayDynamicSections, DynamicSectionId, MyTymeline, MyWork, MyWorkItem, ToolSections, ToolsList } from "./myTools";
import ToolSection from "../atoms/ToolSection/ToolSection";
import HoveringDiv from "../atoms/HoveringDiv/HoveringDiv";
import Chronology from "../atoms/Chronology/Chronology";
import DynamicDiagonal from "../atoms/DynamicDiagonal/DynamicDiagonal";
import { LanguageItem } from "../copywrite/types";

const DynamicSectionsTitleById: Record<DynamicSectionId, LanguageItem> = {
    'work-primary': {
        PL: "Moja praca",
        ENG: "My work"
    },
    'edu': {
        PL: "Wykształcenie",
        ENG: "Education"
    },
    'work-secondary': {
        PL: "Tym biznesom pomogłem",
        ENG: "Some businesses I helped"
    },
    'work-tertiary': {
        PL: "Moje ulubione",
        ENG: "My fav"
    }
}

const Typography = {
    title: {
        PL: 'Kim jestem',
        ENG: 'Who am I'
    },
    headline: {
        PL: 'dla biznesu',
        ENG: 'from business perspective'
    },
    casesTitle: {
        PL: 'Moja praca',
        ENG: 'My work'
    },
    eduTitle: {
        PL: 'Wykształcenie',
        ENG: 'Education'
    },
    otherWork: {
        PL: 'Tym biznesom pomogłem',
        ENG: 'Some of businesses I helped'
    },
    interestingWork: {
        PL: 'Moje ulubione',
        ENG: 'My favorite'
    },
    toolsTitle: {
        PL: 'Narzędzia',
        ENG: 'Tools'
    },
    skillsTitle: {
        PL: 'Umiejętności i wiedza',
        ENG: 'Skills'
    }
}

const CVSection: FC<{
    topH?: 1 | 2 | 3 | 4 | 5 | 6
}> = ({
    topH = 2,
}) => {
        const { lang } = useAppContext();
        const [activeStep, setActiveStep] = useState<number | null>(null);
        const [highlightedSteps, setHighlightedSteps] = useState<number[]>([]);
        const [isChronologyTouched, setIsChronologyTouched] = useState(false);

        const onStepChange = useCallback((params: { step: number | null, touched: boolean }) => {
            setActiveStep(params.step);
            setIsChronologyTouched(params.touched);
        }, []);

        const sectionLevel = normalizeH(topH);
        const articlesLevel = normalizeH(sectionLevel + 1);
        const caseLevel = normalizeH(sectionLevel + 1);
        const toolSectionLevel = normalizeH(articlesLevel + 1);

        const [hoveredCase, _setHoveredCase] = useState<null | MyWorkItem>(null);
        const [hoveredTool, setHoveredTool] = useState<null | ToolsList>(null);

        const setHoveredCase = useCallback((param: null | MyWorkItem) => {
            _setHoveredCase(param);
            const found = AxisSteps.find((step, index) => {
                if (step.token === JSON.stringify(param)) {
                    setHighlightedSteps([index]);
                    return true;
                }
                return false;
            });
            if (!found) {
                setHighlightedSteps([]);
            }
        }, []);

        const throttledScrollRef = useRef<number | null>(null);
        useEffect(() => {
            if (activeStep !== null) {
                if (throttledScrollRef.current) clearTimeout(throttledScrollRef.current);
                throttledScrollRef.current = setTimeout(() => {
                    const token = AxisSteps[activeStep]?.token;
                    if (!token) return;
                    const element = document.getElementById(token) as HTMLDivElement;
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'end',
                    });
                    setHoveredCase(JSON.parse(token))
                }, 500);
            }
            return () => {
                if (throttledScrollRef.current) clearTimeout(throttledScrollRef.current);
            }
        }, [activeStep, setHoveredCase]);

        const {
            activeTools,
            activeCases,
        } = useMemo(() => {
            const tools = hoveredCase?.stack ?? [];

            const cases = tools.map(tool => {
                const workCase = [...MyWork].find(item => [...item.stack].includes(tool as ToolsList.React));
                return workCase;
            }).filter(i => !!i);

            let activeAxisStep: number | null = null;

            AxisSteps.find((step, index) => {
                if (step.token === JSON.stringify(hoveredCase)) {
                    activeAxisStep = index;
                    return true;
                }
                return false;
            });

            return {
                activeTools: hoveredCase ? (hoveredCase?.stack ?? []) : null,
                activeCases: hoveredTool ? cases : null,
                activeAxisStep,
            }
        }, [hoveredCase, hoveredTool]);

        useEffect(() => {
            const sectionElement = document.body;
            if (sectionElement && hoveredCase) {
                DisplayDynamicSections.forEach(sectionConfig => {
                    const isCurrent = sectionConfig.data.some((caseItem) => {
                        const tokenizedCase = JSON.stringify(caseItem);
                        const tokenizedHoveredCase = JSON.stringify(hoveredCase);
                        return tokenizedCase === tokenizedHoveredCase;
                    });
                    if (isCurrent) {
                        sectionElement.style.setProperty("--section-accent", sectionConfig.accent);
                    }
                })
            }

            if (sectionElement && !hoveredCase) {
                sectionElement.style.removeProperty("--section-accent");
            }
        }, [hoveredCase]);

        return (
            <section className={ClassNames.CVSection}>
                <header className={ClassNames.CVSection_header}>
                    <Heading
                        h={sectionLevel}
                        className={ClassNames.CVSection_title}
                    >
                        {Typography.title[lang]}
                    </Heading>
                    <p className={ClassNames.CVSection_headline}>
                        {Typography.headline[lang]}
                    </p>
                </header>

                <div className={ClassNames.CVSection_content}>
                    <div className={ClassNames.CVSection_allCasesColumn}>
                        {DisplayDynamicSections.map(sectionConfig => {
                            return (
                                <article
                                    key={sectionConfig.id}
                                    id={sectionConfig.id}
                                    className={ClassNames.CVSection_cases}
                                >
                                    <ChangeCaseVarAccent sectionConfig={sectionConfig} />
                                    <Heading
                                        h={articlesLevel}
                                        className={ClassNames.CVSection_casesTitle}
                                        style={{
                                            color: sectionConfig.accent
                                        }}
                                    >
                                        {DynamicSectionsTitleById[sectionConfig.id][lang]}
                                    </Heading>
                                    {sectionConfig.data.map(piece => {
                                        const key = caseItemToSelector(piece);

                                        return (
                                            <HoveringDiv
                                                key={key}
                                                onHover={() => setHoveredCase(piece)}
                                                onHoverEnd={() => setHoveredCase(null)}
                                                style={{ width: 'max-content' }}
                                                data-anchor={key}
                                            >
                                                <ExperienceCase
                                                    topH={caseLevel}
                                                    title={piece.title}
                                                    subtitle={piece.subtitle}
                                                    description={piece.description}
                                                    timeDate={piece.date.time}
                                                    timeDisplay={piece.date.label}
                                                    caseSectionId={sectionConfig.id}
                                                    caseId={JSON.stringify(piece)}
                                                    isActive={!!hoveredCase && key === caseItemToSelector(hoveredCase)}
                                                />
                                            </HoveringDiv>
                                        );
                                    })}
                                </article>
                            )
                        })}
                    </div>

                    <section className={ClassNames.CVSection_tools}>
                        <article>
                            <Heading
                                h={articlesLevel}
                                className={ClassNames.CVSection_toolsTitle}
                            >
                                {Typography.toolsTitle[lang]}
                            </Heading>
                            <section className={ClassNames.CVSection_toolBlock}>
                                {Object.values(ToolSections).map(sectionName => {
                                    return <ToolSection
                                        variant="tools"
                                        key={sectionName}
                                        sectionName={sectionName}
                                        topH={toolSectionLevel}
                                        activeTools={activeTools ? [...activeTools] : null}
                                    />
                                })}
                            </section>
                        </article>
                        <article>
                            <Heading
                                h={articlesLevel}
                                className={ClassNames.CVSection_toolsTitle}
                                hidden
                            >
                                {Typography.skillsTitle[lang]}
                            </Heading>
                            <section className={ClassNames.CVSection_toolBlock}>
                                {Object.values(ToolSections).map(sectionName => {
                                    return <ToolSection
                                        variant="skills"
                                        key={sectionName}
                                        sectionName={sectionName}
                                        topH={toolSectionLevel}
                                        activeTools={activeTools ? [...activeTools] : null}
                                    />
                                })}
                            </section>
                        </article>
                    </section>
                </div>

                <div style={{ height: '100vh' }} />
                <aside
                    className={`${ClassNames.CVSection_aside} ${(() => {
                        if (highlightedSteps.length) {
                            return ClassNames.CVSection_asideShow
                        }
                        return ClassNames.CVSection_asideHide;
                    })()}`}

                >
                    <Chronology
                        step={activeStep}
                        onChange={onStepChange}
                        stepsConfig={AxisSteps}
                        highlightedSteps={highlightedSteps}
                    />
                </aside>

                {activeTools?.length && hoveredCase && (
                    <DynamicDiagonal
                        leftAnchor={caseItemToSelector(hoveredCase)}
                        rightAnchors={[...activeTools]}
                    />
                )}


            </section>
        )
    }

export default CVSection;

enum ClassNames {
    CVSection = 'CVSection',
    CVSection_title = 'CVSection_title',
    CVSection_headline = 'CVSection_headline',
    CVSection_header = 'CVSection_header',
    CVSection_content = 'CVSection_content',
    CVSection_allCasesColumn = 'CVSection_allCasesColumn',
    CVSection_cases = 'CVSection_cases',
    CVSection_tools = 'CVSection_tools',
    CVSection_casesTitle = 'CVSection_casesTitle',
    CVSection_toolsTitle = 'CVSection_toolsTitle',
    CVSection_toolBlock = 'CVSection_toolBlock',
    CVSection_aside = 'CVSection_aside',
    CVSection_asideShow = 'CVSection_asideShow',
    CVSection_asideHide = 'CVSection_asideHide'
}

const ChangeCaseVarAccent: FC<{
    sectionConfig: {
        id: DynamicSectionId;
        data: MyTymeline;
        accent: string;
    }
}> = ({ sectionConfig }) => {

    useEffect(() => {
        const rootElement = document.getElementById(sectionConfig.id) as HTMLDivElement;
        if (rootElement) {
            rootElement.style.setProperty('--section-accent', sectionConfig.accent);
        }
    });

    return null;
}