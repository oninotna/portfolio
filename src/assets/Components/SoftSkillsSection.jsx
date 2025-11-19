import { forwardRef } from "react";
import { useThemeContext } from "../Contexts/ThemeContext";
import Card from "../LayoutComponents/Card";
import { ChevronsLeftRight, Users, Palette, ArrowDown } from 'lucide-react';

export default forwardRef (function SoftSkillsSection ({ scrollDown }, ref ) {
    const { theme } = useThemeContext();

    return (
        <div ref={ref} className="soft-skills-section">
            <h3>Competenze Personali</h3>
            <div className="h-r mx-auto"></div>
            <div className="card-container gap-5">
                <Card 
                    icon={<ChevronsLeftRight size={52}/>} 
                    title='Codice Pulito'
                    description={
                        `Molto attento ai dettagli e amante dell'ordine, 
                        capace di gestire le attività in modo strutturato ed efficiente 
                        per garantire massima mantenibilità all'interno del codice`
                    }
                />
                <Card 
                    icon={<Palette size={52}/>} 
                    title='Design Attento'
                    description={
                        `Curo con attenzione ogni dettaglio dell’interfaccia utente per offrire esperienze
                         digitali memorabili. Unisco estetica e funzionalità per creare percorsi intuitivi, 
                         piacevoli e coerenti, capaci di coinvolgere l’utente e valorizzare al massimo l’identità del prodotto o del brand`
                    }
                />
                <Card 
                    icon={<Users size={52}/>} 
                    title='Team Working'
                    description={
                        `Collaborativo e propositivo nei lavori di gruppo, 
                        con una naturale attitudine alla comunicazione e all’ascolto attivo. 
                        So coordinare e motivare il team, favorendo la cooperazione e il raggiungimento 
                        degli obiettivi comuni con un approccio organizzato, empatico e orientato ai risultati`
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