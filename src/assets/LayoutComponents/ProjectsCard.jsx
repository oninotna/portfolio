import { useThemeContext } from "../Contexts/ThemeContext";
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import "../css/ProjectsCard.css";

export default function ProjectsCard ({ id, title, description, img, url }) {
    const { theme } = useThemeContext();
    const [imgModal, setImgModal] = useState(false);
    const { t } = useTranslation();

    return (
    <>
        <div className={`my-card ${theme}`}>
            <div className="card-title">
                <strong>{title}</strong>
            </div>
            <img 
                className="my-3 rounded my-img-project" 
                src={img} alt={title} 
                title={t('project.clickToEnlarge')} 
                onClick={() => setImgModal(true)}
            />
            <div className="card-btns d-flex justify-content-center gap-3">
                <button 
                    className={`btn btn-outline-${theme === "light" ? "dark" : "light"}`}
                    data-bs-toggle="modal" data-bs-target={`#Modal${id}`}
                >
                    {t('project.description')}
                </button>
                <a 
                    href={url} 
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`btn btn-outline-${theme === "light" ? "dark" : "light"}`}
                >
                    {t('project.visitSite')}
                </a>
            </div>
            
        </div>
        <div className="modal fade" id={`Modal${id}`} tabIndex="-1" aria-labelledby="ModalLabel">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                  <button 
                    type="button" 
                    className="btn-close ms-auto" 
                    data-bs-dismiss="modal" 
                    aria-label={t('project.modalClose')}
                    onClick={() => document.activeElement?.blur()}
                >
                </button>
                <div className="modal-body">
                  <p className="card-description">{description}</p>
                </div>
              </div>
            </div>
        </div>
        <div className={imgModal === true ? "img-modal d-flex justify-content-center align-items-center" : "d-none"}>
            <p className="p-img-project">{t('project.clickToClose')}</p>
            <img src={img} alt={title} className="d-block rounded" onClick={() => setImgModal(false)} style={{ cursor: "pointer" }} />
        </div>
    </>    
    )
}