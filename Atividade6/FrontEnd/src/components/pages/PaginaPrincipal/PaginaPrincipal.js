import { React } from "react";
import { Navegador } from "../../commom/Navegador/Navegador";
import { LinhaDoTempo } from "../LinhaDoTempo/LinhaDoTempo";
export function PaginaPrincipal() {
    return (<div>
        <Navegador></Navegador>
        <LinhaDoTempo></LinhaDoTempo>
    </div>
    )
}