import React from 'react'
import 'tailwindcss/tailwind.css';
import { FaCartShopping } from 'react-icons/fa6';
export default function CartWidget() {
  return (
    <div>
      <button
        className="rounded-2xl text-white mr-4  p-4  active:opacity-75 scale-100 active:scale-[0.97] active:ease-in-out duration-100 dark:active:bg-gray-200 dark:hover:bg-gray-200 carrito-icon"
        id="btnMostrarCarrito">
        <span className="bg-red-500 text-white rounded-full w-6 h-6 flex active:opacity-100 items-center justify-center text-sm absolute -top-[-.5px] -right-[-.5px]">4</span>
        <FaCartShopping />
      </button>
    </div>
  );
}
