import React from 'react'
import 'tailwindcss/tailwind.css';
import './styles.css'
import CartWidget from '../CartWidget/CartWidget';
import DarkModeButton from '../ButtonDarkMode/DarkModeButton';
import { Link, useLocation } from 'react-router-dom';

export default function NavBar() {
  const location = useLocation();
  return (
    <nav className="navbar dark:bg-[#000000]">
      <div className="logo">
        <Link to={'/'}><img src="/imgs/blestlogoblanco.png" alt="Logo Image" className="logo p-0 block" /></Link>
        {/* <img src="../../../public/imgs/blestlogodarkmode.png" alt="Logo Oscuro" className="logo hidden dark:block dark:p-0" /> */}
      </div>
      <div className="hamburger">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <ul className="nav-links">
        <li className={location.pathname === '/' ? 'pagina-seleccionada' : 'animated-link'}>
          <Link to={'/'} className="  font-bold dark:text-black">
            Inicio
          </Link>
        </li>
        <li>
          <Link to='https://www.instagram.com/blestbarbershop/' className="font-bold animated-link dark:text-black" target="_blank">
            Instagram
          </Link>
        </li>
        <li className={location.pathname === '/products' ? 'pagina-seleccionada' : 'animated-link'}>
          <Link to={'/products'} className="font-bold  dark:text-black">
            Productos
          </Link>
        </li>
        <li className={location.pathname === '/cortes' ? 'pagina-seleccionada' : 'animated-link'}>
          <Link to={'/cortes'} className="font-bold animated-link dark:text-black">
            Cortes
          </Link>
        </li>
      </ul>
      <div className="flex justify-center text-white mx-5 font-bold text-xl navbar-cortes rounded-3xl  text-center align-middle mr-12  my-auto dark:bg-[#ffff] dark:text-black">
      <CartWidget />
        <DarkModeButton />
      </div>
    </nav>
  )
}
