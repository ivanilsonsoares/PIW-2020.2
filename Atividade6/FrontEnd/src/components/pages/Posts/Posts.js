import './Posts.css'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../App';
import { useForm } from "react-hook-form"
import { CriarComentario, ListarComentario } from '../../../api/CometarioApi';
import { ListarPost } from '../../../api/PostApi';


function ListarCometarios({ comentarios }) {
    const { token }  = useContext(AuthContext)
    const [posts, setPosts] = useState([]);
   
    useEffect(()=>{
        ListarPost(token.token).then(
            (response) =>{
                setPosts(response.data);
            }
        ).catch(
            (error =>{
                console.log(error);
            })
        )
    },[]);
    console.log("Post");
    console.log(posts);
    console.log("comentarios");
    console.log(comentarios);
    return (
        <div>
            <ul>
                {comentarios.map((comentario) => (
                    <li className="conteudo-conteudo-comments">
                        {
                            comentario.post._id == posts ?
                            comentario.usuario.nome +"|:|"+ comentario.post._id +":"+  comentario.texto :
                            comentario.usuario.nome +":"+ comentario.post._id +":"+  comentario.texto
                        }
                    </li>))}
            </ul>
        </div>
    );

}

function AdcionarComentario({onComentar}){
    const { register, handleSubmit } = useForm([]);
    const Submit = (comentario) => {onComentar(comentario)};
    return(
        <form onSubmit={handleSubmit(Submit)}>
            <input name="texto" className="conteudo-edit" type="text" placeholder="digite seu comentario aqui" ref={register}/>
            <div className="conteudo-likes">
                <div className="comments" >
                    <button className="button"> Comentar </button>
                </div>
            </div>
        </form>
    )
}

function ComentarioPost() {

    const { token }  = useContext(AuthContext)

    const [comentarios, setComentarios] = useState([]);

    useEffect(()=>{
        ListarComentario(token.token).then(
            (response) =>{
                setComentarios(response.data);
            }
        ).catch(
            (error =>{
                console.log(error);
            })
        )
    },[]);

    const adicionarCometario = (comentario) =>{
       CriarComentario(token.token, comentario).then(
           (response) =>{
               console.log(response);
           }
       ).catch(
           (error)=>{
               console.log(error);
           }
       )
    }
    return (
        <div>
            <ListarCometarios comentarios={comentarios}></ListarCometarios>
            <AdcionarComentario onComentar={adicionarCometario}></AdcionarComentario>
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
                {props.usuario}
            </div>
            <div className="conteudo-conteudo">
                {props.texto}
            </div>
            <div className="conteudo-likes">
                Likes: {count}
                <button className="likes" onClick={clickButton}>Curtir</button>
            </div>
            <ComentarioPost></ComentarioPost>
        </div>
    )
}