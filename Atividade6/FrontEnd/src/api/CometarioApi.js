import axios from "axios";

export function ListarComentario(idPost,token){
    return axios({
        method:"GET",
        url:"http://localhost:8000/api/posts/"+idPost+"/comentarios",
        headers:{
            "token": token,
        }
    })
}

export function CriarComentario(token, comentario){
    return(
        axios({
            method: "POST",
            url: "http://localhost:8000/api/comentario",
            headers:{
                "token": token,
            },
            data:comentario
        })
    );
}