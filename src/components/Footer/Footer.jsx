import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
    const logo = '../../../public/imgs/blestlogoblanco.png'
  return (
<footer className="dark:bg-white rounded-lg shadow bg-[#161616] ">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://instagram.com/blestbarbershop" target='_blank' className="flex items-center mb-4 sm:mb-0">
                <img src={logo} className="h-8 mr-3" alt="Blest Logo" />
                <span className="self-center dark:text-black text-2xl font-semibold whitespace-nowrap text-white">Blest Barber Shop</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium dark:text-gray-500  sm:mb-0 text-gray-100">
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
