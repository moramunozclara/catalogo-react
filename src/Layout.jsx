//1º sfc
// 2º Import el OUTLET y meterlo en el MAIN
// 3º Import el css

import { Outlet } from "react-router-dom";
import './css/catalogo.css'




const Layout = () => {
    return ( 
        <div>
            <header>
                <nav>
                    Algo de nav
                </nav>
                <h1>Proyecto de catálogo con React</h1>
            </header>

            <main>
                <Outlet/>
            </main>
        </div>
     );
}
 
export default Layout;