import { createContext, useContext, useState, useEffect } from "react";

// crear un contexto de usuario
const UserContext = createContext();

// crear un provider  y exportarlo para usarlo en main.jsx
//      (funcionalidades para nuestro contexto)
export function UserProvider({children}) {
    
        const [user, setUser] = useState(null);

        const login = (data) => {
            console.log("Estoy en login");
            setUser(data)
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