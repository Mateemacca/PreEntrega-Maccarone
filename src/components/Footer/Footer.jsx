import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
export default function Footer() {
    
  return (
<footer className="dark:bg-[#f6f6f6]  bg-[#161616]">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 dark:bg-[#f6f6f6]">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://instagram.com/blestbarbershop" target='_blank' className="flex items-center mb-4 sm:mb-0">
                <img src='/imgs/blestlogoblanco.png' className="h-16 mr-3 dark:hidden" alt="Blest Logo" />
                <img src='/imgs/blestlogodarkmode.png' className="h-16 mr-3 hidden dark:block" alt="Blest Logo" />
                <span className="self-center dark:text-black text-2xl font-semibold whitespace-nowrap text-white">Blest Barber Shop</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium dark:text-black  sm:mb-0 text-gray-100">
                <li>
                    <Link to={'/'} target='_blank' className="mr-4 hover:underline md:mr-6 ">Inicio</Link>
                </li>
                <li>
                    <Link to={'https://instagram.com/blestbarbershop'} target='_blank' className="mr-4 hover:underline md:mr-6 ">Instagram</Link>
                </li>
                <li>
                    <Link to={'/products'} className="mr-4 hover:underline md:mr-6">Productos</Link>
                </li>
                <li>
                    <Link to={'/cortes'} className="mr-4 hover:underline md:mr-6 ">Cortes</Link>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm dark:text-gray-500 sm:text-center text-gray-100">© 2023 <a href="https://instagram.com/blestbarbershop" className="hover:underline">Blest Barber Shop™</a>. Todos los derechos reservados.</span>
    </div>
</footer>
  )
}
