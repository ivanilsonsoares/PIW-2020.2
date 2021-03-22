function render(post){
    return{
        id: post._id,
        texto: post.texto,
        likes: post.likes,
        usuario: post.usuario
    }
}
module.exports.render = render;

function renderMany(post){
    return post.map(render);
}

module.exports.renderMany = renderMany;