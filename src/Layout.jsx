//1º sfc
// 2º Import el OUTLET y meterlo en el MAIN
// 3º Import el css
import { Outlet, NavLink } from "react-router-dom";
import './css/catalogo.css';
import Header from "./components/Header";


const VITE_API_URL = import.meta.env.VITE_API_URL;


const Layout = () => {


    return ( 

            <div>
                <Header/>
                <main>
                    <Outlet/>
                </main>

            </div>

    );
}
 
export default Layout;