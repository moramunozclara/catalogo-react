// Sección catálogo


// import { useState } from 'react'

import {useState, useEffect} from 'react';

// sfc

const Catalogo = () => {
const [productos, setProductos] = useState();
const [filtro, setFiltro] = useState();
const [errores, setErrores] = useState();


    return ( <h1>Estoy en el Catálogo</h1> );
}
 
export default Catalogo;