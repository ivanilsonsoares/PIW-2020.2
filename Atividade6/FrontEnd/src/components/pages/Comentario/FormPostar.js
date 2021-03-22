import './FormPostar.css'
// import history from '../../../history'
import { useForm } from "react-hook-form"
import { useContext} from 'react';
import { CriarPost } from '../../../api/PostApi';
import { AuthContext } from "../../../App";
import history from '../../../history';

function Comentar({onSubmeter}) {
    const { register, handleSubmit } = useForm([]);
    const Submit = (post) => {onSubmeter(post)};
    return (
        <form onSubmit={handleSubmit(Submit)}>
            <input name="texto" className="conteudo-conteudo" type="text" placeholder="digite seu comentario aqui" ref={register} />
            <div className="conteudo-likes">
                <div className="comments">
                    <button className="button" >Postar</button>
                </div>

            </div>
        </form>
    );
}

export function Comentario() {
    const { token } = useContext(AuthContext);

    const adicionarComentario = (post) => {
        CriarPost(token.token, post).then(
            (response) =>{
                console.log(response);
                history.push("/");
            }
        ).catch(
            (error)=>{
                console.log(error)
                
            }
        )
    };
    
    return (

        <div className="conteudo">
            <div className="conteudo-usuario">
                Post
            </div>
            <Comentar onSubmeter={adicionarComentario}></Comentar>
        </div>
    )
}