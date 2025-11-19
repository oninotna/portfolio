import { forwardRef } from "react";
import { ArrowDown, Building2, CalendarDays } from 'lucide-react';
import { useThemeContext } from "../Contexts/ThemeContext";

export default forwardRef ( function ExperienceSection ({ scrollDown }, ref) {
    const { theme } = useThemeContext();

    return (
        <div ref={ref} className="experience-section">
            <h3>Esperienze Lavorative</h3>
            <div className="h-r mx-auto"></div>
            <div className="card-container gap-5">
                <div className={`my-card-two ${theme}`}>
                    <h4 className="card-title">Capo Cantiere</h4>
                    <div className="work-info"><Building2 /><span className="ms-2">Musarra Tubbi Giuseppe - AGRI.EDILSCAVI S.R.L.S.</span></div>
                    <div className="work-info"><CalendarDays /><span className="ms-2">06/2019 - 02/2025</span></div>
                    <p className="work-info">
                        Gestione e coordinamento dei lavori nei cantieri, 
                        supervisione del personale e monitoraggio delle tempistiche operative.
                    </p>
                </div>
                <div className={`my-card-two ${theme}`}>
                    <h4 className="card-title">Manutentore Hardware</h4>
                    <div className="work-info"><Building2 /><span className="ms-2">Computers Parts S.R.L.</span></div>
                    <div className="work-info"><CalendarDays /><span className="ms-2">07/2015 - 05/2019</span></div>
                    <p className="work-info">
                        - Capo reparto Office Printer <br />
                        - Tecnico manutentore hardware (stampanti, fotocopiatori, scanner, notebook e PC desktop) <br />
                        - Operatore nel reparto spedizioni e addetto all’assistenza tecnica in loco e online per prodotti in garanzia <br />
                        - Gestione dell’inventario tramite gestionale <br />
                        - Supporto alla logistica e movimentazione merci
                    </p>
                </div>
            </div>
        </div>
    )
})