import { FC } from "react";
import imageBase from '/mbart-hello.jpg';
import imageSquare from '/mbart-hello-square.jpg';
import './BannerLandscape.css'
import Typo from "../copywrite/copywrite";
import { useAppContext } from "../AppContext";

const BannerLandscape: FC = () => {
    const { lang } = useAppContext();

    return (
        <>
            <div className="BannerLandscape">
                <div className="BannerLandscape_banner">
                    <img
                        className="BannerLandscape_img-base"
                        src={imageBase}
                        alt="me - sitting with phone"
                    />

                    <img
                        className="BannerLandscape_img-square"
                        src={imageSquare}
                        alt="me - sitting with phone"
                    />

                    <div className="BannerLandscape_banner-text-content">
                        <div className="BannerLandscape_banner-contact">
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: 'maciej bartyński<br/>maciek.bartynski@gmail.com<br/>+48 784 482 159'
                                }}
                            />
                        </div>

                        <div className="BannerLandscape_banner-headline">
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: Typo.bannerMessage[lang]
                                }}
                            />
                        </div>
                    </div>

                    <div className="BannerLandscape_banner-title">
                        <h1
                            dangerouslySetInnerHTML={{
                                __html: Typo.bannerHeadline[lang]
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BannerLandscape;