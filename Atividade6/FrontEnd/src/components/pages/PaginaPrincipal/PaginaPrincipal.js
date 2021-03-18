import { React, useContext, useEffect, useState } from "react";
import { ListarPost } from "../../../api/PostApi";
import { AuthContext } from "../../../App";
import { Navegador } from "../../commom/Navegador/Navegador";
import { LinhaDoTempo } from "../LinhaDoTempo/LinhaDoTempo";
export function PaginaPrincipal() {
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
    return (<div>
        <Navegador></Navegador>
        <LinhaDoTempo posts={posts}></LinhaDoTempo>
    </div>
    )
}