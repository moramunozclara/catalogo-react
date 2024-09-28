// importar contexto
import { createContext, useContext, useState, useEffect } from "react";


// crear un contexto de usuario
const CarritoContext = createContext();

// crear un provider  y exportarlo para usarlo en main.jsx
//      (funcionalidades para nuestro contexto)
export function CarritoProvider({children}) {
    
        const [carrito, setCarrito] = useState([]);

        const agregarCarrito = (producto) => {
            setCarrito([...carrito, producto]);
        };
    
        const eliminarDelCarrito = (producto) => {
            setCarrito(carrito.filter(item => item.name !== producto.name));
        };


        const {VITE_API_URL} = import.meta.env;  // CAMBIO AQUÍ. por que con llaves???



 return (
        <CarritoContext.Provider value={{carrito, setCarrito, agregarCarrito, eliminarDelCarrito}}>
            {children}
        </CarritoContext.Provider>
 );
}

//  crear un Custom Hook para usar nuestro contexto de carrito
// se exporta para poder usarlo desde cualquier componente
export function useCarrito() {

    return useContext(CarritoContext);

}