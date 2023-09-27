import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productos } from "../../products";
import Layout from "../../components/Layout/Layout";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import Contador from "../../components/Contador/Contador";

import { Link } from "react-router-dom";
export default function ItemDetail() {
  useEffect(() => {
    setTimeout(() => {
      setProduct(searchProduct);
      setIsLoading(false);
    }, 1000);
  }, []);
  const params = useParams();

  useEffect(() => {
    console.log(params);
  }, []);

  const [toggle, setToggle] = useState(true);

  const truncateToggle = () => {
    setToggle(!toggle);
  };
  const { idProduct } = useParams();

  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const searchProduct = productos.find(
    (prod) => prod.id === parseInt(idProduct)
  );

  return (
    <Layout>
      <div className="flex items-center pl-5 mt-[-5vh]">
        <Link to={"/products"} className="flex items-center">
          <svg
            className="w-3.5 h-3.5 ml-2 transform rotate-180 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
          <h3 className="text-white mt-0 ml-2 font-bold">Volver a Productos</h3>
        </Link>
      </div>

      {isLoading ? (
        <div className="loading-spinner-container">
          <LoadingSpinner />
        </div>
      ) : (
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
                              {product.rating.rate}
                            </span>
                            <span className="mr-2 text-gray-400">
                              {product.category}
                            </span>
                          </div>
                          <div className="flex items-center w-full justify-between min-w-0 ">
                            <h1 className="text-lg mr-auto cursor-pointer text-gray-900 transition-all duration-100 ease-in-out truncate font-bold ">
                              {product.title}
                            </h1>
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
                                  className="bg-stone-200 px-2 py-1 rounded-md text-sm hover:bg-stone-300 transition-all duration-200"
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
                                  className="bg-stone-200 px-2 py-1 rounded-md  text-sm hover:bg-stone-300 transition-all duration-200"
                                  onClick={truncateToggle}
                                  type=""
                                >
                                  Leer menos
                                </button>
                              </div>
                            )}
                            <div className="flex items-center bg-green-400 text-white text-xs px-2 py-1 ml-3 rounded-lg">
                              Stock
                            </div>
                          </div>
                        </div>
                        <div className="flex mx-auto items-center text-center justify-between max-w-[75%]">
                          <div className="text-xl text-black font-semibold mt-1">
                            ${product.price}
                          </div>
                          <div className="lg:flex  py-4  text-sm text-gray-600">
                            <div className="flex-1 inline-flex items-center ">
                              <span className="text-secondary whitespace-nowrap mr-3 font-bold">
                                Talle
                              </span>
                              <div className="cursor-pointer text-gray-400 ">
                                <span className="hover:text-gray-900 p-1 py-0 font-bold">
                                  S
                                </span>
                                <span className="hover:text-gray-900 p-1 py-0 font-bold">
                                  M
                                </span>
                                <span className="hover:text-gray-900 p-1 py-0 font-bold">
                                  L
                                </span>
                                <span className="hover:text-gray-900 p-1 py-0 font-bold">
                                  XL
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2 text-sm font-medium justify-center">
                          <Contador />
                          <button className="transition  inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-black px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-black active:scale-[0.99] ">
                            <span>Add to Cart</span>
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
      )}
    </Layout>
  );
}

