// 1º sfc
// 2º nombrar el error especifico con import use route error
// crear constante de use router error
// 4º crear console log del error


import { useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);

    return ( 
        <div>Ups, tuvimos un error
            <p>
                {/* COMENTAR */}
                { error ?.statusText || error?.message || "Pagina no encontrada|"}
            </p>
        </div>
     );
};
 
export default ErrorPage;