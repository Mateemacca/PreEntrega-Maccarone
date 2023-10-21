import React from 'react'
import { useState, useEffect } from 'react';
import './DarkModeButton.css'
export default function DarkModeButton() {
  const [darkMode, setDarkMode] = useState(() => {
    // obtiene el estado del theme, comprueba si esta en dark
    return localStorage.getItem('theme') === 'dark';
  });

  const toggleDarkMode = () => {
    const nuevoDarkMode = !darkMode;
    setDarkMode(nuevoDarkMode);
    document.documentElement.setAttribute('data-theme', nuevoDarkMode ? 'dark' : 'light');
    localStorage.setItem('theme', nuevoDarkMode ? 'dark' : 'light'); //lo guarda en el localstorage
  };

  useEffect(() => {
    // actualiza el data-theme
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);
  return (
    <button
          className="theme-toggle text-white dark:text-black my-auto"
          id="theme-toggle"
          title="Toggles light & dark"
          aria-label="auto"
          aria-live="polite"
          onClick={toggleDarkMode}
        >
          <svg className="sun-and-moon" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
            <mask className="moon" id="moon-mask">
              <rect x="0" y="0" width="100%" height="100%" fill="white" />
              <circle cx="24" cy="10" r="6" fill="black" />
            </mask>
            <circle className="sun" cx="12" cy="12" r="6" mask="url(#moon-mask)" fill="currentColor" />
            <g className="sun-beams" stroke="currentColor">
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </g>
          </svg>
        </button>
  )
}
