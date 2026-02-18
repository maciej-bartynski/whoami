import { FC, PropsWithChildren } from "react";
import './ExperienceTile.css';
import { useAppContext } from "../../AppContext";

export const ExperienceTileProject: FC<PropsWithChildren<{
    isOngoing: boolean,
    baseColor?: string;
}>> = ({ children, isOngoing, baseColor = 'var(--wall)' }) => {
    const { lang } = useAppContext();
    return (
        <div
            className={`ExperienceTile_project ${isOngoing ? 'ongoing' : ''}`}
            style={{
                backgroundColor: baseColor
            }}
        >
            <span className="ExperienceTile_label">{lang === 'PL' ? 'projekt: ' : 'project: '}</span>
            {children}
        </div>
    )
}

export const ExperienceTileDates: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="ExperienceTile_state">
            {children}
        </div>
    )
}

export const ExperienceTileLabel: FC<PropsWithChildren & { label: string }> = ({ children, label }) => {
    return (
        <div className="ExperienceTile_role">
            <span className="ExperienceTile_label">
                {label}
            </span>
            {children}
        </div>
    )
}

const ExperienceTile: FC<{
    dates: string,
    header: string,
    role: string,
    stack: string,
    vibe: string,
}> = ({
    dates,
    header,
    role,
    stack,
    vibe
}) => {
        const { lang } = useAppContext();
        return (
            <div className="ExperienceTile">

                <div className="ExperienceTile_content">
                    <ExperienceTileDates>
                        {dates}
                    </ExperienceTileDates>

                    <div className="ExperienceTile_arrows" />

                    <ExperienceTileProject isOngoing={dates.includes('ongoing')}>
                        {header}
                    </ExperienceTileProject>

                    <ExperienceTileLabel label={lang === 'PL' ? 'rola: ' : 'role: '}>
                        {role}
                    </ExperienceTileLabel>

                    <ExperienceTileLabel label={lang === 'PL' ? 'stack: ' : 'stack: '}>
                        {stack}
                    </ExperienceTileLabel>

                    <ExperienceTileLabel label={lang === 'PL' ? 'vibe: ' : 'vibe: '}>
                        {vibe}
                    </ExperienceTileLabel>
                </div>

                <div className="ExperienceTile_arrows --margin" />
            </div>
        )
    }

export default ExperienceTile;