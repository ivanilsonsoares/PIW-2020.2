import './Posts.css'
export function Post(props) {
    return (
        <div className="conteudo">
            <div className="conteudo-usuario">
                {props.usuario}
            </div>
            <div className="conteudo-conteudo">
                {props.texto}
            </div>
            <div className="conteudo-likes">
                Likes: {props.likes}
                <div className="likes" >Curtir</div>
            </div>
            <div className="conteudo-comments">
                Comentario
            </div>
            <div className="conteudo-conteudo-comments">
                Olá tudo bem
            </div>
            <div className="conteudo-likes">
                <div className="comments" >
                    <a href="/comentario">Comentar</a>
                </div>
            </div>

        </div>
    )
}