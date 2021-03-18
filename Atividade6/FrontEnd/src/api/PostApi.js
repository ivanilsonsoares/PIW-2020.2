import axios from "axios";

export function ListarPost(token){
    return axios({
        method:"GET",
        url:"http://localhost:8000/api/post",
        headers:{
            "token": token,
        }
    })
}

export function CriarPost(token, post){
    return(
        axios({
            method: "POST",
            url: "http://localhost:8000/api/post",
            headers:{
                "token": token,
            },
            data:post
        })
    );
}