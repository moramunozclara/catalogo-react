//1º sfc
//2º importar params
//3ºcrear constante antes del return para extraer elementos del useParams

// UseParams: es para obtener parámetros de la URL
import { useParams } from "react-router-dom";

import {useState, useEffect} from 'react';


const Producto = () => {

    const { productoId } = useParams();
    const [productos, setProductos] = useState([]);


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
            <h2>Estoy en la pág. individual de Producto {productoId}</h2>
            <ul>
                {productos.map((producto => 
                    <li key={producto.name}><h3>{producto.name}</h3>
                    </li>))}
            </ul>
            
            </>

    
    
    );
}
 
export default Producto;

