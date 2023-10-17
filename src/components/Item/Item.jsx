import React from "react";
import "./item.css";
import { Link } from "react-router-dom";
export default function Item({ id, nombre, precio, descripcion, image }) {
  return (
    <div className="container flex justify-center product-item">
      <div className="max-w-sm ">
        <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
          <Link to={`/product/${id}`}>
            <img
              className="rounded-t-lg w-[400px] h-[400px]"
              src={image}
              alt=""
            />
          </Link>
          <div className="py-6 px-8 rounded-lg bg-white">
            <Link to={`/product/${id}`}>
              <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer truncate">
                {nombre}
              </h1>
            </Link>
            <p className="text-gray-700 tracking-wide truncate">
              {descripcion}
            </p>
            <div className="flex items-center text-center mt-6">
              <span className="text-md text-black mr-2 font-bold items-center text-center">
                ${precio}
              </span>
              <Link to={`/product/${id}`}>
                <button className="items-center text-center  py-2 px-4 bg-black text-white font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300 flex ">
                  Ver detalle
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    //{" "}
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                    //{" "}
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}