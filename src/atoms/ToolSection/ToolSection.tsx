import { FC } from "react";
import "./ToolSection.css";
import Heading from "../Heading";
import { HeadingLevel } from "../Heading/Heading.types";
import { MyTools, ToolSections, ToolsList } from "../../CVSection/myTools";
import { ClassNames } from "./ToolSection.types";

const ToolSection: FC<{
    topH: HeadingLevel,
    sectionName: ToolSections,
    activeTools?: null | ToolsList[],
}> = ({
    topH,
    sectionName,
    activeTools
}) => {

        let tools: string[] = [...MyTools[sectionName]];
        const isNameATool = tools.includes(sectionName);
        let isNameActive = false;
        if (isNameATool) {
            tools = tools.filter(i => i !== sectionName);
            isNameActive = (activeTools as string[])?.includes(sectionName);
        }
        return (
            <section className={ClassNames.ToolSection}>
                <Heading
                    h={topH}
                    data-tool-name={sectionName}
                    data-is-tool={isNameATool}
                    className={ClassNames.ToolSection_title}
                    data-active={`${isNameActive ? "true" : "false"}`}
                >
                    {sectionName}
                </Heading>

                <ul className={ClassNames.ToolSection_list}>
                    {tools.map(tool => {
                        return (
                            <li
                                key={tool}
                                data-tool-name={tool}
                                data-is-tool={true}
                                className={ClassNames.ToolSection_item}
                                data-active={`${(activeTools as string[])?.includes(tool) ? "true" : "false"}`}
                            >
                                {tool}
                            </li>
                        );
                    })}
                </ul>
            </section>
        )
    }

export default ToolSection