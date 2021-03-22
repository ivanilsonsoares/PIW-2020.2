import './Posts.css'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../App';
import { useForm } from "react-hook-form"
import { CriarComentario, ListarComentario } from '../../../api/CometarioApi';
import history from '../../../history';


function ListarCometarios({ comentarios }) {
    return (
        <div>
            <ul>
                {comentarios.map((comentario) => (
                    <li className="conteudo-conteudo-comments">
                        {
                            comentario.usuario.nome + ": " + comentario.texto
                        }
                    </li>))}
            </ul>
        </div>
    );

}

function AdcionarComentario({id,onComentar}) {
    const { register, handleSubmit } = useForm([]);
    const Submit = (comentario) => { onComentar(comentario) };
    // 
    return (
        <form onSubmit={handleSubmit(Submit)}>

            <input name="texto" className="conteudo-edit" type="text" placeholder="digite seu comentario aqui" ref={register} />
            <select name="post" ref={register}>
                <option>{id}</option>
            </select>

            <div className="conteudo-likes">
                <div className="comments" >
                    <button className="button"> Comentar </button>
                </div>
            </div>
        </form>
    )
}

function ComentarioPost({ idPost }) {
    const { token } = useContext(AuthContext)
    const [comentarios, setComentarios] = useState([]);

    const atualizar = () => {
        ListarComentario(idPost, token.token).then(
            (response) => {
                setComentarios(response.data);
            }
        ).catch(
            (error => {
                console.log(error);
            })
        )

    }

    useEffect(() => {
        atualizar();
    }, []);

    const adicionarCometario = (comentario) => {
        CriarComentario(token.token, comentario).then(
            () => {
                atualizar();
                
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        )
    }
    return (
        <div>
            <ListarCometarios comentarios={comentarios}></ListarCometarios>
            <AdcionarComentario id={idPost} onComentar={adicionarCometario}></AdcionarComentario>
        </div>
    );
}

export function Post(props) {
    const [count, setCount] = useState(0);


    const clickButton = () => {
        setCount(count + 1)
    }


    return (
        <div className="conteudo">
            <div className="conteudo-usuario">
                {props.usuario.nome}
            </div>
            <div className="conteudo-conteudo">
                {props.texto}

            </div>
            <div className="conteudo-likes">
                Likes: {count}
                <button className="likes" onClick={clickButton}>Curtir</button>
            </div>
            <ComentarioPost idPost={props.id}></ComentarioPost>
        </div>
    )
}