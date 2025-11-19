import { ThemeProvider } from "./assets/Contexts/ThemeContext";
import NavBar from "./assets/Components/NavBar";
import MainSection from "./assets/Components/MainSection";

export default function App() {

  return (
    <>
    <ThemeProvider>
      <NavBar />
      <MainSection />
    </ThemeProvider>
    </>
  )
}