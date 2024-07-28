// 1º import { createBrowserRouter } from "react-router-dom";
// 2º const router = createBrowserRouter();
// 3º export default router;
// 4º Importar páginas
// 5º Importar páginas especiales (Layout y Error)
// 6º crear array de router

import { createBrowserRouter } from "react-router-dom";

import Home from '../pages/Home';
import Catalogo from '../pages/Catalogo';
import Producto from '../pages/Producto';
import Carrito from "../pages/Carrito";

import Layout from "../Layout";
import ErrorPage from "../ErrorPage";

// router tiene un array

const router = createBrowserRouter([{
    path: '/',
    element: <Layout/>,
    // errorElement: <ErrorPage/>,
    children: [ 
        {
            index: true,
            element: <Home/>
        },
        {
            path: 'catalogo', //los children van sin barra pq ya trae path
            element: <Catalogo/>
        },
        {
            // COLOCAR LUEGO DE NUEVO path: 'producto/:productoId',
            path: 'producto',
            element: <Producto/>
        },
        {
            path: 'carrito', //los children van sin barra pq ya trae path
            element: <Carrito/>
        },
        {
            path: '*',
            element: <ErrorPage/>
        }
    ]

}]);


export default router;