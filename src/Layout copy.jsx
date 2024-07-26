// LAYOUT CON CREATE CONTEXT

//1º sfc
// 2º Import el OUTLET y meterlo en el MAIN
// 3º Import el css
// 4º importar el create context para el tema
// 5ª meter todo el return dentro del context

// import { Outlet } from "react-router-dom";
// import './css/catalogo.css'
// import {createContext, useState} from 'react' 

// export const ModoOscuroContext = createContext("light");



// const Layout = () => {

//     const [tema, setTema] = useState("light");

//     return ( 
//         <ModoOscuroContext.Provider value={tema}>

//         <div>
//             <header>
//                 <nav>
//                     Algo de nav
//                 </nav>
//                 <h1>Proyecto de catálogo con React</h1>
//             </header>

//             <main>
//                 <Outlet/>
//             </main>

//             <button onClick={() => {
//                 setTema(tema=="dark"?"light":"dark");
//             }}>Cambiar tema: {tema} </button>

//         </div>
     
//      </ModoOscuroContext.Provider>
//     )
// }
 
// export default Layout;