import './FormPostar.css'
import history from '../../../history'
export function Comentario() {
    
    function click() {
        history.push("/");
    }

    return (

        <div className="conteudo">
            <div className="conteudo-usuario">
                Comentario
            </div>
            <input className="conteudo-conteudo" type="text" placeholder="digite seu comentario aqui"></input>
            <div className="conteudo-likes">
                <div className="comments">
                    <input type="submit" className="button" onClick={click} value="Postar"></input>
                </div>
            </div>
        </div>
    )
}