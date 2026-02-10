import { FC } from "react";
import reactLogo from '/mb-standing.jpeg';
import './Banner.css'

const Banner: FC = () => {
    return (
        <div className="banner">
            <img src={reactLogo} className="banner_image" />
            <div className="banner_content">
                Hry its me
            </div>
        </div>
    )
}

export default Banner;