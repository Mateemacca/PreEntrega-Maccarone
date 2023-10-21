import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../db/db';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const SearchOrder = () => {
  const [orderID, setOrderID] = useState('');
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const handleSearch = async () => {
    setIsLoading(true)

    // consulta q para buscar la orden por id
    const ordersCollection = collection(db, 'orders');
    const q = query(ordersCollection, where('orderID', '==', orderID));
    const querySnapshot = await getDocs(q);
    setIsLoading(false)
    if (querySnapshot.empty) {
      Swal.fire({
        title:':(',
        text:'No se encontro una orden con ese ID.',
        icon:'error'
      });
    } else {
      navigate(`/order/${orderID}`);
    }
  };

  return (
    <div className=''>
     
        <>
        <h2 className='text-white font-semibold mb-6 text-2xl dark:text-black'>Ya hiciste una orden? Buscala aqui!</h2>
      <input className='bg-transparent font-bold text-white border-2 rounded-lg px-1.5 pb-1.5 pt-2 text-md uppercase focus:border-white dark:focus:border-black dark:text-black focus:outline-none focus:ring-0 border-gray-500 placeholder:normal-case placeholder:font-normal'
        type="text"
        placeholder="Ingrese el ID de la orden"
        maxLength="5"
        value={orderID}
        onChange={(e) => setOrderID(e.target.value)}
      />
      <button className='text-white ml-4 border-2 border-white p-2 rounded-lg font-semibold dark:text-black dark:border-black dark:hover:bg-black hover:bg-white hover:text-black dark:hover:text-white  transition ease duration-200 button-glow' onClick={handleSearch}>
      {isLoading ? <LoadingSpinner /> : (
      'Buscar Orden'
      )}
      </button>
      </>
     
    </div>
  );
};

export default SearchOrder;
