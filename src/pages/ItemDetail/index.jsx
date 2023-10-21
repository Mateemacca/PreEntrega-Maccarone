import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import './itemdetail.css'
import ItemDetailComponent from "../../components/ItemDetail/ItemDetailComponent";
import { Link } from "react-router-dom";
import {db} from '../../db/db';
import {doc, getDoc} from 'firebase/firestore'

export default function ItemDetail() {
  
  useEffect(() => {
    

  //creamos la referencia de nuestro producto
   const productRef = doc(db,'Productos d', idProduct)
  //usamos la function getDoc para obtener un solo producto
   getDoc(productRef).then((response)=>{
    //verificamos si el producto existe con ese id
    if(response.exists()){
      //si existe lo parseamos en forma de array y lo consologeamos
    const product = {id: response.id, ...response.data() }
    setProduct(product);
    console.log(product)
    setIsLoading(false);
  }else{
    console.log("No existe")
  }
   })
  
  }, [])

  const params = useParams();
  useEffect(() => {
    console.log(params);
  }, []);
  const { idProduct } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  return (
    <Layout>
      <div className="flex items-center pl-5 mt-[-5vh]">
        <Link to={"/products"} className="flex items-center">
          <svg
            className="w-3.5 h-3.5 ml-2 transform rotate-180 text-white dark:text-black"
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
          <h3 className="text-white mt-0 ml-2 font-bold dark:text-black">Volver a Productos</h3>
        </Link>
      </div>

      {isLoading ? (
        <div className="loading-spinner-container">
          <LoadingSpinner />
        </div>
      ) : (
        <ItemDetailComponent product={product}/>
      )}
    </Layout>
  );
}

