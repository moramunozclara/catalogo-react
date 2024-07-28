//1º sfc
// 2º Import el OUTLET y meterlo en el MAIN
// 3º Import el css
import { Outlet, } from "react-router-dom";
import './css/catalogo.css'
import {createContext, useState} from 'react' 

export const CarritoContext = createContext();

const Layout = () => {

    const [carrito, setCarrito] = useState([]);

    const agregarCarrito = (producto) => {
        setCarrito([...carrito, producto]);
    };


    return ( 

            <CarritoContext.Provider value={{carrito, setCarrito, agregarCarrito}}>

            <div>
                <header>
                    <nav>
                        Algo de nav
                    </nav>
                    <h1>Proyecto de catálogo con React</h1>
                </header>

                <main>
                    <Outlet/>
                </main>

            </div>

            </CarritoContext.Provider>

    );
}
 
export default Layout;