import { forwardRef } from "react";
import { ArrowDown } from 'lucide-react';
import { useThemeContext } from "../Contexts/ThemeContext";

import Card from "../LayoutComponents/Card";

export default forwardRef (function TechSkillsSection ( { scrollDown }, ref ) {
    const { theme } = useThemeContext();

    return (
        <div ref={ref} className="tech-skills-section">
            <h3>Competenze Tecniche</h3>
            <div className="h-r mx-auto"></div>
                <p>Le tecnologie che utilizzo quotidianamente</p>
                <div className="card-container gap-5">
                    <Card 
                        title='Front-End' 
                        description={
                            <>
                                <span className="badge me-2 mb-2">HTML</span>
                                <span className="badge me-2 mb-2">CSS</span>
                                <span className="badge me-2 mb-2">JavaScript</span>
                                <span className="badge me-2 mb-2">Bootstrap</span>
                                <span className="badge me-2 mb-2">React</span>
                                <span className="badge me-2 mb-2">TypeScript</span>
                            </>
                        }
                    />
                    <Card 
                        title='Back-End / DataBase' 
                        description={
                            <>
                                <span className="badge me-2 mb-2">Node.js</span>
                                <span className="badge me-2 mb-2">Express</span>
                                <span className="badge me-2 mb-2">API REST</span>
                                <span className="badge me-2 mb-2">MySQL</span>
                            </>
                        }
                    />
                    <Card 
                        title='Tools' 
                        description={
                            <>
                                <span className="badge me-2 mb-2">Git</span>
                                <span className="badge me-2 mb-2">GitHub</span>
                                <span className="badge me-2 mb-2">PostMan</span>
                                <span className="badge me-2 mb-2">Vite</span>
                                <span className="badge me-2 mb-2">MySQLWorkbench</span>
                            </>
                        }
                    />
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
})