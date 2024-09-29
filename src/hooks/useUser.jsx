// importar contexto
import { createContext, useContext, useState, useEffect } from "react";


// crear un contexto de usuario
const UserContext = createContext();

// crear un provider  y exportarlo para usarlo en main.jsx
//      (funcionalidades para nuestro contexto)
export function UserProvider({children}) {
    
        const [user, setUser] = useState(null);

        const {VITE_API_URL} = import.meta.env;

        // Al cargar la aplicación, intentamos obtener el usuario del localStorage
        useEffect(() => {
            const storedUser = localStorage.getItem('user');
            if (storedUser) {  
                setUser(JSON.parse(storedUser));
            }
        }, []); // Solo corre una vez cuando el componente se monta

/*______________________________________________________________________________*/

        // // LOGIN: Método de login SIMULADO (sin backend)
        // const login = async (userData) => {
        //     // Simular una respuesta exitosa sin hacer un fetch a un backend
        //     const responseData = {                                 
        //         data: { 
        //             email: userData.email, 
        //             name: "Nombre Del Usuario",  // (se simula un nombre)
        //             image: 'https://picsum.photos/200'  //(imagen simulada)
        //         }
        //     };
        
        //     const usuario = responseData.data;
        
        //     // Fijamos nuestro user (simulado)
        //     setUser(usuario);                                      
        //     localStorage.setItem('user', JSON.stringify(usuario));
        
        //     return null; // No hay error
        // };

       
        // LOGIN: Método con FETCH AL BACKEND
        const login = async (userData) => {
            try {
                const response = await fetch(`${VITE_API_URL}/login`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(userData)
                });

                const responseData = await response.json();
        
                if (!response.ok) {
                    return responseData.message; // ('Error en las credenciales')
                }
        
                // 1º extraemos el usuario de la respuesta
                const usuario=responseData.data;

                // 2º fijamos nuestro user
                setUser(usuario);

                // 3º guardamos usuario en LOCALSTORAGE
                localStorage.setItem('user', JSON.stringify(usuario));

                    // 4º Guardamos el JWT token en LocalStorage
                    localStorage.setItem('token', responseData.token);

                return null; // no hay error

            } catch (error) {
                console.error("Error en login:", error); 
                return  "Error en el seervidor";
            }
        };        


        // const register = async (userData) => {

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

/*_______________________________________________________________________________*/

        // REGISTRO:Método con FETCH AL BACKEND
        const register = async (userData) => {

            try {
            // Aquí enviamos los datos a nuestro backend
            // y recibiríamos la respuesta antes de establecer el usuario
    
            const response = await fetch(`${VITE_API_URL}/api/v1/register`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });
            // 1º: parsear la respuesta a JSON
            const responseData = await response.json();
            if (!response.ok) {
                return responseData.message;
            }
    
            // 2º  convertir la respuesta en usuario
            const usuario=responseData.data;
    
            // 3º fijamos el usuario
            setUser(usuario);
    
            // 4º Guardamos el Usuario en LocalStorage
            localStorage.setItem('user', JSON.stringify(usuario));
            
            // Guardamos el JWT token en LocalStorage
            localStorage.setItem('token', responseData.token);
    
            return null; // no hay error
            } catch (error) {
            console.error('Error:', error);
            return "Error en el servidor";
            }
        };


        // Método para obtener usuarios
        const fetchUsers = async () => {
            try {
                const token = localStorage.getItem('token'); // Obtiene el token del localStorage
                const response = await fetch(`${VITE_API_URL}/api/v1/users`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`, // Incluye el token en la cabecera
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error('Error al obtener usuarios');
                }

                const usersData = await response.json(); // Analiza la respuesta a JSON
                return usersData; // Retorna la lista de usuarios
            } catch (error) {
                console.error('Error en fetchUsers:', error);
                return null; // O maneja el error como desees
            }
        };

        const logout = () => {
            console.log("Estoy en salir");

            setUser(null);                      // borrar el user fijado
            localStorage.removeItem("user");    // borrar item user
            localStorage.removeItem("token");    // borrar token user

        }

 return (
        <UserContext.Provider value={{user, login, register, logout, fetchUsers}}>
        {children}
        </UserContext.Provider>
 );
}

//  crear un Custom Hook para usar nuestro contexto de usuario
// se exporta para poder usarlo desde cualquier componente
export function useUser() {

    return useContext(UserContext);

}