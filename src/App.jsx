import React, { useState } from "react";
import { ThemeProvider } from "./assets/Contexts/ThemeContext";
import NavBar from "./assets/Components/NavBar";
import MainSection from "./assets/Components/MainSection";
import Modal from "./assets/LayoutComponents/Modal";

export default function App() {
  const [showModal, setShowModal] = useState(true); // aperta all'entrata

  return (
    <>
      <ThemeProvider>
        <NavBar />
        <MainSection />
        <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Work in progress">
          <p>Work in progress — sto aggiornando il portfolio. Torna a trovarmi presto!</p>
        </Modal>
      </ThemeProvider>
    </>
  )
}