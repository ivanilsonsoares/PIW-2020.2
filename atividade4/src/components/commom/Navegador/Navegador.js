export function Navegador() {
    let Link = (props) =>(
        <a className="link-navegador" href="http://globo.com">{props.linkTexto}</a>
    );
    return (
        <div className="div-nav">
            <nav className="navegador">
                <Link linkTexto="Logo"></Link>
                <Link linkTexto="Linha do tempo"></Link>
                <Link linkTexto="Posts"></Link>
                <Link linkTexto="Sobre"></Link>
            </nav>
        </div>
    )
}