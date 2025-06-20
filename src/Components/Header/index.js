import { Link } from "react-router-dom";
import Options from "../Options";
import "./header.css";

function Header(){
    return(
        <header>
            <Link to='/' className="lnk">
                <img className="imgs" src='../Imagens/JC-logo.png'/>
            </Link>
            <nav className="DivOptions">
                <Options /> 
            </nav>
        </header>        
    )
}

export default Header;