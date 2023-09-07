import React from 'react'
import 'tailwindcss/tailwind.css';
import { FaCartShopping } from 'react-icons/fa6';
export default function CartWidget() {
  return (
    <div>
        <button className="rounded-2xl text-white mr-4 hover:bg-neutral-800 p-4  active:opacity-96 scale-100 active:scale-[1.04] active:ease-in-out duration-200 dark:active:bg-gray-200 dark:hover:bg-gray-200 carrito-icon" id="btnMostrarCarrito" ><span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs absolute -top-1 -right-1">2</span><FaCartShopping /> </button>
        
    </div>
  )
}
