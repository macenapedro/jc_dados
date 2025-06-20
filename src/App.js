import './App.css';
import Clients from './Components/Clients';
import Header from "./Components/Header";
import Clientes from "./Components/Clients";
import React, {useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route, BrowserRouter, useLocation} from 'react-router-dom';
import Sellers from './Components/Sellers';

function NovoTitulo({novoTitulo}){
    const location = useLocation();

    useEffect(() =>{
        if(location.pathname === "/"){
            document.title = "JC Dados";
        }
    },
    [location, novoTitulo]);
    return null;
}
function App() {

    return(
        <main>
            <Router>
                <NovoTitulo novoTitulo="JC Dados" />
                <Header />
                <Routes>
                    <Route path='clientes' element={<Clientes/>} /> 
                    <Route path='Vendedores' element={<Sellers/>} /> 
                </Routes>
        </Router>

        </main>

    )
}

export default App;
