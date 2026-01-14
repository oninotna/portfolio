import { forwardRef } from "react";
import { ArrowDown, Building2, CalendarDays } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useThemeContext } from "../Contexts/ThemeContext";

export default forwardRef ( function ExperienceSection ({ scrollDown }, ref) {
    const { theme } = useThemeContext();
    const { t } = useTranslation();

    return (
        <div ref={ref} className="experience-section">
            <h3>{t('experience.title')}</h3>
            <div className="h-r mx-auto"></div>
            <div className="card-container gap-5">
                <div className={`my-card-two ${theme}`}>
                    <h4 className="card-title">{t('experience.jobs.1.title')}</h4>
                    <div className="work-info"><Building2 /><span className="ms-2">{t('experience.jobs.1.company')}</span></div>
                    <div className="work-info"><CalendarDays /><span className="ms-2">{t('experience.jobs.1.dates')}</span></div>
                    <p className="work-info">{t('experience.jobs.1.description')}</p>
                </div>
                <div className={`my-card-two ${theme}`}>
                    <h4 className="card-title">{t('experience.jobs.2.title')}</h4>
                    <div className="work-info"><Building2 /><span className="ms-2">{t('experience.jobs.2.company')}</span></div>
                    <div className="work-info"><CalendarDays /><span className="ms-2">{t('experience.jobs.2.dates')}</span></div>
                    <p className="work-info">{t('experience.jobs.2.description')}</p>
                </div>
            </div>
        </div>
    )
})