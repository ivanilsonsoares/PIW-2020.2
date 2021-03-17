import LogoImg from '../../commom/Imagens/flooop.png'
import { Link, NavLink } from 'react-router-dom'
import './Navegador.css';
export function Navegador() {
    return (<header className="navegador">
        <div className="logo">
            <img src={LogoImg} alt="logo"></img>   
        </div>

        <div className="opcoes">
            <NavLink exact className="link-navegador" to="/" >Linha do tempo</NavLink>
            <NavLink className="link-navegador" to="/comentario">posts</NavLink>
            <NavLink exact className="link-navegador" to="/cadastro" >Cadastro</NavLink>
            <Link className="usuario">Fulano</Link>
        </div>

    </header>
    )
}