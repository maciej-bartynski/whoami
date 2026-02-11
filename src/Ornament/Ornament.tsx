import { FC } from 'react';
import './Ornament.css';

const Ornament: FC = () => {
    return (
        <>
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

export default Ornament;