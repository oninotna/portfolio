import { useThemeContext } from "../Contexts/ThemeContext";
import { useState } from "react";
import "../css/ProjectsCard.css";

export default function ProjectsCard ({ id, title, description, img, url }) {
    const { theme } = useThemeContext();
    const [imgModal, setImgModal] = useState(false);

    return (
    <>
        <div className={`my-card ${theme}`}>
            <div className="card-title">
                <strong>{title}</strong>
            </div>
            <img 
                className="my-3 rounded my-img-project" 
                src={img} alt={title} 
                title="Clicca per ingrandire" 
                onClick={() => setImgModal(true)}
            />
            <div className="card-btns d-flex justify-content-center gap-3">
                <button 
                    className={`btn btn-outline-${theme === "light" ? "dark" : "light"}`}
                    data-bs-toggle="modal" data-bs-target={`#Modal${id}`}
                >
                    Descrizione
                </button>
                <a href={url} className={`btn btn-outline-${theme === "light" ? "dark" : "light"}`}>Vai al sito</a>
            </div>
            
        </div>
        <div className="modal fade" id={`Modal${id}`} tabIndex="-1" aria-labelledby="ModalLabel">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                  <button type="button" className="btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
                <div className="modal-body">
                  <p className="card-description">{description}</p>
                </div>
              </div>
            </div>
        </div>
        <div className={imgModal === true ? "img-modal d-flex justify-content-center align-items-center" : "d-none"}>
            <p className="p-img-project">Clicca sull'immagine per chiuderla</p>
            <img src={img} alt={title} className="d-block rounded" onClick={() => setImgModal(false)} style={{ cursor: "pointer" }} />
        </div>
    </>    
    )
}