import { forwardRef } from "react";
import { ArrowDown } from 'lucide-react';
import { useThemeContext } from "../Contexts/ThemeContext";

export default forwardRef (function ProjectsSection ( { scrollDown }, ref ) {
    const { theme } = useThemeContext();

    return (
        <div ref={ref} className="projects-section">
            <h3>Progetti</h3>
            <div className="h-r mx-auto">
                <div className="row">
                    <h1>card qui...</h1>
                </div>
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
