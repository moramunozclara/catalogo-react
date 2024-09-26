// importar contexto
import { createContext, useContext, useState, useEffect } from "react";

const VITE_API_URL = import.meta.env.VITE_API_URL;  // CAMBIO AQUÍ


// crear un contexto de usuario
const UserContext = createContext();

// crear un provider  y exportarlo para usarlo en main.jsx
//      (funcionalidades para nuestro contexto)
export function UserProvider({children}) {
    
        const [user, setUser] = useState(null);





        // Al cargar la aplicación, intentamos obtener el usuario del localStorage
        useEffect(() => {  // CAMBIO AQUÍ
            const storedUser = localStorage.getItem('user');  // CAMBIO AQUÍ
            if (storedUser) {  
                setUser(JSON.parse(storedUser));  // CAMBIO AQUÍ
            }
        }, []); // Solo corre una vez cuando el componente se monta




        // const login = async (userData) => {
        //     console.log("Estoy en login");
        //     setUser(userData);                  // Guardar usuario en estado local


        //     const response = await fetch(`${VITE_API_URL}/login`, {
        //         method: 'POST',
        //         headers: {
        //             'Content-type': 'application/json'
        //             // Authorization
        //          },
        //          body: JSON.stringify(userData)
        //     });

        //     // 1º: parsear la respuesta a JSON
        //     const responseData = await response.json();
        //                             // JSON.parse(response);

        //                         // 2º: guardar respuesta en localStorage
        //                         localStorage.setItem("user", JSON.stringify(responseData));
        // }

// 2º metodo
       
        // OK
        const login = async (userData) => {
            try {
                const response = await fetch(`${VITE_API_URL}/login`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(userData)
                });
        
                if (!response.ok) {
                    throw new Error('Error en las credenciales');  // CAMBIO AQUÍ
                }
        
                const responseData = await response.json();  // CAMBIO AQUÍ
        
                setUser(responseData);  // CAMBIO AQUÍ
                localStorage.setItem("user", JSON.stringify(responseData));  // CAMBIO AQUÍ
            } catch (error) {
                console.error("Error en login:", error);  // CAMBIO AQUÍ
                throw error;  // CAMBIO AQUÍ
            }
        };        


        // const register = async (userData) => {
        //     console.log("Estoy en registro")

        //     const response = await fetch(`${VITE_API_URL}/registro`, {
        //         method: 'POST',
        //         headers: {
        //             'Content-type': 'application/json'
        //         },
        //         body: JSON.stringify(userData)
        //     });

        //     // 1º: parsear la respuesta a JSON
        //     const responseData = await response.json();
        //                             // JSON.parse(response);

        //                         // 2º: guardar respuesta en localStorage
        //                         localStorage.setItem("user", JSON.stringify(responseData));

        // };

        // 2ª opción REGISTER
        const register = (userData) => {  // CAMBIO AQUÍ
            console.log("Estoy en registro");
            setUser(userData);  // CAMBIO AQUÍ
            localStorage.setItem('user', JSON.stringify(userData));  // CAMBIO AQUÍ
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