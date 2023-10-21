import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../db/db';
import { Link } from 'react-router-dom';

function CategoryMenu() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const productsRef = collection(db, 'Productos d'); 
        const querySnapshot = await getDocs(productsRef);
        const categorySet = new Set();

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          if (data.category) {
            categorySet.add(data.category);
          }
        });

        const uniqueCategories = Array.from(categorySet);
        setCategories(uniqueCategories);
      } catch (error) {
        console.error('Error al obtener categorias:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className='pb-8'>
        <h1 className='text-white font-bold flex justify-center text-2xl'>
          Categorias:
        </h1>
      <ul className='flex justify-center gap-4'>
      <li key='todos'>
            <Link className=' my-2 text-white text-center hover:bg-white hover:text-black duration-200 transition ease flex justify-center p-2 border font-semibold rounded-xl' to={`/products/`}>Todos</Link>
          </li>
        {categories.map((category) => (
          <li key={category}>
            <Link className=' my-2 text-white hover:bg-white hover:text-black duration-200 transition ease text-center flex justify-center p-2 border font-semibold rounded-xl' to={`/category/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryMenu;