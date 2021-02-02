import LogoImg from '../../commom/Imagens/flooop.png'
export function Navegador() {
    let Link = (props) => (
        <a className="link-navegador" href="http://globo.com">{props.linkTexto}</a>
    );
    return (<header className="navegador">
        <div className="logo">
            <img src={LogoImg} alt="logo"></img>   
        </div>

        <div className="opcoes">
            <a className="active" href="http://globo.com" >Linha do tempo</a>
            <Link linkTexto="posts"></Link>
        </div>

    </header>
    )
}