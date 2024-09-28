import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './lib/routes'
import { UserProvider } from './hooks/useUser' // contexto de usuario
import { CarritoProvider } from './hooks/useCarrito'; // nuevo archivo





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <UserProvider>

      <CarritoProvider>

        <RouterProvider router={router}/>
        
      </CarritoProvider>

    </UserProvider>
    
  </React.StrictMode>,
)
