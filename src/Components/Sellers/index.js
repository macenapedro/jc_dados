import './sellers.css';
import React, {useEffect} from 'react';
import sellsmen from './sellers.json'

const novoTitulo = 'JC Vendedores'

function Sellers(){
    useEffect(() => {
        document.title = novoTitulo
    })


const todayDates = new Date();
  const months = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];
    return(
        <section className='classSellers'>
            <div className='months'>
                <h3>Nome</h3>
                <h3>{months[todayDates.getMonth()]}</h3>
                <h3>{months[todayDates.getMonth()-1]}</h3>
                <h3>{months[todayDates.getMonth()-2]}</h3>
                <h3>Total</h3>
            </div>
            <div className='sellers'>
                <h3>{sellsmen.name}</h3>
                <h3>{sellsmen.name}</h3>
                <h3>{sellsmen.name}</h3>
                <h3>{sellsmen.name}</h3>
            </div>
        </section>
    )
}

export default Sellers;