import { forwardRef } from "react";
import { useThemeContext } from "../Contexts/ThemeContext";
import Card from "../LayoutComponents/Card";
import { ChevronsLeftRight, Users, Palette, ArrowDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default forwardRef (function SoftSkillsSection ({ scrollDown }, ref ) {
    const { theme } = useThemeContext();
    const { t } = useTranslation();

    return (
        <div ref={ref} className="soft-skills-section">
            <h3>{t('soft.title')}</h3>
            <div className="h-r mx-auto"></div>
            <div className="row card-container gap-5">
                <Card 
                    icon={<ChevronsLeftRight size={52}/>} 
                    title={t('soft.cards.1.title')}
                    description={t('soft.cards.1.description')}
                />
                <Card 
                    icon={<Palette size={52}/>} 
                    title={t('soft.cards.2.title')}
                    description={t('soft.cards.2.description')}
                />
                <Card 
                    icon={<Users size={52}/>} 
                    title={t('soft.cards.3.title')}
                    description={t('soft.cards.3.description')}
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