import {React, useState} from 'react'
import 'tailwindcss/tailwind.css';
import './styles.css'
import CartWidget from '../CartWidget/CartWidget';
import DarkModeButton from '../ButtonDarkMode/DarkModeButton';
import { Link, useLocation } from 'react-router-dom';


export default function NavBar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
 
  return (
    <nav className="navbar dark:bg-[#000000]">
      <div className="logo">
        <Link to="/">
          <img src="/imgs/blestlogoblanco.png" alt="Logo Image" className="logo p-0 block" />
        </Link>
      </div>
      <div className={`hamburger ${menuOpen ? 'toggle' : ''}`} onClick={toggleMenu}>
        <div className={`line1 ${menuOpen ? 'open' : ''}`}></div>
        <div className={`line2 ${menuOpen ? 'open' : ''}`}></div>
        <div className={`line3 ${menuOpen ? 'open' : ''}`}></div>
      </div>
      <ul className={`nav-links z-6 ${menuOpen ? 'open' : ''}`}>
        <li className={`${location.pathname === '/' ? 'pagina-seleccionada' : 'animated-link'} ${menuOpen ? 'fade' : ''}`}>
          <Link to={'/'} className="font-bold dark:text-black">
            Inicio
          </Link>
        </li>
        <li className={`animated-link ${menuOpen ? 'fade' : ''}`}>
          <Link
           to={"https://www.instagram.com/blestbarbershop/"}
            className="font-bold dark:text-black"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </Link>
        </li>
        <li className={`${location.pathname === '/products' ? 'pagina-seleccionada' : 'animated-link'} ${menuOpen ? 'fade' : ''}`}>
          <Link to={'/products'} className="font-bold  dark:text-black">
            Productos
          </Link>
        </li>
        <li className={`${location.pathname === '/cortes' ? 'pagina-seleccionada' : 'animated-link'} ${menuOpen ? 'fade' : ''}`}>
          <Link to={'/cortes'} className="font-bold dark:text-black">
            Cortes
          </Link>
        </li>
      </ul>
      <div className="flex justify-center text-white mx-5 font-bold text-xl navbar-cortes rounded-3xl text-center align-middle mr-12 my-auto dark:bg-[#ffff] dark:text-black">
        <CartWidget />
        <DarkModeButton />
      </div>
    </nav>
  );
}
