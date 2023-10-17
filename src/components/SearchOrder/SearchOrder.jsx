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

    // Realiza una consulta para buscar la orden por ID
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
      // Redirige a la página de la orden y pasa el ID como parámetro
      navigate(`/order/${orderID}`);
    }
  };

  return (
    <div className=''>
     
        <>
        <h2 className='text-white font-semibold mb-6 text-2xl'>Ya tienes una orden? Buscala aqui!</h2>
      <input className='bg-transparent font-bold text-white border-2 rounded-lg px-1.5 pb-1.5 pt-2 text-md uppercase focus:border-white focus:outline-none focus:ring-0 border-gray-500 placeholder:normal-case placeholder:font-normal'
        type="text"
        placeholder="Ingrese el ID de la orden"
        maxLength="5"
        value={orderID}
        onChange={(e) => setOrderID(e.target.value)}
      />
      <button className='text-white ml-4 border-2 border-white p-2 rounded-lg font-semibold hover:bg-white hover:text-black transition ease duration-200 button-glow' onClick={handleSearch}>
      {isLoading ? <LoadingSpinner /> : (
      'Buscar Orden'
      )}
      </button>
      </>
     
    </div>
  );
};

export default SearchOrder;
