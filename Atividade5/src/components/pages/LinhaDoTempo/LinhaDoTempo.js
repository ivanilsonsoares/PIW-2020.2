import { Post } from "../Posts/Posts";
export function LinhaDoTempo() {
    let infoPosts = {
        listaPosts: [
            {
                id: "01",
                texto: "Teste para ver se esta funcionando",
                likes: "0001",
                usuario: "Soares"
            },
            {
                id: "02",
                texto: "Testando",
                likes: "0010",
                usuario: "Marcos"
            },
            {
                id: "03",
                texto: "testando o sistema",
                likes: "0101",
                usuario: "Sousa"
            },
            {
                id: "04",
                texto: "testando o sistema",
                likes: "0101",
                usuario: "Sousa"
            }
        ]
    }
    const listaPosts = infoPosts.listaPosts.map((post) =>
        <Post
            id={post.id}
            usuario={post.usuario}
            texto={post.texto}
            likes={post.likes}>
        </Post>
    );

    return (
        <div>
            {listaPosts}
        </div>

    )
}