import './FormPostar.css'
// import history from '../../../history'
import { useForm } from "react-hook-form"
import { useContext, useState } from 'react';
import { CriarPost } from '../../../api/PostApi';
import { AuthContext } from "../../../App";

function ListarCometarios({ info }) {
    return (
        <ul>
            {info.map((info) => (<li>nome: {info.comentario}</li>))}
        </ul>
    );
}

function Comentar() {
    const { register, handleSubmit } = useForm([]);
    const { token } = useContext(AuthContext);
    

    const Submit = (post) => {
        CriarPost(token, post).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
        
        console.log(token)
        console.log(post)
    };
    return (
        <form onSubmit={handleSubmit(Submit)}>
            <input name="comentario" className="conteudo-conteudo" type="text" placeholder="digite seu comentario aqui" ref={register} />
            <div className="conteudo-likes">
                <div className="comments">
                    <button className="button">Postar</button>
                </div>

            </div>
        </form>
    );
}


export function Comentario() {
    

    // function click() {
    //     history.push("/");

    // }
    const [info, setMatricula] = useState([]);


    const adicionarComentario = (comentario) => {
        setMatricula([...info,comentario])
    };
    
    
    return (

        <div className="conteudo">
            <div className="conteudo-usuario">
                Post
            </div>
            <Comentar></Comentar>
            <ListarCometarios info={info}></ListarCometarios>
        </div>
    )
}