import { useThemeContext } from "../Contexts/ThemeContext";
import { ArrowDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';


export default function InfoSection ({ scrollDown, goToProjects }) {
    const { theme } = useThemeContext();
    const { t } = useTranslation();

    return (
        <div className="info-main-section">
            <div className="container-icon-main-section">
                <span className="icon-main-section">👨🏻‍💻</span>
            </div>
            <h1>{t('info.greeting')} <span className={theme}>Antonino</span> 😃</h1>
            <h3>{t('info.title')}</h3>
            <p>{t('info.bio')}</p>
            <div className="button-main-section gap-3">
                <a
                    className={`btn btn-outline-${theme === "light" ? "dark" : "light"}`}
                    href={`mailto:antoninomusarratubbi@gmail.com?subject=${encodeURIComponent(t('info.emailSubject'))}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {t('info.contact')}
                </a>
                <button
                    className={`btn btn-outline-${theme === "light" ? "dark" : "light"}`}
                    onClick={() => goToProjects && goToProjects()}
                >
                    {t('info.projects')}
                </button>
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