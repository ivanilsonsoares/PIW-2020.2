import { useForm } from "react-hook-form";
import history from "../../../history";
import { Navegador } from "../../commom/Navegador/Navegador";
import { LoginUser } from "../../../api/Auth";
import { useContext } from "react";
import { AuthContext } from "../../../App"


export function FormularioLogin(){
    const {register, handleSubmit} = useForm();
    const auth = useContext(AuthContext);
    const submeter = (login_data) =>{
        LoginUser(login_data).then((response)=>{
            auth.setAuth({token: response.data.token, nome: response.data.nome});
            history.push("/");
        }).catch((error)=>{
            alert(error);
        })
    }
    return(
        <form onSubmit={handleSubmit(submeter)}>
            E-mail: <input type="text" name="email" ref={register}/><br/>
            Senha: <input type="password" name="senha" ref={register}/> <br/>
            <button>Entrar</button>
        </form>
    )
}


export function Login(){
    return(
        <div>
            <Navegador></Navegador>
            <FormularioLogin></FormularioLogin>
        </div>
    );
}