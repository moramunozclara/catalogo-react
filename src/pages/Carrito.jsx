import { useContext } from "react";
import { CarritoContext } from "../Layout"; // tomamos el contexto



const Carrito = () => {
    const { carrito } = useContext(CarritoContext); // accionamos el contexto

    return ( 
        <>
    
        <div>
            <h2>Estoy en carrito</h2>
            <ul>
                {carrito.map((producto, index) => (
                    <li key={index}>{producto.name}</li>
                ) ) }
            </ul>
        </div>
        
        </> 
     );
}
 
export default Carrito;