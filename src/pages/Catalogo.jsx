// Sección catálogo
// import { useState } from 'react'
import {useState, useEffect, useContext} from 'react';
import Producto from './Producto';
import { CarritoContext } from '../Layout';

// sfc
const Catalogo = () => {
    const [productos, setProductos] = useState([]);
    const {carrito, setCarrito, agregarCarrito} = useContext(CarritoContext);
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
    
    return ( 
            <>
            <h2>Estoy en el Catálogo</h2>
            <ul>
                <li>
                    {productos.map((producto) => (
                    <li key={producto.name}>
                    <div className='ProductContainer'>
                        <p>{producto.name}</p>
                        <p>{producto.description}</p>
                        {/* <p>Servicios:</p> */}
                        <ul>
                            {producto.servicesList.map((service, index) => (
                                <li key={index}>
                                    {service}
                                    {/* botón cambiar valor del carrito */}
                                    <button onClick={() => agregarCarrito(producto)}>
                                            Añadir al Carrito
                                        </button>
                                </li>
                            ))}
                        </ul>
                    {/* <p>{producto.type}</p> */}
                    {/* <p>{producto.price}</p> */}
                    <button onClick={() => {
                        setCarrito(carrito.length === 0 ? ["añadir al carrito"] : []);
                    }}>
                        Cambiar valor del carrito: {carrito.length > 0 ? "eliminar del carrito" : "añadir al carrito"}
                    </button>
                    </div>
                    </li>
                    ))}
                </li>
            </ul>
            </>
    
    );
}
 
export default Catalogo;