import { FC, useState } from "react";
import { useAppContext } from "../AppContext";
import "./CVSection.css";
import Heading from "../atoms/Heading";
import { normalizeH } from "../atoms/Heading/Heading.tools";
import ExperienceCase from "../atoms/ExperienceCase";
import { MyWork, MyWorkItem, ToolSections, ToolsList } from "./myTools";
import ToolSection from "../atoms/ToolSection/ToolSection";

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
        const sectionLevel = normalizeH(topH);
        const articlesLevel = normalizeH(sectionLevel + 1);
        const caseLevel = normalizeH(sectionLevel + 1);
        const toolSectionLevel = normalizeH(articlesLevel + 1);

        const [hoveredCase, setHoveredCase] = useState<null | MyWorkItem>(null);
        const [hoveredTool, setHoveredTool] = useState<null | ToolsList>(null);

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
                                <ExperienceCase
                                    key={JSON.stringify(piece)}
                                    topH={caseLevel}
                                    title={piece.title}
                                    subtitle={piece.subtitle}
                                    description={piece.description}
                                    timeDate={piece.date.time}
                                    timeDisplay={piece.date.label}
                                />
                            )
                        })}
                    </article>
                    <article className={ClassNames.CVSection_tools}>
                        <Heading h={articlesLevel} className={ClassNames.CVSection_toolsTitle}>
                            {Typography.toolsTitle[lang]}
                        </Heading>
                        <section>
                            {Object.values(ToolSections).map(sectionName => {
                                return <ToolSection
                                    key={sectionName}
                                    sectionName={sectionName}
                                    topH={toolSectionLevel}
                                />
                            })}
                        </section>
                    </article>
                </div>

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
    CVSection_toolsTitle = 'CVSection_toolsTitle'
}