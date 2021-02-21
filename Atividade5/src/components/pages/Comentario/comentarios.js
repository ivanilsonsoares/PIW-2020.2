import './comentarios.css'
export function Comentario() {
    return (
        <div className="conteudo">
            <div className="conteudo-usuario">
                Comentario
            </div>
            <input className="conteudo-conteudo" type="text" placeholder="digite seu comentario aqui"></input>
            <div className="conteudo-likes">
                <div className="comments">
                    <a href="/">Submeter Comentario</a>
                </div>
            </div>

        </div>
    )
}