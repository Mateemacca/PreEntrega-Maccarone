import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {ItemDetailContainer, ItemListContainer, NotFoundPage, ProductosPage, CartPage, CheckoutPage, OrderPage} from '../pages' 


const routes = createBrowserRouter ([
    {
        path:'/',
        element: <ItemListContainer />
    },
    {
        path:'/product/:idProduct',
        element: <ItemDetailContainer />
    },
    {
        path:"/category/:idCategory",
        element: <ProductosPage />,
    },
    {
        path:"/products",
        element:<ProductosPage />
    },
    {
        path:'/cart',
        element: <CartPage />
    },
    {
        path: '/order/:orderID', 
        element: <OrderPage />
      },
      {
        path: '/checkout',
        element: <CheckoutPage />
      },
    {
        path:"/*",
        element:<NotFoundPage/>
    },
])

const Navigation = () => {
    return (
        <RouterProvider router={routes} />
        )
}

export default Navigation