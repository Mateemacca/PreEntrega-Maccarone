import Layout from "../../components/Layout/Layout";
import Item from '../../components/Item/Item';
import ItemList from "../../components/ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { db } from '../../db/db';
import { getDocs, collection, query, where } from 'firebase/firestore';
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import CategoryMenu from "../../components/Categories/Categories";
import { useContext } from "react";
import { CartCtx } from "../../context/CartContext";
import './products.css'

export default function Products() {
  const { idCategory } = useParams();





  
  const [isLoading, setIsLoading] = useState(true);
  const {products, setProducts} = useContext(CartCtx)
  
  useEffect(() => {
    setIsLoading(true);
    const productsRef = collection(db, 'Productos d'); 

   
    const q = idCategory
  ? query(productsRef, where('category', '==', idCategory))
  : productsRef;

   
    getDocs(q)
      .then((response) => {
        const productsFirebase = response.docs.map((product) => ({
          id: product.id,
          ...product.data(),
        }));
        setProducts(productsFirebase);
        setIsLoading(false);
        
      })
      .catch((error) => {
        console.error("Error al obtener los productos: ", error);
        setIsLoading(false);
      });
  }, [idCategory]);

  return (
    <Layout>
      <CategoryMenu />
      {idCategory && (
        <h2 className="text-white text-center font-bold text-2xl mb-5">
          Mostrando productos de la categoría: {idCategory}
        </h2>
      )}
      <ItemList>
        {isLoading ? (
          <div className="loading-spinner-container">
            <LoadingSpinner />
          </div>
        ) : (
          products.map((prod) => (
            <Item
              precio={prod.price}
              image={prod.image}
              id={prod.id}
              key={prod.id}
              nombre={prod.title}
              descripcion={prod.description}
            />
          ))
        )}
      </ItemList>
    </Layout>
  );
}