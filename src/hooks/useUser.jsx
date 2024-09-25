// importar contexto
import { createContext, useContext, useState, useEffect } from "react";

// crear un contexto de usuario
const UserContext = createContext();

// crear un provider  y exportarlo para usarlo en main.jsx
//      (funcionalidades para nuestro contexto)
export function UserProvider({children}) {
    
        const [user, setUser] = useState(null);

        const login = async (userData) => {
            console.log("Estoy en login");
            setUser(userData);


            const response = await fetch(`${VITE_API_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                    // Authorization
                 },
                 body: JSON.stringify(userData)
            });

            // 1º: parsear la respuesta a JSON
            const responseData = await response.json();
                                    // JSON.parse(response);

                                // 2º: guardar respuesta en localStorage
                                localStorage.setItem("user", JSON.stringify(responseData));
        }


        const register = async (userData) => {
            console.log("Estoy en registro")

            const response = await fetch(`${VITE_API_URL}/registro`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            // 1º: parsear la respuesta a JSON
            const responseData = await response.json();
                                    // JSON.parse(response);

                                // 2º: guardar respuesta en localStorage
                                localStorage.setItem("user", JSON.stringify(responseData));

        };

        
        const logout = () => {
            console.log("Estoy en salir");
            localStorage.removeItem("user");    // borrar item user
            setUser(null);                      // borrar item user



        }

 return (
        <UserContext.Provider value={{user, login, register, logout}}>
        {children}
        </UserContext.Provider>
 );
}

//  crear un Custom Hook para usar nuestro contexto de usuario
// se exporta para poder usarlo desde cualquier componente
export function useUser() {

    return useContext(UserContext);

}