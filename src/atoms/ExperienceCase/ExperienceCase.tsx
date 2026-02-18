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
    timeDate: string
}> = ({
    topH = 3,
    title,
    description,
    timeDate,
    timeDisplay,
    subtitle
}) => {
        return (
            <article className={ClassNames.ExperienceCase}>
                <Heading h={topH} className={ClassNames.ExperienceCase_heading}>
                    <span>{title}</span>{" "}<span>{subtitle}</span>
                </Heading>
                <time dateTime={timeDate} className={ClassNames.ExperienceCase_time}>
                    {timeDisplay}
                </time>
                <p className={ClassNames.ExperienceCase_description}>
                    {description}
                </p>
            </article>
        )
    }

export default ExperienceCase;

