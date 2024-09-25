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
            setUser(userData)


            const response = await fetch(`${VITE_API_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                    // Authorization
                 },
                 body: JSON.stringify(userData)
            });

            const response = await response.json();
                                    JSON.parse(response);

                                    localStorage.setItem("user", JSON.stringify(responseData));









        }
        const register = () => {
            console.log("Estoy en registro")

        }
        const logout = () => {
            console.log("Estoy en salir")

        }

 return (
        <UserContext.Provider value={{user, login, register, logout}}>
        {children}
        </UserContext.Provider>
 )
}

//  crear un Custom Hook para usar nuestro contexto de usuario
// se exporta para poder usarlo desde cualquier componente
export function useUser() {

    return useContext(UserContext);

}