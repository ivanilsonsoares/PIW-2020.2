import { Post } from "../Posts/Posts";
export function LinhaDoTempo({posts}) {
    
    const listaPosts = posts.map((post) =>
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