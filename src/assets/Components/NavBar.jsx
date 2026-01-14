import { useState, useEffect, useRef } from 'react';
import { useThemeContext } from '../Contexts/ThemeContext';
import { useTranslation } from 'react-i18next';
import { Sun, Moon, Menu, Linkedin, Github } from 'lucide-react';
import CountryFlag from 'react-country-flag';

export default function NavBar () {
    const { theme, setTheme } = useThemeContext();
    const { t, i18n } = useTranslation();
    const [selectedLang, setSelectedLang] = useState((i18n.language || 'en').slice(0,2));
    const myNavRef = useRef()

    // keep selectedLang in sync with i18next (handles external changes)
    useEffect(() => {
      setSelectedLang((i18n.language || 'en').slice(0,2));
    }, [i18n.language]);

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
                    <h1 className='fs-5 fst-italic'>Antonino Musarra Tubbi</h1>
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
                        {/* Language selector with flags (styled as navbar buttons) */}
                        {/* Language selector with flags (state-driven) */}
                        {(() => {
                            const langs = [
                                { code: 'it', label: t('nav.languages.it'), countryCode: 'IT' },
                                { code: 'es', label: t('nav.languages.es'), countryCode: 'ES' },
                                { code: 'en', label: t('nav.languages.en'), countryCode: 'GB' },
                            ];
                            const current = langs.find(l => l.code === selectedLang) || langs[2];

                            return (
                                <div className="btn-group mx-2" role="group">
                                    <button
                                        type="button"
                                        className={`btn btn-outline-${theme === "light" ? "light" : "dark"} d-flex align-items-center`}
                                        aria-label={t('nav.languageLabel')}
                                    >
                                        <span className="lang-flag me-2">
                                            <CountryFlag countryCode={current.countryCode} svg style={{ width: '22px', height: '14px' }} />
                                        </span>
                                        <span className="lang-label">{current.label}</span>
                                    </button>
                                    <button
                                        type="button"
                                        className={`btn btn-outline-${theme === "light" ? "light" : "dark"} dropdown-toggle dropdown-toggle-split`}
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <span className="visually-hidden">{t('nav.languageLabel')}</span>
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-end p-2">
                                        {langs.map(l => (
                                            <li key={l.code}>
                                                <button
                                                    type="button"
                                                    className="dropdown-item w-100 d-flex align-items-center gap-2"
                                                    onClick={() => {
                                                        i18n.changeLanguage(l.code);
                                                        setSelectedLang(l.code);
                                                    }}
                                                >
                                                    <span className="lang-flag">
                                                        <CountryFlag countryCode={l.countryCode} svg style={{ width: '22px', height: '14px' }} />
                                                    </span>
                                                    <span className="lang-label">{l.label}</span>
                                                </button>
                                            </li>
                                        ))}
                                    </ul> 
                                </div>
                            )
                        })()} 
                        <button 
                            className={`btn btn-outline-${theme === "light" ? "light" : "dark"}`}
                            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                        >
                            {t('nav.scrollUp')}
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