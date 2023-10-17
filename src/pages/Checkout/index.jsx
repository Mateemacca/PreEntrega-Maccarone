import {React, useContext} from 'react'
import { CartCtx } from '../../context/CartContext';
import Layout from '../../components/Layout/Layout'
import { useParams } from 'react-router-dom';
import { doc, setDoc, collection } from 'firebase/firestore';
import { db } from '../../db/db';
import { useState } from 'react';
import SearchOrder from '../../components/SearchOrder/SearchOrder';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import './checkout.css'
export default function Checkout() {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const { orderID } = useParams();
  const { cart, setCart } = useContext(CartCtx);

  function generarOrderId() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const maxCaracteres = 5;
    let orderId = '';
    for (let i = 0; i < maxCaracteres; i++) {
      const caracterAleatorio = caracteres.charAt(Math.floor(Math.random() * caracteres.length));
      orderId += caracterAleatorio;
    }
    return orderId;
  }
  const calcularSubtotal = (product) => {
    return product.selectedQuantity * product.price;
  };
  const groupedCartProducts = cart.reduce((grouped, product) => {
    if (!grouped[product.id]) {
      grouped[product.id] = { ...product, quantity: 1 };
    } else {
      grouped[product.id].quantity += 1;
    }
    return grouped;
  }, {});

  const productosAgrupadosCart = Object.values(groupedCartProducts);
  const total = productosAgrupadosCart.reduce((acc, product) => {
    return acc + calcularSubtotal(product);
  }, 0);
  function limpiarCarrito() {
    setCart([])
    localStorage.removeItem("cart");
  }
  const handleFinalizarCompra = async () => {
    
    if (name && phone && email) {
      const orderID = generarOrderId();
      const orderDate = new Date();
      const orderData = {
        name,
        phone,
        email,
        orderID,
        orderDate,
        products: cart.map((product) => ({
          productName: product.title,
          quantity: product.selectedQuantity,
          price: product.price,
          image: product.image,
        })),
        total: total,
      };
      
      // Obtiene una referencia a la colección 'orders' en Firestore usando la instancia db
      const ordersCollection = collection(db, 'orders');
      const orderDocRef = doc(ordersCollection, orderID);
      
      try {
        setIsLoading(true);
        // Agrega la orden a Firestore usando setDoc
        await setDoc(orderDocRef, orderData);
        setIsLoading(false);
        // docRef contiene información sobre el documento recién agregado (incluyendo su ID)
        console.log('Orden creada con éxito. ID de la orden:', orderID);
      
        // Limpia el carrito
        limpiarCarrito();
        // toast.success('¡Compra realizada con éxito!'); // Asegúrate de que la función toast esté definida y funcionando correctamente.
        Swal.fire({
          title: 'Excelente!',
          text: `La compra fue realizada con éxito bajo el ID: ${orderID}`,
          icon: 'success',
          showCancelButton: true,
          confirmButtonText: 'Sí',
          cancelButtonText: 'No',
        });
      } catch (error) {
        // toast.error('Error al realizar la compra.'); // Asegúrate de que la función toast esté definida y funcionando correctamente.
        console.error(error);
      }
    } else {
      // Agregar lógica adicional en caso de que falten datos (nombre, teléfono o correo electrónico).
      // Puedes mostrar un mensaje de error o tomar medidas apropiadas aquí.
    }
  };




  
  return (
    <Layout>
      <div className='flex items-center gap-2 font-bold mt-[-30px] mb-12 ml-4'>
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
  <Link to="/cart" className="text-white  items-center text-center">  
            Volver al carrito
            </Link>
</div>
      {isLoading ? <LoadingSpinner /> : (
        <>
        <div className="text-center mx-auto flex justify-center">
        <SearchOrder />
      </div>
<div className="relative mx-auto flex items-center justify-center">
  <form className='flex justify-center flex-col'>

    <div className="relative mt-12">
      <input type="text" className="block px-2.5 pb-2.5 pt-4 text-md w-[350px] dark:text-gray-900 text-gray-300 bg-[#111111] rounded-lg border-2 dark:border-gray-300 appearance-none focu:text-white border-gray-500 focus:border-white focus:outline-none focus:ring-0 dark:focus:border-blue-600 peer" placeholder=""
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}/>
      <label className=" pointer-events-none absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#111111] dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
      Nombre Completo
      </label>
    </div>



    <div className="relative mt-4">
      <input type="email" className=" block px-2.5 pb-2.5 pt-4 text-md w-[350px] dark:text-gray-900 text-gray-300 bg-[#111111] rounded-lg border-2 dark:border-gray-300 appearance-none focu:text-white border-gray-500 focus:border-white focus:outline-none focus:ring-0 dark:focus:border-blue-600 peer" placeholder=""
            id="name"
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
      <label className="pointer-events-none absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#111111] dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
      Direccion Email
      </label>
    </div>




    <div className="relative mt-4">
      <input type="text" className="block px-2.5 pb-2.5 pt-4 text-md w-[350px] dark:text-gray-900 text-gray-300 bg-[#111111] rounded-lg border-2 dark:border-gray-300 appearance-none focu:text-white border-gray-500 focus:border-white focus:outline-none focus:ring-0 dark:focus:border-blue-600 peer" placeholder=""
            id="name"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}/>
      <label className="pointer-events-none absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#111111] dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
      Numero de Telefono
      </label>
    </div>
    <button type="button" className='mt-4 text-white text-center w-[150px] mx-auto border-2 border-white p-2 rounded-lg hover:bg-white hover:text-black font-semibold transition ease duration-200 button-glow' onClick={handleFinalizarCompra}>
          Finalizar Compra
        </button>
  </form>
</div>
</>
)}
    </Layout>
  );
}