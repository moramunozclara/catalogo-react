// Sección catálogo


// import { useState } from 'react'

import {useState, useEffect} from 'react';

// sfc

const Catalogo = () => {
const [productos, setProductos] = useState([]);
const [filtro, setFiltro] = useState("");
const [errores, setErrores] = useState("");
const [info, setInfo] = useState({
    count: 0,
    next: null,
    prev: null,
    pages: 0
});

    return ( <h1>Estoy en el Catálogo</h1> );
}
 
export default Catalogo;