// Sección catálogo
// import { useState } from 'react'
import {useState, useEffect, useContext} from 'react';
import Producto from './Producto';
import { CarritoContext } from '../Layout';

// sfc
const Catalogo = () => {
    const [productos, setProductos] = useState([]);
    const { carrito, agregarCarrito, eliminarDelCarrito } = useContext(CarritoContext);
    // const [filtro, setFiltro] = useState("");
    // const [errores, setErrores] = useState("");
    // const [info, setInfo] = useState({
    //     count: 0,
    //     next: null,
    //     prev: null,
    //     pages: 0
    // });
        

    useEffect(() => {
        const getProductos = async () => {
            try {
                const respuesta= await fetch('/backend/API/v1/productos.json');
                const objeto = await respuesta.json();
                setProductos(objeto.results);
            }
            catch (error) {
                console.error('Error al obtener los productos:', error);
            }
        };

        getProductos();
        
    }, []);


    const estaEnCarrito = (producto) => {
        return carrito.some(item => item.name === producto.name);
    };
    
    return ( 
            <>
            <h2>Estoy en el Catálogo</h2>
            <ul className='GridProductos'>

                    {productos.map((producto) => (
                    <li key={producto.name} className={estaEnCarrito(producto) ? 'enCarrito' : ''}>
                        <div className={`ProductContainer ${estaEnCarrito(producto) ? 'visible' : ''}`}>
                        <p>{producto.name}</p>
                        <p>{producto.description}</p>
                        {/* <p>Servicios:</p> */}
                        
                        <ul>
                            {producto.servicesList.map((service, index) => (
                                <li key={index}>
                                    {service}
                                </li>
                            ))}
                        </ul>

                            {/* botón cambiar valor del carrito */}
                            <button onClick={() => {
                                if (estaEnCarrito(producto)) {
                                    eliminarDelCarrito(producto);
                                } else {
                                    agregarCarrito(producto);
                                }
                            }}>
                                {estaEnCarrito(producto) ? "Eliminar del Carrito" : "Añadir al Carrito"}
                            </button>
                            
                    {/* <p>{producto.type}</p> */}
                    {/* <p>{producto.price}</p> */}

                    </div>
                    </li>
                    ))}
                
            </ul>
            </>
    
    );
}
 
export default Catalogo;