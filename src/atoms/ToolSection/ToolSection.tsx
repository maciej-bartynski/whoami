import { FC } from "react";
import "./ToolSection.css";
import Heading from "../Heading";
import { HeadingLevel } from "../Heading/Heading.types";
import { MyTools, ToolSections } from "../../CVSection/myTools";
import { ClassNames } from "./ToolSection.types";

const ToolSection: FC<{
    topH: HeadingLevel,
    sectionName: ToolSections
}> = ({
    topH,
    sectionName
}) => {

        let tools: string[] = [...MyTools[sectionName]];
        const isNameATool = tools.includes(sectionName);
        if (isNameATool) {
            tools = tools.filter(i => i !== sectionName);
        }
        return (
            <section className={ClassNames.ToolSection}>
                <Heading
                    h={topH}
                    data-tool-name={sectionName}
                    data-is-tool={isNameATool}
                    className={ClassNames.ToolSection_title}
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