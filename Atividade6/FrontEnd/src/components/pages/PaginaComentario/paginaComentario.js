import { React } from "react";
import { Navegador } from "../../commom/Navegador/Navegador";
import { Comentario } from "../../pages/Comentario/FormPostar";

export function PaginaComentario(){
   return(
    <div>
         <Navegador></Navegador>
         <Comentario></Comentario>
    </div>
   )

}