import { FC } from "react";
import { useAppContext } from "../AppContext";
import "./CVSection.css";
import Heading from "../atoms/Heading";
import { normalizeH } from "../atoms/Heading/Heading.tools";
import ExperienceCase from "../atoms/ExperienceCase";

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

                        <ExperienceCase
                            topH={caseLevel}
                            title={'Front-end dev with React'}
                            subtitle={'for MrWork'}
                            description={"Build a Product for HR multiproducts app, integrate external SaaS'es with HR app"}
                            timeDate="23.03.2021"
                            timeDisplay="2021, ongoing"
                        />

                        <ExperienceCase
                            topH={caseLevel}
                            title={'Mobile dev with Flutter'}
                            subtitle={'for MrWork'}
                            description={"CI/CD for Flutter App for Google and AppStore, leveling UX by code optimization"}
                            timeDate="20.06.2024"
                            timeDisplay="2024, ongoing"
                        />

                        <ExperienceCase
                            topH={caseLevel}
                            title={'Front-end with React'}
                            subtitle={'for Neonet'}
                            description={"Adapting Venia storefront POC into real world React PWA on Magento 2 API"}
                            timeDate="20.06.2024"
                            timeDisplay="2024, ongoing"
                        />
                    </article>
                    <article className={ClassNames.CVSection_tools}>
                        <Heading h={articlesLevel} className={ClassNames.CVSection_toolsTitle}>
                            {Typography.toolsTitle[lang]}
                        </Heading>

                        <section></section>
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