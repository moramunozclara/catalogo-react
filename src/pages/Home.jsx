import { useState, useEffect, useContext } from 'react';
import {ModoOscuroContext} from '../Layout'


// sfc

const Home = () => {

    // const [tema, setTema] = useContext(ModoOscuroContext);


    
    return ( <h1>Estoy en Home ({tema})
    </h1> );
}
 
export default Home;