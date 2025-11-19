import { useThemeContext } from "../Contexts/ThemeContext";
import { ArrowDown } from 'lucide-react';


export default function InfoSection ({ scrollDown }) {
    const { theme } = useThemeContext();

    return (
        <div className="info-main-section">
            <div className="container-icon-main-section">
                <span className="icon-main-section">👨🏻‍💻</span>
            </div>
            <h1>Ciao, sono <span className={theme}>Antonino</span> 😃</h1>
            <h3>Junior Front-End Developer</h3>
            <p>
                Sviluppatore web junior, 
                con una forte propensione per il front-end e una solida base anche nel back-end. 
                Appassionato di tecnologie moderne e di creazione di interfacce utente intuitive e performanti. 
                Mi piace lavorare in team, condividere idee e contribuire attivamente alla crescita del progetto 
                e del gruppo di lavoro.
            </p>
            <div className="button-main-section gap-3">
                <button className={`btn btn-outline-${theme === "light" ? "dark" : "light"}`}>Contattami</button>
                <button className={`btn btn-outline-${theme === "light" ? "dark" : "light"}`}>I miei progetti</button> 
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
}