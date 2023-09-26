import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {ItemDetailContainer, ItemListContainer, NotFoundPage, ProductosPage} from '../pages' 


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
        path:"/category/:id",
        element:<ItemListContainer />
    },
    {
        path:"/products",
        element:<ProductosPage />
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