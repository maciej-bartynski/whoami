import { FC } from "react";
import imageSquare from '/mbart-hello-square.jpg';
import imageVertical from '/mbart-hello-vertical.jpg';
import './BannerPortrait.css';
import Typo from "../copywrite/copywrite";
import { useAppContext } from "../AppContext";

const BannerPortrait: FC = () => {
    const { lang, } = useAppContext();

    return (
        <>
            <div className="BannerPortrait">
                <div className="BannerPortrait_banner">
                    <img
                        className="BannerPortrait_img-square"
                        src={imageSquare}
                        alt="me - sitting with phone"
                    />

                    <img
                        className="BannerPortrait_img-vertical"
                        src={imageVertical}
                        alt="me - sitting with phone"
                    />

                    <div className="BannerPortrait_banner-txt-content">
                        <div className="BannerPortrait_banner-title">
                            <h1
                                dangerouslySetInnerHTML={{
                                    __html: Typo.bannerHeadline[lang]
                                }}
                            />
                        </div>

                        <div className="BannerPortrait_banner-headline">
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: Typo.bannerMessage[lang]
                                }}
                            />
                        </div>
                    </div>

                    <div className="BannerPortrait_banner-contact">
                        <span
                            dangerouslySetInnerHTML={{
                                __html: 'maciej bartyński<br/>maciek.bartynski@gmail.com<br/>+48 784 482 159'
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BannerPortrait;