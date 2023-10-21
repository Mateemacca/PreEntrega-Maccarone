import { useParams } from "react-router-dom";
import React from "react";
import Layout from "../../components/Layout/Layout";
import { doc, getDoc } from 'firebase/firestore';
import { db } from "../../db/db";
import { useEffect, useState } from "react";
import './order.css'

function OrderPage() {
    const { orderID } = useParams();
    const [order, setOrder] = useState(null);
  const fetchOrder = async () => {
    try {
      const orderRef = doc(db, 'orders', orderID);
      const orderSnapshot = await getDoc(orderRef);

      if (orderSnapshot.exists()) {
        const orderData = orderSnapshot.data();
        setOrder(orderData);
       
      } else {
        console.log('La orden no existe.');
      }
    } catch (error) {
      console.error('Error al obtener la orden:', error);
    }
  };
  
    useEffect(() => {
      fetchOrder();
    }, []);
    function formatearDate(date) {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear().toString().slice(-2);
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
      
        return `${day}/${month}/${year}, ${hours}:${minutes}`;
      }

  return (
    <Layout>
      {order && (
        <>
        <h1 className="text-white mx-auto text-center font-semibold mt-[-36px] dark:text-black mb-8">Orden con el id: <span className="bg-stone-300 px-1 py-1 rounded-md">{orderID}</span></h1>
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                 
    
    <div className="mx-auto mt-8 max-w-md md:mt-2">

      <div className="rounded-3xl bg-white shadow-2xl card-glow">
        <div className="px-4 py-6 sm:px-8 sm:py-10 ">
          <div className="flow-root">
            <ul className="-my-8">
            {order.products.map((product, index) => (
              <li key={index} className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                <div className="shrink-0 relative">
                  <span className="absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border bg-white text-sm font-medium text-gray-500 shadow sm:-top-2 sm:-right-2">{product.quantity}</span>
                  <img className="h-24 w-24 max-w-full rounded-lg object-cover" src={product.image} alt="" />
                </div>

                <div className="relative flex flex-1 flex-col justify-between">
                  <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                    <div className="pr-8 sm:pr-5">
                      <p className="text-base font-semibold text-gray-900">{product.productName}</p>
                      
                    </div>

                    <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                      <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">${product.price}</p>
                    </div>
                    
                  </div>

                
                <hr className="mx-0 mt-6 mb-0 h-0 border-r-0 border-b-0 border-l-0 border-t border-solid border-gray-300" />
                  
                </div>
              </li>
               
                ))}
            </ul>
            
          </div>
         

          <div className="mt-6 space-y-3 border-t border-b py-8">
            <div className="flex items-center justify-between">
              <p className="text-gray-400">Fecha de compra</p>
              <p className="text-md font-semibold text-gray-900">{formatearDate(order.orderDate.toDate())} hs</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-gray-400">ID de orden</p>
              <p className="text-lg font-semibold text-gray-900">{orderID}</p>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm font-medium text-gray-900">Total</p>
            <p className="text-xl font-semibold text-gray-900"><span className="text-xs font-normal text-gray-400">ARS </span>${order.total}</p>
          </div>

        </div>
      </div>
    </div>
  </div>

      
  </>
      )}
    </Layout>
  )
}

export default OrderPage;