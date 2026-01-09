import { useState, useEffect, useRef } from 'react';
import { useThemeContext } from '../Contexts/ThemeContext';
import { Sun, Moon, Menu, Linkedin, Github } from 'lucide-react';

export default function NavBar () {
    const { theme, setTheme } = useThemeContext();
    const myNavRef = useRef()

    useEffect(() => {
      document.body.className = theme;
      if (myNavRef.current) {
          myNavRef.current.classList.toggle("light", theme === "light");
          myNavRef.current.classList.toggle("dark", theme === "dark");
        };
      
    }, [theme]);

    return (
      <div>
        <nav ref={myNavRef} className="my-nav navbar navbar-expand-md px-4 py-2">
                
                <div className="container-fluid">
                    <h1 className='fs-4 fst-italic'>Antonino Musarra Tubbi</h1>
                    <button 
                        className="navbar-toggler m-2" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbar" 
                        aria-controls="navbar" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                        <span className={`btn btn-outline-${theme === "light" ? "light" : "dark"}`}><Menu /></span>
                    </button>
                    <div className="collapse navbar-collapse navbar-nav " id="navbar">
                        <a 
                            className={`btn btn-outline-${theme === "light" ? "light" : "dark"}`}
                            href='https://www.linkedin.com/in/antonino-musarra-tubbi-ba0b25280'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <Linkedin />
                        </a>
                        <a 
                            className={`btn btn-outline-${theme === "light" ? "light" : "dark"}`}
                            href='https://github.com/oninotna'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <Github />
                        </a>
                        <button 
                            className={`btn btn-outline-${theme === "light" ? "light" : "dark"}`}
                            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                        >
                            ScrollToUp
                        </button>
                        <button
                            className={`btn btn-outline-${theme === "light" ? "light" : "dark"}`}
                            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                        >
                            {theme === "light" ? <Moon /> : <Sun />}
                        </button>
                    </div>
                </div>
            </nav>
        
      </div>
    );
}