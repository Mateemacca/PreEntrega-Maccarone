import React, { useContext } from 'react';
import { CartCtx } from '../../context/CartContext';
import Layout from '../../components/Layout/Layout';
import { toast } from 'react-hot-toast';
import './cart.css'
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { doc, setDoc, collection } from 'firebase/firestore';
import { db } from '../../db/db';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { Navigate } from 'react-router-dom';
// Formatea el precio y lo pone en formato de moneda
const formatearPrecio = (price) => {
 
  return price.toLocaleString('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 2,
  });
};



const Cart = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { cart, setCart } = useContext(CartCtx);

  const groupedCartProducts = cart.reduce((grouped, product) => {
    if (!grouped[product.id]) {
      grouped[product.id] = { ...product, quantity: 1 };
    } else {
      grouped[product.id].quantity += 1;
    }
    return grouped;
  }, {});

  const productosAgrupadosCart = Object.values(groupedCartProducts);

  const calcularSubtotal = (product) => {
    return product.selectedQuantity * product.price;
  };

  const total = productosAgrupadosCart.reduce((acc, product) => {
    return acc + calcularSubtotal(product);
  }, 0);
// Precio total formateado a moneda real
  const totalFormateado = formatearPrecio(total);
// Funcion para generar un id de order random de 5 caracteres
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

  function limpiarCarrito() {
    setCart([])
    localStorage.removeItem("cart");
  }
  
  function handleVaciarCarrito(){
    limpiarCarrito()
    toast.success("Carrito vaciado con éxito");
  }
// Funcion para finalizar la compra
const handleFinalizarCompra = async () => {
  // Genera un ID de orden
  const orderID = generarOrderId();
  const orderDate = new Date();
  const orderData = {
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

  // Referencia a la colección orders de Firestore 
  const ordersCollection = collection(db, 'orders');
  const orderDocRef = doc(ordersCollection, orderID);

  try {
    setIsLoading(true)
    await setDoc(orderDocRef, orderData);
    setIsLoading(false);
    console.log('Orden creada con exito. ID de la orden:', orderID);


    limpiarCarrito();
    toast.success('Compra realizada con exito!');
    Swal.fire({
      title: 'Excelente!',
      text: `La compra fue realizada con exito bajo el id: ${orderID}`,
      icon: 'success',
      showCancelButton: false,
      confirmButtonText: 'ok',
    })
  } catch (error) {
    toast.error('Error al realizar la compra.');
    console.error(error);
  }
};
  const handleVaciarCarritoAlert = () => {
    Swal.fire({
      title: 'Vaciar Carrito?',
      text: 'Estas seguro de que queres vaciar el carrito?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        handleVaciarCarrito()
      }
    });
  };
  // Funcion para sacar un producto del carrito
  const handleRemoverDelCarrito = (productId, productName, selectedQuantity) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
    
    toast.success(`Se ha(n) removido del carrito: ${selectedQuantity}x ${productName}(s)`);
  };
  const confirmarEliminacion = (productId, productName, selectedQuantity, productImage) => {
    Swal.fire({
      title: '¿Eliminar producto del carrito?',
      text: `Estas seguro de que deseas eliminar ${selectedQuantity}x ${productName}(s) del carrito?`,
      icon: '',
      imageUrl: productImage, 
      imageWidth: 150, 
      imageAlt: 'Producto',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        handleRemoverDelCarrito(productId, productName, selectedQuantity);
      }
    });
  };
  return (
    
    <Layout>
      {isLoading ? (
      <div className="loading-spinner-container">
        <LoadingSpinner />
      </div>
    ) : (
          
      cart.length > 0 ? (
        <div>
          <table className='w-[70vw] mx-auto rounded-lg'>
            <thead>
              <tr className='text-white text-center'>
                <th>Imagen</th>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal por producto</th>
              </tr>
            </thead>
            <tbody className='rounded-tr-lg font-bold rounded-lg'>
              {productosAgrupadosCart.map((product, index) => (
                <tr
                  key={product.id}
                  className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}
                >
                  <td>
                    <img src={product.image} alt={product.title} className='w-32 h-32 mx-auto mix-blend-multiply' />
                  </td>
                  <td className='text-center'>{product.title}</td>
                  <td className='text-center'>{formatearPrecio(product.price)}</td>
                  <td className='text-center'>{`${product.selectedQuantity}x`}</td>
                  <td className='text-center'>{formatearPrecio(calcularSubtotal(product))}</td>
                  <td className='text-center'>
                  <button
        onClick={() =>
          confirmarEliminacion(
            product.id,
            product.title,
            product.selectedQuantity,
            product.image
          )
        }
      >
        <FaTrash />
      </button>
                  </td>
              </tr>
              ))}
            </tbody>
          </table>
          <p className='text-center text-2xl text-white font-bold mt-4'>Total: {totalFormateado}</p>
          <div className='flex justify-center gap-8 mt-6'>
            <Link type="" className='text-white border-2 active:opacity-50 active:scale-[0.99] border-white p-2 rounded-lg hover:bg-white button-glow hover:text-black transition duration-200 ease font-semibold' to={'/checkout'}>
              Finalizar Compra
            </Link>
            <button type="" className='text-white border-2 active:opacity-50 active:scale-[0.99] border-white p-2 rounded-lg hover:bg-white button-glow hover:text-black transition duration-200 ease font-semibold' onClick={handleVaciarCarritoAlert}>
              Vaciar Carrito
            </button>
          </div>
        </div>
      ) : (
        <p className="text-white text-center font-bold text-2xl">No tenes productos en tu carrito.</p>
      )
      )}
      
    </Layout>
  );
};

export default Cart;
