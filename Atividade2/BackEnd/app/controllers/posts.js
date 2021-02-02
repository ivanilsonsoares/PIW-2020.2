const Post = require('../models/post');
const ComentariosModels = require('../models/Comentario');
const Views = require('../views/posts');

module.exports.listarPost = function (req, res) {
    let promise = Post.find().populate("usuario").exec();
    promise.then(function(post){
        res.status(200).json(Views.renderMany(post));
    }).catch(function(error){
        res.status(500).json({mensagem: "Deu pau..."})
    });
}

module.exports.buscarostPorId = function (req, res) {
    let id = req.params.id;
    let promise = Post.findById(id).exec();
    promise.then(function(post){
        res.status(200).json(Views.render(post));
    }).catch(function(error){
        res.status(500).json({mensagem: "Deu pau..."})
    });

}

module.exports.buscarostPorIdUsuario = function (req, res) {
    let id = req.params.usuario;
    let promise = Post.findById(id).exec();
    promise.then(function(post){
        res.status(200).json(Views.render(post));
    }).catch(function(error){
        res.status(500).json({mensagem: "Deu pau..."})
    });

}

module.exports.inserirPost = function (req, res) {
    let post = req.body;
    let promisse = Post.create(post);

    promisse.then(function (post) {
        res.status(201).json(Views.render(post));
    }).catch(function (error) {
        res.status(400).json({ mensagem: "Sua mensagem não foi..." })
    })

}

module.exports.removerPost = function (req, res) {
    let id = req.params.id;
    let promise = Post.findByIdAndRemove(id).exec();
    promise.then(function(post){
        res.status(200).json(Views.render(post));
    }).catch(function(error){
        res.status(500).json({mensagem: "Deu pau..."})
    });
}

module.exports.obterComentarios = function(req,res){
    let id = req.params.id;
    let promise = ComentariosModels.find({post:id}).populate("comentarios").exec();
    promise.then(function(posts){
        res.status(200).json(Views.renderMany(posts));
    }).catch(function(error){
        res.status(500).json({mensagem:"Deu ruim"})
    })
}