//1º sfc
// 2º Import el OUTLET y meterlo en el MAIN
// 3º Import el css
import { Outlet, NavLink } from "react-router-dom";
import './css/catalogo.css'
import {createContext, useState} from 'react' 

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
                <header>
                    <nav>

                        {/* CREAR EL NAV CON LAS RUTAS. SIN ELLO EL CARRITO NO ALMACENA NADA */}
                        Algo de nav

                        <NavLink>Login</NavLink>
                        <ul>
                        <li><NavLink to="/">Login</NavLink></li>
                        <li><NavLink to="/registro">Registro</NavLink></li>
                        <li><NavLink to="/carrito">Carrito</NavLink></li>

                        </ul>
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