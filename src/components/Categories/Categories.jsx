import React from 'react'
import { productos } from '../../products'
import { Link } from 'react-router-dom';
export default function Categories() {
  const categories = [...new Set(productos.map((product) => product.category))];
  return (
    <div> 
      <h1 className='text-white font-bold text-2xl mt-[-50px] text-center mb-8'>Categorias: </h1>
      <ul className="flex justify-center mb-8 gap-4" key={productos.id}>
       
        {categories.map((category) => (
          <Link className="text-white" to={`/category/${category}`}>
            <li className="font-bold border p-2 rounded-xl " key={category}>
              {category}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

