import { forwardRef } from "react";
import { ArrowDown } from 'lucide-react';
import { useThemeContext } from "../Contexts/ThemeContext";
import ProjectsCard from "../LayoutComponents/ProjectsCard.jsx";
import { useTranslation } from 'react-i18next';

const projectsData = [
    {
        id: 1,
        title: "BikeShowRoom",
        descriptionKey: "projects.items.1.description",
        img: "/img/Macbook-Pro-16-2110x1286.png",
        url: "https://oninotna-bike-showroom.netlify.app"
    },
    {
        id: 2,
        title: "ZneakDrop",
        descriptionKey: "projects.items.2.description",
        img: "/img/Macbook-Pro-16-2110x1285.99609375 (2).png",
        url: "https://zneak-drop.netlify.app"
    },
    {
        id: 3,
        title: "BooRoad",
        descriptionKey: "projects.items.3.description",
        img: "/img/Macbook-Pro-16-2110x1285.9896240234375.png",
        url: "https://Booroad-oninotna.netlify.app"
    }
]

export default forwardRef (function ProjectsSection ( { scrollDown }, ref ) {
    const { theme } = useThemeContext();
    const { t } = useTranslation();

    return (
        <div ref={ref} className="projects-section">
            <h3>{t('projects.title')}</h3>
            <div className="h-r mx-auto"></div>
            <div className="row card-container gap-5">
                {projectsData.map(project => (
                    <ProjectsCard 
                        key={project.id}
                        id={project.id}
                        title={project.title}
                        description={t(project.descriptionKey)}
                        img={project.img}
                        url={project.url}
                    />
                ))}
            </div>
            <div className="my-arrow-btn-container">
                <button 
                    className={`my-arrow-btn bounce btn btn-outline-${theme === "light" ? "dark" : "light"}`}
                    onClick={() => scrollDown()}
                >
                        <ArrowDown />
                </button>
            </div>
        </div>
    )
});
