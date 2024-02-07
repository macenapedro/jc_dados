import "./bones.css"
import { v4 as uuidv4 } from 'uuid';

const Bones = () => {


    return(
        <section className="bones">
            <div className="galeria">
                <img className="galeriaimg" src="./Imagens/bone1.png" alt="Imagem de um boné preto"/>
                <img className="galeriaimg" src="./Imagens/camisa6.png" alt="Imagem de uma camisa preta com estampa nas costas"/>
                <img className="galeriaimg" src="./Imagens/calca.webp" alt="Imagem de uma calça preto" />
                <img className="galeriaimg" src="./Imagens/pulseira.png" alt="Imagem de uma pulseira de prata" />
            </div>
            <h1>Bonés</h1>
            <div className="imgsbones">
                <div className="produtosbones">
                    <img className="bone" src="./Imagens/bone1.png" alt="Imagem de um boné preto"/> 
                    <p>Boné preto, sem estampa. <br/>
                        R$ 39,90<br/>
                        COMPRAR</p>
                </div>
                <div className="produtosbones">
                    <img className="bone" src="./Imagens/bone7.png" alt="Imagem de um boné preto"/>
                    <p>Boné preto, com estampa. <br/>
                        R$ 59,90<br/>
                        COMPRAR</p>
                </div>
                <div className="produtosbones">
                    <img className="bone" src="./Imagens/bone8.png" alt="Imagem de um boné preto"/>
                    <p>Boné preto. <br/>
                        R$ 29,90<br/>
                        COMPRAR</p>
                </div>
                    <div className="produtosbones">
                    <img className="bone" src="./Imagens/bone9.png" alt="Imagem de um boné preto"/>
                    <p>Boné preto. <br/>
                        R$ 25,90<br/>
                        COMPRAR</p>
                </div>                
            </div>
        </section>
    )
}

export default Bones