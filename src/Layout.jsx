//1º sfc
// 2º Import el OUTLET y meterlo en el MAIN
// 3º Import el css
import { Outlet, } from "react-router-dom";
import './css/catalogo.css'
import {createContext, useState} from 'react' 

export const CarritoContext = createContext("añadir al carrito");



const Layout = () => {

    const [carrito, setCarrito] = useState("añadir al carrito");


    return ( 

                <CarritoContext.Provider value={carrito}>


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

            <button onClick={() => {
                 setCarrito(carrito=="eliminar"?"añadir al carrito":"eliminar del carrito");
            }}>
                Cambiar valor del carrito: {carrito} 
                </button>

        </div>

             </CarritoContext.Provider>

     
    )
}
 
export default Layout;