import { Link } from "react-router-dom";
import "./options.css"

function Options(){
    const rotas = [{
        label: 'Clientes' ,
        to: '/clientes' 
    },
    {
        label: 'Vendedores',
        to: '/vendedores'
    }
]
    return(
    <nav className="Opts">
      {rotas.map((rota, index) => (
        <Link key={index} to={rota.to} className="Opt">
          {rota.label}
        </Link>
      ))}
    </nav>
    )
}

export default Options;