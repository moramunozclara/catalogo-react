import { useContext } from "react";
import { useCarrito } from '../hooks/useCarrito';




const Carrito = () => {
    // const { carrito } = useContext(useCarrito); 
    const { carrito, setCarrito, agregarCarrito, eliminarDelCarrito } = useCarrito(); 



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