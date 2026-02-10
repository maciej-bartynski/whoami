import { FC, useEffect, useRef, useState } from "react";
import reactLogo from '/mb-phone.webp';
import langIcon from "/language-icon.svg";
import './Banner.css'
import Typo from "../copywrite/copywrite";

const Banner: FC = () => {
    const [lang, setLang] = useState<'PL' | "ENG">('PL');

    const bannerRef = useRef<HTMLDivElement | null>(null);
    const arrowRef = useRef<HTMLButtonElement | null>(null);
    const bannerObserverRef = useRef<ResizeObserver | null>(null)

    useEffect(() => {

        function resizeArrow() {
            const bannerEl = bannerRef.current;
            const arrowEl = arrowRef.current;

            if (bannerEl && arrowEl) {
                const box = bannerEl?.getBoundingClientRect();
                const spacePx = window.innerHeight - (box?.height ?? 0);
                if (spacePx > 60) {
                    arrowEl.style.height = `${spacePx}px`;
                } else {
                    arrowEl.style.display = 'none'
                }
            }

        }

        const observer = bannerObserverRef.current;
        if (observer) {
            observer.disconnect();
        }
        if (bannerRef.current) {
            bannerObserverRef.current = new ResizeObserver(() => {
                resizeArrow();
            });
            bannerObserverRef.current.observe(bannerRef.current);
        }

        return () => {
            const observer = bannerObserverRef.current;
            if (observer) {
                observer.disconnect();
            }
        }
    });

    return (
        <>
            <div className="banner" ref={bannerRef}>
                <div className="banner_contact">
                    <div className="banner_contact-inner">
                        <button onClick={() => setLang(state => state === 'PL' ? 'ENG' : 'PL')}>
                            <img src={langIcon} />{lang === 'PL' ? 'ENG' : 'PL'}
                        </button>

                        <span>
                            maciej bartyński{"  "}·{"  "}{Typo.bannerTitle[lang]}{"  "}·{"  "}+48 784 482 159{"  "}·{"  "}maciek.bartynski@gmail.com
                        </span>
                    </div>
                </div>
                <div className="banner_card">
                    <div className="banner_image-wrapper">
                        <img src={reactLogo} className="banner_image" alt="me - sitting with phone" />
                    </div>

                    <div className="banner_content">
                        <div
                            className="banner_headline"
                            dangerouslySetInnerHTML={{
                                __html: Typo.bannerHeadline[lang]
                            }}
                        />
                        <div
                            className="banner_message"
                            dangerouslySetInnerHTML={{
                                __html: Typo.bannerMessage[lang]
                            }}
                        />
                    </div>
                </div>
            </div>
            <button
                className="banner_more"
                ref={arrowRef}
                onClick={() => {
                    window.scrollTo({
                        top: window.innerHeight
                    })
                }}
            >
                <div className="banner_arrow-label">
                    {Typo.bannerScroll[lang]}
                </div>
                <div className="banner_arrow-like" />
                <div className="banner_arrow-like --no-stick" />
                <div className="banner_arrow-like --no-stick" />
                <div className="banner_arrow-like --no-stick" />
            </button>

            <div className="ornament">
                <div className="ornament-line --1" />
                <div className="ornament-line --2" />
                <div className="ornament-line --3" />
                <div className="ornament-line --4" />
                <div className="ornament-line --5" />
                <div className="ornament-line --6" />
            </div>
            <div className="ornament --reverse">
                <div className="ornament-line --1" />
                <div className="ornament-line --2" />
                <div className="ornament-line --3" />
                <div className="ornament-line --4" />
                <div className="ornament-line --5" />
                <div className="ornament-line --6" />
            </div>
        </>
    )
}

export default Banner;