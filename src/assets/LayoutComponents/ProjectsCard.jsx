import { useThemeContext } from "../Contexts/ThemeContext";

export default function ProjectsCard ({ title, description, img, url }) {
    const { theme } = useThemeContext();

    return (
        <div className={`my-card ${theme}`}>
            <div className="card-title">
                <strong>{title}</strong>
            </div>
            <p className="card-description">{description}</p>
            <div className="card-btns d-flex justify-content-center gap-3">
                <button className={`btn btn-outline-${theme === "light" ? "dark" : "light"}`}>Anteprima</button>
                <a href={url} className={`btn btn-outline-${theme === "light" ? "dark" : "light"}`}>Vai al sito</a>
            </div>
        </div>
    )
}