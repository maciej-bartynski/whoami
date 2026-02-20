import { FC } from "react";
import { ClassNames } from "./ExperienceCase.types";
import Heading from "../Heading";
import { HeadingLevel } from "../Heading/Heading.types";
import "./ExperienceCase.css";

const ExperienceCase: FC<{
    topH?: HeadingLevel,
    title: string,
    subtitle: string,
    description: string,
    timeDisplay: string,
    timeDate: string,
    caseSectionId?: string,
    caseId?: string;
    isActive?: boolean;
}> = ({
    topH = 3,
    title,
    description,
    timeDate,
    timeDisplay,
    subtitle,
    caseSectionId,
    caseId,
    isActive
}) => {
        return (
            <article
                data-section-id={caseSectionId}
                className={`${ClassNames.ExperienceCase} ${isActive ? '--active' : ''}`}
                id={caseId}
            >
                <Heading h={topH} className={ClassNames.ExperienceCase_heading}>
                    <span>{title}</span>{" "}<span>{subtitle}</span>
                </Heading>
                <time
                    dateTime={timeDate}
                    className={ClassNames.ExperienceCase_time}
                >
                    {timeDisplay}
                </time>
                <p className={ClassNames.ExperienceCase_description}>
                    {description}
                </p>
            </article>
        )
    }

export default ExperienceCase;

