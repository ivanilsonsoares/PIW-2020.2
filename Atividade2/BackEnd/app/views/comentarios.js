function render(comentario){
    return{
        id: comentario._id,
        texto: comentario.texto,
        id_usaurio: comentario.usuario,
        id_post: comentario.post,
        
    }
}
module.exports.render = render;

function renderMany(comentario){
    return comentario.map(render);
}

module.exports.renderMany = renderMany;