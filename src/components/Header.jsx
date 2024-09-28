import {Link, NavLink} from 'react-router-dom';
import { useUser } from '../hooks/useUser'


const Header = () => {

    // elementos de mi useUSer
    const {user, logout, login, register} = useUser();


    return ( 
        <>
        {/* <header className="bg-gray-800 text-white w-full"> */}
        <header>
            {/* <nav className="p-2 flex items-center justify-between"> */}
            <nav className='HeaderNav'>

                {/* INICIO / HOME / LOGO DEL SITIO */}
                <NavLink to="/">
                    <h3>Inicio</h3>
                </NavLink>

                <ul className='HeaderUl'>

                    <NavLink to="/catalogo">
                        <li>Catálogo</li>
                    </NavLink>

                    <NavLink to="/carrito">
                        <li>Carrito 🛒</li>
                    </NavLink>

                    <NavLink to="/admin">
                        <li>Admin</li>
                    </NavLink>

                    {/* SALIR: SÓLO SE MUESTRA SI HAY UN USUARIO LOGUEADO:  */}

                    {user && (
                        <>
                            <li>{user.name}</li>     
                            <li><img className='ProfilePictureThumbnail' src={user.image} alt="Foto de perfil" /></li>                 
            

                            <li><button onClick={logout}>Salir</button></li>                 
                        </>
                    )}

                    {/* LOGIN Y REGISTRO: SÓLO ACTIVOS MIENTRAS NO HAY UN USUARIO LOGUEADO:  */}
                    
                    {!user && (
                        <>
                            <NavLink to="/login">
                                <li>Login</li>
                            </NavLink>
                            <NavLink to="/registro">
                                <li>Registro</li>
                            </NavLink>
                        </>
                    )}


                </ul>
            </nav>

        </header>

    
        </>
     );
}
 
export default Header;
