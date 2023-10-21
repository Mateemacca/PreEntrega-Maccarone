import React from 'react'
import Contador from '../Contador/Contador';
import { useState, useContext} from 'react';
import { CartCtx } from '../../context/CartContext';
import toast from 'react-hot-toast';
export default function ItemDetail({product}) {
  const [toggle, setToggle] = useState(true);
  const { addToCart } = useContext(CartCtx);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
    const truncateToggle = () => {
      setToggle(!toggle);
    };

    const handleAddToCart = () => {
      addToCart(product.id, selectedQuantity);
      toast.success(`Se agregaron ${selectedQuantity} ${product.title}(s) al carrito!`);
    };
  return (
    <>
      <div className="min-w-screen min-h-full animated fadeIn faster flex justify-center items-center inset-0 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
        <div className="relative min-h-[70vh] flex flex-col items-center justify-center ">
          <div className="container">
            <div className="max-w-md w-full bg-white shadow-lg rounded-xl p-6">
              <div className="flex flex-col ">
                <div className="">
                  <div className="relative h-62 w-full mb-3">
                    <div className="absolute flex flex-col top-0 right-0 p-3">
                      <button className="transition ease-in duration-300 bg-gray-800  hover:text-gray-300 shadow hover:shadow-md text-gray-500 rounded-full w-8 h-8 text-center p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </button>
                    </div>
                    <img
                      src={product.image}
                      alt="Just a flower"
                      className=" w-full object-fill  rounded-2xl"
                    />
                  </div>
                  <hr className="my-5" />
                  <div className="flex-auto justify-evenly">
                    <div className="flex flex-wrap ">
                      <div className="w-full flex-none text-sm flex items-center text-gray-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-yellow-600 mr-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-gray-400 whitespace-nowrap mr-3">
                          {product.rate}
                        </span>
                        <span className="mr-2 text-gray-400">
                          {product.category}
                        </span>
                        
                      </div>
                      <div className="flex items-center w-full justify-between min-w-0 ">
                        <h1 className="text-lg mr-auto cursor-pointer text-gray-900 transition-all duration-100 ease-in-out truncate font-bold ">
                          {product.title}
                        </h1>
                        <div className="flex items-center bg-gray-700 text-white font-semibold text-xs px-2 py-1  rounded-lg">
                          Stock: {product.stock}
                        </div>
                      </div>
                      <div className="flex items-center w-full justify-between min-w-0 ">
                        {toggle ? (
                          <div className="truncate">
                            <h2
                              className={`text-lg mr-auto cursor-pointer text-gray-900 transition-all duration-100 ease-in-out truncate`}
                            >
                              {product.description}
                            </h2>
                            <button
                              className="bg-stone-200 px-2 py-1 rounded-md text-sm hover:bg-stone-300 transition-all duration-200 font-semibold"
                              onClick={truncateToggle}
                              type=""
                            >
                              Leer más
                            </button>
                          </div>
                        ) : (
                          <div>
                            <h2
                              className={`text-lg mr-auto cursor-pointer text-gray-900 transition-all duration-100 ease-in-out`}
                            >
                              {product.description}
                            </h2>
                            <button
                              className="bg-stone-200 px-2 py-1 rounded-md  text-sm hover:bg-stone-300 transition-all duration-200 font-semibold"
                              onClick={truncateToggle}
                              type=""
                            >
                              Leer menos
                            </button>
                          </div>
                        )}
                        
                      </div>
                    </div>
                    <div
                      className='flex mx-auto items-center text-center justify-center mb-2' 
                    >
                      <div className="text-xl text-black font-bold mt-1">
                        ${product.price}
                      </div>
                     
                    </div>
                    <div className="flex space-x-2 text-sm font-medium justify-center">
                    <Contador quantity={selectedQuantity} setQuantity={setSelectedQuantity} stock={product.stock} />
                    <button onClick={handleAddToCart} className="transition  inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-black px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-black active:scale-[0.99] ">
              <span>Añadir al Carrito</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
