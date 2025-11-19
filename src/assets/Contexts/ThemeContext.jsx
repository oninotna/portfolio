import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider ({children}) {
    const [theme, setTheme] = useState('light');

    return <ThemeContext value={{theme, setTheme}}>{children}</ThemeContext>
};

function useThemeContext() {
    return useContext(ThemeContext);
};

export { ThemeProvider, useThemeContext };