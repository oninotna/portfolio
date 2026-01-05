import React, { useEffect, useState } from "react";
import "../../css/Modal.css";

export default function Modal({ isOpen, onClose, title, children }) {
  const [isClosing, setIsClosing] = useState(false);
  const animationDuration = 320;

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, animationDuration);
  };

  // mantiene il DOM montato durante l'animazione di chiusura
  if (!isOpen && !isClosing) return null;

  return (
    <div
      className={`modal-overlay ${isClosing ? "closing" : "open"}`}
      role="dialog"
      aria-modal="true"
      onClick={handleClose}
    >
      <div className={`modal-content ${isClosing ? "closing" : "open"}`} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={handleClose} aria-label="Close modal">×</button>
        {title && <h2 className="modal-title">{title}</h2>}

        <div className="modal-icons" aria-hidden="true">
          {/* Icone decorative */}
          <svg className="icon gear" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V22a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H2a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82L3.31 6.1A2 2 0 0 1 6.14 3.27l.06.06A1.65 1.65 0 0 0 8 3.66" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

          <svg className="icon wrench" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M21 11c0 4-3 7-7 7-1.1 0-2.1-.3-3-.8L3 18l1.2-8c.3-.8 1-1.4 1.9-1.6l3-.6c.7-.1 1.5 0 2 .4l4 3c.6.5 1 1.4 1 2.4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

          <svg className="icon hammer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M14 9l7-7M7 13l4 4 7-7-4-4-7 7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}
