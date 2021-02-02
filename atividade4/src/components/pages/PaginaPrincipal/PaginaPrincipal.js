import { React } from "react";
import { Navegador } from "../../commom/Navegador/Navegador";

function Conteudo() {
    let posts = [
        {
            nome: "Assunto do dia",
            codigo: "0001"
        },
        {
            nome: "Assunto do dia1",
            codigo: "0002"
        },
        {
            nome: "Assunto do dia1",
            codigo: "0003"
        }
    ];

    // modo 1

    let lista = [];
    for (let i = 0; i < posts.length; i++) {
        lista.push(<li>{posts[i].nome} - {posts[i].codigo} </li>)
    }

    // modo 2
    let listaMap = posts.map(
        (posts) =>
        (<li>
            {posts.nome} - {posts.codigo}
        </li>)
    );

    return (
        <div>
            <ul>
                {lista}
                {listaMap}
            </ul>
        </div>

    )
}

function Cabecalho({ paginaAtual }) {
    return (
        <div>
            <header>
                <h1> Posts</h1>
                <span>Você esta na {paginaAtual}</span>
            </header>
        </div>
    )
}

export function PaginaPrincipal() {
    return (<div>
        <Navegador></Navegador>
        <Cabecalho paginaAtual="página de matricula"></Cabecalho>
        
        <Conteudo></Conteudo>
    </div>
    )
}