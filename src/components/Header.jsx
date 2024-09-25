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
            <nav >


                <NavLink to="/">
                    <h3>Inicio</h3>
                </NavLink>

                <ul>
                    <NavLink to="/home">
                        <li>Home</li>
                    </NavLink>
                    <NavLink to="/login">
                        <li>Login</li>
                    </NavLink>
                    <NavLink to="/registro">
                        <li>Registro</li>
                    </NavLink>
                    <NavLink to="/admin">
                        <li>Admin</li>
                    </NavLink>

                    <NavLink to="/carrito">
                        <li>Carrito</li>
                    </NavLink>

                    <NavLink onClick={logout}>
                        <li>SALIR</li>
                    </NavLink>
                </ul>
            </nav>

        </header>

    
        </>
     );
}
 
export default Header;
