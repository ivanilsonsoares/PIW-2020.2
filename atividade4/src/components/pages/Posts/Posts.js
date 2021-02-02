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
                <button>Curtir</button>
            </div>
        </div>
    )
}