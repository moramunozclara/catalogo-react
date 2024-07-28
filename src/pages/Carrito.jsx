import { useContext } from "react";
import { CarritoContext } from "../Layout"; // tomamos el contexto



const Carrito = () => {
    const { carrito } = useContext(CarritoContext); // accionamos el contexto

    return ( 
        <>
    
        <div>
            <h2>Estoy en carrito</h2>
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