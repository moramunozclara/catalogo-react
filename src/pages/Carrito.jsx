import { useContext } from "react";
import { CarritoContext } from "../Layout"; // tomamos el contexto



const Carrito = () => {
    // const { carrito } = useContext(CarritoContext); 
    const { carrito, agregarCarrito, eliminarDelCarrito } = useContext(CarritoContext);


    return ( 
        <>
    
        <div>
            <h1>🤩 Estoy en carrito 🤩 </h1>
            <ul className="GridProductos">
                {carrito.map((producto, index) => (
                    <li key={index} className='ProductContainer'>
                        <p>{producto.name}</p>
                        <p>{producto.description}</p>
                        {/* <p>{producto.price}</p> */}
                   
                </li>
                ) ) }
            </ul>
        </div>
        
        </> 
     );
}
 
export default Carrito;