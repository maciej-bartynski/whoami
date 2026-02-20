import { FC } from "react";
import "./ToolSection.css";
import Heading from "../Heading";
import { HeadingLevel } from "../Heading/Heading.types";
import { MapToolSectionToLang, MapToolToLang, MySkills, MyTools, ToolSections, ToolsList } from "../../CVSection/myTools";
import { ClassNames } from "./ToolSection.types";
import { useAppContext } from "../../AppContext";

const ToolSection: FC<{
    variant: 'tools' | 'skills',
    topH: HeadingLevel,
    sectionName: ToolSections,
    activeTools?: null | ToolsList[],
}> = ({
    variant,
    topH,
    sectionName,
    activeTools
}) => {

        const { lang } = useAppContext();

        const MyStack = {
            ...MyTools,
            ...MySkills
        }

        if (variant === 'skills') {
            const sectionNameIsNotForSkills = !(MySkills[sectionName as keyof typeof MySkills]);
            if (sectionNameIsNotForSkills) return null;
        }

        if (variant === 'tools') {
            const sectionNameIsNotForSkills = !(MyTools[sectionName as keyof typeof MyTools]);
            if (sectionNameIsNotForSkills) return null;
        }

        let tools: string[] = [...MyStack[sectionName]];

        const isNameATool = tools.includes(sectionName);
        let isNameActive = false;
        if (isNameATool) {
            tools = tools.filter(i => i !== sectionName);
            isNameActive = (activeTools as string[])?.includes(sectionName);
        }

        const displaySectionName = MapToolSectionToLang[sectionName]?.[lang] || sectionName;

        return (
            <section className={ClassNames.ToolSection}>
                <Heading
                    h={topH}
                    data-tool-name={sectionName}
                    data-is-tool={isNameATool}
                    className={ClassNames.ToolSection_title}
                    data-active={`${isNameActive ? "true" : "false"}`}
                    data-anchor={sectionName}
                >
                    {displaySectionName}
                </Heading>

                <ul className={ClassNames.ToolSection_list}>
                    {tools.map(tool => {
                        const _t = tool as ToolsList;
                        const displaySectionTool = MapToolToLang[_t]?.[lang] || tool;
                        return (
                            <li
                                key={tool}
                                data-tool-name={tool}
                                data-is-tool={true}
                                className={ClassNames.ToolSection_item}
                                data-active={`${(activeTools as string[])?.includes(tool) ? "true" : "false"}`}
                                data-anchor={tool}
                            >
                                {displaySectionTool}
                            </li>
                        );
                    })}
                </ul>
            </section>
        )
    }

export default ToolSection