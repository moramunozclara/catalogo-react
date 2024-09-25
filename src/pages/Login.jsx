import { useState } from 'react';


import {Input} from '../components/FormComponents';

import {BrowserRouter as Router, Route, Link, NavLink, Routes} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import { useUser } from '../hooks/useUser';



const Login = () => {

    const navigate = useNavigate();

    // __________________________________________
    
        // formData = todos los datos de mi formulario
        const [formData, setFormData] = useState({
            email: "",
            password: "",
        });
        const [errores, setErrores] = useState ({});
    
    // ---------------------------------------

        const handleSubmit = (e) => {
            e.preventDefault();
            const listaErrores = validateLoginForm();
    
            // si existe algún error, guardarlo en errores
            // si no, mostrar resultado por consola
    
            // INFORME DE LOS DATOS EN LA CONSOLA CUANDO NO HAYA ERRORES
            if( Object.keys(listaErrores).length === 0 ){
                console.log("Datos del formulario:", formData);
            } else {
            // AVISO EN LA CONSOLA CUANDO HAYA UN ERROR ((NO LO VERÁ EL USUARIO))
                console.log("Errores encontrados:", listaErrores);
                setErrores(listaErrores);
            }
        }
    
        const handleChange = (e) => {
            let {name, value} = e.target;
    

            if(e.target.type == "checkbox"){
                value = e.target.checked;
                console.log("Checkbox value es:", value);
            }
    
            setFormData({ ...formData, [name]:value });

            // setFormData( prevData => ({ ...prevData, [name]: value}));
            // Limpiar error cuando el usuario empieza a escribir/seleccionar
            // setErrores( prevErrores => ({ ...prevErrores, [name]: ""}))
    
        }

        const validateLoginForm = () => {
            const objetoErrores = {};
            // hacer nuestras comprobaciones.
            if(!formData.user) objetoErrores.user="Debes ingresar un usuario";
            if(!formData.password) objetoErrores.password="Debes ingresar una contraseña";    
    
            else { navigate('/catalogo') }
            return objetoErrores;
        }
    

        // const {login, user}=useUser();
    
    return ( 
        <>
            <h2>Inicio de sesión</h2>

            <form onSubmit={handleSubmit}>

            {/* input de User / Usuario */}
            <Input 
                name="email"
                label="Correo electrónico:" // en español (es la parte visible)
                type="email"
                autocomplete="email"

                value={formData.email}
                onChange={handleChange}

                error={errores.email}
                className="textRed"
                // debug={true}
            />

            {/* input de Password / Contraseña  */}
            <Input 
                name="password"
                label="Contraseña" // en español (es la parte visible)
                type="password"
                autocomplete="current-password"
                
                value={formData.password}
                onChange={handleChange}
                error={errores.password}
                //debug={true}
            />

            <button type="submit">Iniciar sesión</button>
            </form>


            <p>¿No tienes cuenta? 
                <strong>
                    <Link to={`/registro`}> Regístrate ahora</Link>
                </strong>
            </p>
            
        </>
     );
}
 
export default Login;