import { FC, JSX, useEffect, useMemo, useRef, useState } from "react";
import "./Storyline.css";
import StorylineTypo, { DevTools } from "../copywrite/storyline";
import Typo from "../copywrite/copywrite";
import { useAppContext } from "../AppContext";

const Storyline: FC = () => {
    const { lang } = useAppContext();

    const [activeTool, setActiveTool] = useState<DevTools | null>(null);

    const {
        activeStoryline,
        restStoryline
    } = useMemo(() => {

        const printProjects = (storyline: typeof StorylineTypo): JSX.Element => {
            return <>
                {storyline.map(data => {
                    return (
                        <div
                            key={data.project}
                            className="storyline_tile"
                        >

                            <div className="storyline_tile-content">
                                <div className="storyline_tile-state">
                                    {data.state}
                                </div>

                                <div className="storyline_tile-arrows" />

                                <div className={`storyline_tile-project ${data.state.includes('ongoing') ? 'ongoing' : ''}`}>
                                    <span className="storyline_tile-label">{lang === 'PL' ? 'projekt: ' : 'project: '}</span>
                                    {data.project}
                                </div>

                                <div className="storyline_tile-role">
                                    <span className="storyline_tile-label">{lang === 'PL' ? 'rola: ' : 'role: '}</span>
                                    {data.role}
                                </div>

                                <div className="storyline_tile-stack">
                                    <span className="storyline_tile-label">{lang === 'PL' ? 'stack: ' : 'stack: '}</span>
                                    {data.stack}
                                </div>

                                <div className="storyline_tile-type">
                                    <span className="storyline_tile-label">{lang === 'PL' ? 'vibe: ' : 'vibe: '}</span>
                                    {data.type}
                                </div>
                            </div>

                            <div className="storyline_tile-arrows --margin" />
                        </div>
                    )
                })}
            </>
        }

        const activeStoryline = printProjects(StorylineTypo.filter(item => {
            if (!activeTool) return false;
            return item.searchBy.includes(activeTool);
        }));

        const restStoryline = printProjects(StorylineTypo.filter(item => {
            if (!activeTool) return true;
            return !item.searchBy.includes(activeTool);
        }));

        return {
            activeStoryline,
            restStoryline
        }
    }, [activeTool, lang]);

    const observersRef = useRef<IntersectionObserver[]>([]);

    useEffect(() => {
        observersRef.current.forEach(item => item.disconnect());
        observersRef.current = [];

        const overflowList = document.querySelector('#storyline-project-list') as HTMLDivElement;
        const _listItems = overflowList.querySelectorAll('.storyline_tile') as NodeListOf<HTMLDivElement>;
        const items = [..._listItems];

        items.forEach((item) => {
            const observer = new IntersectionObserver((entry) => {
                item.style.transform = `scale(${1 - (1 - entry[0].intersectionRatio)})`;
            }, { threshold: [0.1, .2, .3, .4, .5, .6, .7, .8, .9, 1] });
            observer.observe(item);
            observersRef.current.push(observer);
        })
    }, []);


    return (
        <div className="storyline">

            <div className="storyline_projects">
                <h2 className="storyline_title">
                    {Typo.storylineHead[lang]}
                </h2>
                <div
                    className="storyline_projects-list"
                    id="storyline-project-list"
                >
                    {activeTool ?
                        <>
                            <h2 className="storyline_subsection-title">
                                _{activeTool}
                            </h2>
                            {activeStoryline}
                        </>
                        : null
                    }
                    {activeTool && (
                        <h2 className="storyline_subsection-title">
                            {lang === 'PL' ? '_reszta' : '_the rest'}
                        </h2>
                    )}
                    {restStoryline}
                </div>
            </div>

            <div className="storyline_tags">

                <h2 className="storyline_tag-title">
                    {Typo.storylineTools[lang]}
                </h2>

                {Object.entries(DevTools).map(entry => {
                    const [key, value] = entry;
                    const isActive = value === activeTool;
                    return (
                        <button
                            key={key}
                            className={`storyline_dev-tool ${isActive ? '--active' : ''}`}
                            onClick={() => setActiveTool(value)}
                        >
                            <span>
                                {value}
                            </span>
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default Storyline;