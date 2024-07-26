// Sección catálogo
// import { useState } from 'react'
import {useState, useEffect} from 'react';
import Producto from './Producto';

// sfc
const Catalogo = () => {
    const [productos, setProductos] = useState([]);
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
                {productos.map((producto => 
                    <li key={producto.name}><h3>{producto.name}</h3>
                    </li>))}
            </ul>
            
            </>
    
    );
}
 
export default Catalogo;