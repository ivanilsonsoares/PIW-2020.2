import './FormPostar.css'
// import history from '../../../history'
import { useForm } from "react-hook-form"
import { useState } from 'react';

function ListarCometarios({ info }) {
    return (
        <ul>
            {info.map((info) => (<li>nome: {info.comentario}</li>))}
        </ul>
    );
}

function Comentar({onSubmeter}) {
    const { register, handleSubmit } = useForm();

    const Submit = (comentario) => { onSubmeter(comentario) }
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
    const [info, setMatricula] = useState([
        { comentario: "teste" }
    ]);


    const adicionarComentario = (comentario) => {
        setMatricula([...info,comentario])
    };
    
    return (

        <div className="conteudo">
            <div className="conteudo-usuario">
                Comentario
            </div>
            <Comentar onSubmeter={adicionarComentario}></Comentar>
            <ListarCometarios info={info}></ListarCometarios>
        </div>
    )
}