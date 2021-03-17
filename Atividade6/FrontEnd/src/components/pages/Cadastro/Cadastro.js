import { Navegador } from "../../commom/Navegador/Navegador";
import { useForm } from "react-hook-form"

function FormularioCadastro(){

    const { register, handleSubmit} = useForm(); 

    const Submit = (data) =>{console.log(data)}
    return(
        <form onSubmit={handleSubmit(Submit)}>
            Nome: <input name="nome" type="text" placeholder="Nome" ref={register}/> <br/>
            Email: <input name="email" type="text"placeholder="Email"ref={register}/> <br/>
            Senha: <input name="senha" type="password"placeholder="Senha"ref={register}/> <br/>
            <button type="submit">Enviar </button>
        </form>
    )
}

export function Cadastro(){
    return(
        <div>
            <Navegador></Navegador>
            <FormularioCadastro></FormularioCadastro>

        </div>
    );
}