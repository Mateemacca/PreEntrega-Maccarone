import Layout from "../../components/Layout/Layout";
import Item from '../../components/Item/Item'
import ItemList from "../../components/ItemList/ItemList";
import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import { productos } from '../../products';
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import './products.css'
import Categories from "../../components/Categories/Categories";
export default function Products() {

  const { idCategory } = useParams();
  const [isLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState ([])
  useEffect(() => {
    setIsLoading(true); // Establecer isLoading en true cuando cambia la categoría

    setTimeout(() => {
      setProducts(idCategory ? filterProductsByCategory(idCategory) : productos);
      setIsLoading(false); // Establecer isLoading en false cuando los productos están listos
    }, 1000);
  }, [idCategory]);

  const filterProductsByCategory = (category) => {
    return productos.filter((product) => product.category === category);
  };
  
  return (
    <Layout>
    <Categories />
    {idCategory && <h2 className="text-white text-center font-bold text-2xl mb-5">Mostrando productos de la categoria: {idCategory} </h2>}
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