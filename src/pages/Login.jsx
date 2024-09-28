import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Link, NavLink, Routes} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useUser } from '../hooks/useUser';
import {Input} from '../components/FormComponents';


const Login = () => {

    const navigate = useNavigate();

    const { login, user } = useUser(); 


    // __________________________________________
    
        // formData = todos los datos de mi formulario
        const [formData, setFormData] = useState({
            email: "",
            password: "",
        });
        const [errores, setErrores] = useState (null);

    // si entran a /login y ya están logueados, los redirigimos a /home
    useEffect(() => {
        if (user) {  navigate('/');  }
    }, [user]);
    
    // ---------------------------------------


        const handleChange = (e) => {
            const {name, value} = e.target;

            setFormData({ ...formData, [name]:value });

            // setFormData( prevData => ({ ...prevData, [name]: value}));
            // Limpiar error cuando el usuario empieza a escribir/seleccionar
            // setErrores( prevErrores => ({ ...prevErrores, [name]: ""}))
        }

        const handleSubmit = async (e) => {
            e.preventDefault();

            const listaErrores = await login(formData);

            if (listaErrores) { setErrores(listaErrores); }

            else {setErrores(null); }
        }

    
        //     // si existe algún error, guardarlo en errores
        //     // si no, mostrar resultado por consola Y EJECUTAR LOGIN
    
        //     // INFORME DE LOS DATOS EN LA CONSOLA CUANDO NO HAYA ERRORES
        //     if( Object.keys(listaErrores).length === 0 ){
        //         console.log("Datos del formulario:", formData);
                            
        //         // función login para actualizar el estado de 'user'
        //         login(formData)  // Actualiza el estado con los datos del usuario                
        //         .then(() => {
        //             navigate('/catalogo');  // CAMBIO AQUÍ
        //         })
        //         .catch((error) => {
        //             setErrores({ email: "Credenciales inválidas", password: "" });  // CAMBIO AQUÍ
        //         });

        //     } else {
        //         // AVISO EN LA CONSOLA CUANDO HAYA UN ERROR ((NO LO VERÁ EL USUARIO))
        //             console.log("Errores encontrados:", listaErrores);
        //             setErrores(listaErrores);
        //         }
        // }
    


    
    

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

                error={errores}
                required
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
                error={errores}
                required
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