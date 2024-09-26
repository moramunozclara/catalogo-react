//1º sfc
// 2º Import el OUTLET y meterlo en el MAIN
// 3º Import el css
import { Outlet, NavLink } from "react-router-dom";
import './css/catalogo.css';
import {createContext, useState} from 'react' ;
import Header from "./components/Header";


const VITE_API_URL = import.meta.env.VITE_API_URL;




export const CarritoContext = createContext();

const Layout = () => {

    const [carrito, setCarrito] = useState([]);

    const agregarCarrito = (producto) => {
        setCarrito([...carrito, producto]);
    };

    const eliminarDelCarrito = (producto) => {
        setCarrito(carrito.filter(item => item.name !== producto.name));
    };
    

    return ( 

            <CarritoContext.Provider value={{carrito, setCarrito, agregarCarrito, eliminarDelCarrito}}>

            <div>
                <Header/>
                <main>
                    <Outlet/>
                </main>

            </div>

            </CarritoContext.Provider>

    );
}
 
export default Layout;