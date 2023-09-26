import Layout from "../../components/Layout/Layout";
import Item from '../../components/Item/Item'
import ItemList from "../../components/ItemList/ItemList";
import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import { productos } from '../../products';
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import './products.css'
export default function Products() {
  const [isLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState ([])
  useEffect(() => {
    setTimeout(() => {
      setProducts(productos);
      setIsLoading(false)
    }, 1000);
  }, []);
  return (
    <Layout>
      <ItemList>
        {
            isLoading 
            ?  <div className="loading-spinner-container">
            <LoadingSpinner />
          </div>
            : products.map(prod => (
                <Item  
                image={prod.image}
                id={prod.id} key={prod.id}
                nombre={prod.title}
                descripcion={prod.description}
                />
            ))
        }
      </ItemList>
    </Layout>
  );
}