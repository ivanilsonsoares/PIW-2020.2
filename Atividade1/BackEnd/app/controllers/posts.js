let posts = [
    {id: "1", text:"vamos lá", likes:"1"},
    {id: "2", text:"Oi, tudo bem?", likes:"10"},
    {id: "3", text:"teste", likes:"10000"},
]


module.exports.listarPost = function(req, res){
res.json(posts);
}

module.exports.buscarostPorId = function(req,res){
let id = req.params.id;
let post = posts.find(function(post){return post.id == id;});
if(post){
    res.json(post);
}else{
    res.status(404).json({mensagem:"post nao encontrado"});
}

}
module.exports.inserirPost = function(req,res){
let post = req.body;
posts.push(post);
res.status(201).json(post);

}

module.exports.removerPost = function(req, res){
let id = req.params.id;
posts = posts.filter(function(post){return post.id!=id});
res.json({mensagem:"Post removido"});
}