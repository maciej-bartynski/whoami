import { FC } from "react";
import reactLogo from '/mb-phone.webp';
import langIcon from "/language-icon.svg";
import './Banner.css'
import Typo from "../copywrite/copywrite";
import { useAppContext } from "../AppContext";

const Banner: FC = () => {
    const { lang, setLang } = useAppContext();

    return (
        <>
            <div className="banner">
                <div className="banner_card">
                    <div className="banner_card-margin">
                        <div className="banner_card-content">
                            <div className="banner_image-wrapper">
                                <img src={reactLogo} className="banner_image" alt="me - sitting with phone" />
                            </div>
                            <div className="banner_text-content-column">
                                <div className="banner_headline">
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: Typo.bannerHeadline[lang]
                                        }}
                                    />
                                </div>
                                <div className="banner_message">
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: Typo.bannerMessage[lang]
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="banner_more"
                >
                    <div className="banner_cta-line">

                        <div className="banner_contact-line">
                            <span>maciej bartyński</span>
                            <span>+48 784 482 159</span>
                            <span>maciek.bartynski@gmail.com</span>
                        </div>

                        <button
                            className="banner_cta-button"
                            onClick={() => {
                                window.scrollTo({
                                    top: window.innerHeight
                                })
                            }}
                        >
                            <span className="banner_cta-label">
                                {Typo.bannerScroll[lang]}
                            </span>
                            <span className="banner_arrow-like" />
                            <span className="banner_arrow-like --no-stick" />
                            <span className="banner_arrow-like --no-stick" />
                        </button>
                    </div>

                </div>
            </div>

            <button
                onClick={() => setLang(lang === 'PL' ? 'ENG' : 'PL')}
                className="lang-button"
            >
                <img src={langIcon} />{lang === 'PL' ? 'ENG' : 'PL'}
            </button>
        </>
    )
}

export default Banner;