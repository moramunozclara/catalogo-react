//1º sfc
//2º importar params
//3ºcrear constante antes del return para extraer elementos del useParams

import './css/index.css'
import './css/catalogo.css'

import { useParams } from "react-router-dom";

const Producto = () => {

    const { productoId } = useParams()

    return ( <h1>Estoy en la pág. individual de Producto {productoId} </h1> );
}
 
export default Producto;