import './clients.css';
import React, {useEffect} from 'react';

const novoTitulo = "JC Clientes";

function Clientes(){
    useEffect(() => {
    document.title = novoTitulo;
}, [])
    return(
        <h3>total</h3>
    )
}

export default Clientes;