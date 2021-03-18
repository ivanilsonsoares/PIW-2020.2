import './Posts.css'
import history from '../../../history'
import { useState } from 'react'
export function Post(props) {
    const [count, setCount] = useState(0);
    function click() {
        history.push("/comentario");
    }

    const clickButton= ()=>{
        setCount(count+1)
    }

    return (
        <div className="conteudo">
            <div className="conteudo-usuario">
                {props.usuario}
            </div>
            <div className="conteudo-conteudo">
                {props.texto}
            </div>
            <div className="conteudo-likes">
                Likes: {count}
                <button className="likes" onClick={clickButton}>Curtir</button>
            </div>
            <div className="conteudo-comments">
                Comentarios:
            </div>
            <div className="conteudo-conteudo-comments">
            <h1>Marcos: Olá tudo bem?</h1>
            </div>
            
            <div className="conteudo-conteudo-comments">
            <h1>Paula: Como vc esta?</h1>
   
            </div>
            <input className="conteudo-edit" type="text" placeholder="digite seu comentario aqui"></input>
            <div className="conteudo-likes">
                <div className="comments" >
                <input type="submit" className="button" onClick={click} value="Comentar"></input>
                </div>
            </div>
        </div>
    )
}