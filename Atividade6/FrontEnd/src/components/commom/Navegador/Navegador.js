import LogoImg from '../../commom/Imagens/flooop.png'
import { NavLink } from 'react-router-dom'
import './Navegador.css';
import { useContext } from 'react';
import { AuthContext } from '../../../App';

function NavegadorLogado({ nome }) {
    const {setAuth} = useContext(AuthContext);
    return (<header className="navegador">
        <div className="logo">
            <img src={LogoImg} alt="logo"></img>
        </div>

        <div className="opcoes">
            <NavLink exact className="link-navegador" to="/" >Linha do tempo</NavLink>
            <NavLink className="link-navegador" to="/comentario">Posts</NavLink>
            <span className="link-navegador" 
            onClick={()=>{setAuth({token:null, nome:null})}}>
                Logout
                </span>

            <span className="usuario">{nome}</span>
        </div>

    </header>
    )
}

function NavegadorNaoLogado() {
    return (<header className="navegador">
        <div className="logo">
            <img src={LogoImg} alt="logo"></img>
        </div>

        <div className="opcoes">
            <NavLink className="link-navegador" to="/cadastro">Cadastro</NavLink>
            <NavLink className="link-navegador" to="/login">Login</NavLink>

        </div>

    </header>
    )

}


export function Navegador() {
    const { token } = useContext(AuthContext);
    return (
        <div>
            {
                token.token == null ?
                    <NavegadorNaoLogado></NavegadorNaoLogado> :
                    <NavegadorLogado nome={token.nome}></NavegadorLogado>
            }
        </div>

    )
}