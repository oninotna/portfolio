import { useThemeContext } from "../Contexts/ThemeContext";

export default function Card ({ icon, title, description }) {
    const { theme } = useThemeContext();

    return (
        <div className={`my-card ${theme}`}>
            <div className="card-icon">
                {icon}
            </div>
            <div className="card-title">
                <strong>{title}</strong>
            </div>
            <p className="card-description">{description}</p>
        </div>
    )
}