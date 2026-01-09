import { forwardRef } from "react";
import { ArrowDown } from 'lucide-react';
import { useThemeContext } from "../Contexts/ThemeContext";
import ProjectsCard from "../LayoutComponents/ProjectsCard.jsx";

const projectsData = [
    {
        title: "BikeShowRoom",
        description: `Progetto realizzato, per l'esame finale della specializzazione in react del corso di Boolean, 
        un sito che fondamentalmente ci permette di ricevere una lista di prodotti (in questo caso bici) e 
        poter controllare nel dettaglio ogni singola unità, possibilità di confrontare le unità tra di loro e 
        infine creare una wishlist permanente grazie all'utilizzo di local storage`,
        img: [
            "public/img/iPhone-14-Pro-Max-472.98828125x967.98828125.png", 
            "public/img/iPad-Pro-11-581x832.png",
            "public/img/Macbook-Pro-16-2110x1286.png"
        ],
        url: "https://oninotna-bike-showroom.netlify.app"
    }]

export default forwardRef (function ProjectsSection ( { scrollDown }, ref ) {
    const { theme } = useThemeContext();

    return (
        <div ref={ref} className="projects-section">
            <h3>Progetti</h3>
            <div className="h-r mx-auto"></div>
            <div className="row card-container gap-5">
                {projectsData.map((project, index) => (
                    <ProjectsCard 
                        key={index}
                        title={project.title}
                        description={project.description}
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
