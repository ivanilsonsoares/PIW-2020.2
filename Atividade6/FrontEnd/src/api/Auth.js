import axios from "axios";

export function LoginUser(login_data){
    return(
        axios({
            method:"POST",
            url:"http://localhost:8000/api/usuarios/signin",
            data: login_data,
        })
    );
}

export function CadastroUser(usuario){
    return(
        axios({
            method: "POST",
            url: "http://localhost:8000/api/usuarios",
            data: usuario,
        })
    );
}