import './App.css';
import Clients from './Components/Clients';
import Header from "./Components/Header";
import Clientes from "./Components/Clients";
import React, {useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import Sellers from './Components/Sellers';

const novoTitulo = "Vendedores";




function App() {
    useEffect(() => {
    document.title = novoTitulo;
}, [])
    return(
        <main>
            <Router>
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
