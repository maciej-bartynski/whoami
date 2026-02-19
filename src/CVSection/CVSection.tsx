import { FC, useCallback, useMemo, useState } from "react";
import { useAppContext } from "../AppContext";
import "./CVSection.css";
import Heading from "../atoms/Heading";
import { normalizeH } from "../atoms/Heading/Heading.tools";
import ExperienceCase from "../atoms/ExperienceCase";
import { MyEdu, MyWork, MyWorkItem, MyWorkSecondary, MyWorkTertiary, ToolSections, ToolsList } from "./myTools";
import ToolSection from "../atoms/ToolSection/ToolSection";
import HoveringDiv from "../atoms/HoveringDiv/HoveringDiv";
import Chronology from "../atoms/Chronology/Chronology";
import DynamicDiagonal from "../atoms/DynamicDiagonal/DynamicDiagonal";

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
    toolsTitle: {
        PL: 'Narzędzia',
        ENG: 'Tools'
    }
}

const CVSection: FC<{
    topH?: 1 | 2 | 3 | 4 | 5 | 6
}> = ({
    topH = 2,
}) => {
        const { lang } = useAppContext();
        const [activeStep, setActiveStep] = useState(0);

        const [isChronologyTouched, setIsChronologyTouched] = useState(false);

        const onStepChange = useCallback((params: { step: number, touched: boolean }) => {
            setActiveStep(params.step);
            setIsChronologyTouched(params.touched);
        }, []);

        const sectionLevel = normalizeH(topH);
        const articlesLevel = normalizeH(sectionLevel + 1);
        const caseLevel = normalizeH(sectionLevel + 1);
        const toolSectionLevel = normalizeH(articlesLevel + 1);

        const [hoveredCase, setHoveredCase] = useState<null | MyWorkItem>(null);
        const [hoveredTool, setHoveredTool] = useState<null | ToolsList>(null);

        const { activeTools, activeCases } = useMemo(() => {

            const tools = hoveredCase?.stack ?? [];

            const cases = tools.map(tool => {
                const workCase = [...MyWork].find(item => [...item.stack].includes(tool));
                return workCase;
            }).filter(i => !!i);

            return {
                activeTools: hoveredCase ? (hoveredCase?.stack ?? []) : null,
                activeCases: hoveredTool ? cases : null,
            }

        }, [hoveredCase, hoveredTool]);

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
                    <article className={ClassNames.CVSection_cases}>
                        <Heading h={articlesLevel} className={ClassNames.CVSection_casesTitle}>
                            {Typography.casesTitle[lang]}
                        </Heading>
                        {MyWork.map(piece => {
                            return (
                                <HoveringDiv
                                    key={JSON.stringify(piece)}
                                    onHover={() => setHoveredCase(piece)}
                                    onHoverEnd={() => setHoveredCase(null)}
                                    style={{ width: '100%' }}
                                    data-anchor={JSON.stringify(piece)}
                                >
                                    <ExperienceCase
                                        topH={caseLevel}
                                        title={piece.title}
                                        subtitle={piece.subtitle}
                                        description={piece.description}
                                        timeDate={piece.date.time}
                                        timeDisplay={piece.date.label}
                                    />
                                </HoveringDiv>
                            )
                        })}
                    </article>
                    <article className={ClassNames.CVSection_tools}>
                        <Heading h={articlesLevel} className={ClassNames.CVSection_toolsTitle}>
                            {Typography.toolsTitle[lang]}
                        </Heading>
                        <section className={ClassNames.CVSection_toolBlock}>
                            {Object.values(ToolSections).map(sectionName => {
                                return <ToolSection
                                    key={sectionName}
                                    sectionName={sectionName}
                                    topH={toolSectionLevel}
                                    activeTools={activeTools ? [...activeTools] : null}
                                />
                            })}
                        </section>
                    </article>
                </div>

                <aside className={ClassNames.CVSection_aside}>
                    <Chronology
                        step={activeStep}
                        onChange={onStepChange}
                        stepConfig={AxisSteps}
                    />
                </aside>

                {activeTools?.length && hoveredCase && (
                    <DynamicDiagonal
                        leftAnchor={JSON.stringify(hoveredCase)}
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
    CVSection_cases = 'CVSection_cases',
    CVSection_tools = 'CVSection_tools',
    CVSection_casesTitle = 'CVSection_casesTitle',
    CVSection_toolsTitle = 'CVSection_toolsTitle',
    CVSection_toolBlock = 'CVSection_toolBlock',
    CVSection_aside = 'CVSection_aside'
}

const AxisSteps = [
    ...MyWork.map(item => {
        return {
            color: 'var(--paper)',
            bgColor: 'var(--pastel)',
            label: item.title,
            sortKey: item.date.time
        }
    }),
    ...MyWorkSecondary.map(item => {
        return {
            color: 'var(--paper)',
            bgColor: 'var(--pastel)',
            label: item.title,
            sortKey: item.date.time
        }
    }),
    ...MyWorkTertiary.map(item => {
        return {
            color: 'var(--paper)',
            bgColor: 'var(--pastel)',
            label: item.title,
            sortKey: item.date.time
        }
    }),
    ...MyEdu.map(item => {
        return {
            color: 'var(--paper)',
            bgColor: 'var(--pastel)',
            label: item.title,
            sortKey: item.date.time
        }
    }),
].sort((a, b) => {
    const dateA = new Date(a.sortKey).getTime();
    const dateB = new Date(b.sortKey).getTime();
    return dateA - dateB;
});


