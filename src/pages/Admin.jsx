import { useUser } from '../hooks/useUser'



const Admin = () => {

const {user} = useUser();

    return user ? children :
                                <>
                                <p>Soy Admin</p>
                                <p className="text-red">No tienes permiso para ver esta página</p>
                                </>

    

   
}
 
export default Admin;