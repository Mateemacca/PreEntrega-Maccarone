import React from 'react'
import 'tailwindcss/tailwind.css';
import './styles.css'
import CartWidget from '../CartWidget/CartWidget';
export default function NavBar() {

  return (
    <nav className="navbar dark:bg-[#000000]">
      <div className="logo">
        <a href="index.html">
        <img src="/imgs/blestlogoblanco.png" alt="Logo Image" className="logo p-0 block" />
        {/* <img src="../../../public/imgs/blestlogodarkmode.png" alt="Logo Oscuro" className="logo hidden dark:block dark:p-0" /> */}

        </a>
      </div>
      <div className="hamburger">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <ul className="nav-links">
        <li>
          <a href="index.html" className="font-bold animated-link dark:text-black">
            Inicio
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/blestbarbershop/" className="font-bold animated-link dark:text-black" target="_blank">
            Instagram
          </a>
        </li>
        <li>
          <a href="" className="font-bold animated-link dark:text-black">
            Productos
          </a>
        </li>
        <li>
          <a href="" className="font-bold animated-link dark:text-black">
            Cortes
          </a>
        </li>
      </ul>
      <div className="flex justify-center text-white mx-5 font-bold text-xl navbar-cortes rounded-3xl  text-center align-middle mr-12  my-auto dark:bg-[#ffff] dark:text-black">
      <CartWidget />
        <button
          className="theme-toggle text-white "
          id="theme-toggle"
          title="Toggles light & dark"
          aria-label="auto"
          aria-live="polite"
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
      </div>
    </nav>
  )
}
