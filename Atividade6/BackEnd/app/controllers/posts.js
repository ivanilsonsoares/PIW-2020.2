const Post = require('../models/post');
const ComentariosModels = require('../models/Comentario');
const Views = require('../views/posts');
const jwt = require("jsonwebtoken");
const { findOne } = require('../models/post');

module.exports.listarPost = function (req, res) {
    let token = req.headers.token;
    let payload = jwt.decode(token);
    let usuario_logado = payload.id;
    let promise = Post.find({ usuario: usuario_logado }).exec();
    promise.then(function (post) {
        res.status(200).json(Views.renderMany(post));
    }).catch(function (error) {
        res.status(500).json({ mensagem: "Deu pau..." })
    });
}

module.exports.buscarostPorId = function (req, res) {
    let id = req.params.id;
    let promise = Post.findById(id).exec();
    promise.then(function (post) {
        res.status(200).json(Views.render(post));
    }).catch(function (error) {
        res.status(500).json({ mensagem: "Deu pau..." })
    });

}

module.exports.buscarostPorIdUsuario = function (req, res) {
    let id = req.params.usuario;
    let promise = Post.findById(id).exec();
    promise.then(function (post) {
        res.status(200).json(Views.render(post));
    }).catch(function (error) {
        res.status(500).json({ mensagem: "Deu pau..." })
    });

}

module.exports.inserirPost = function (req, res) {
    let token = req.headers.token;
    let payload = jwt.decode(token);
    let usuario_logado = payload.id;
    let postFim = {
        texto: req.body.texto,
        likes: req.body.likes,
        usuario: usuario_logado
    }
    let promisse = Post.create(postFim);
    promisse.then(function (post) {
        res.status(201).json(Views.render(post));
    }).catch(function (error) {
        console.log(postFim)
    })

}

module.exports.removerPost = function (req, res) {
    let id = req.params.id;
    let token = req.headers.token;
    let payload = jwt.decode(token);
    let usuario_logado = payload.id;

    let promise = Post.findOneAndDelete({_id: id, usuario:usuario_logado});
    promise.then(function (post) {
        if(post == null){
            res.status(500).json({mensagem:"Deu pau...1"})
        }else{
            res.status(200).json(Views.render(post));
        }
    }).catch(function (error) {
        res.status(500).json({ mensagem: "Deu pau..." })
    });
}

module.exports.obterComentarios = function (req, res) {
    let id = req.params.id;
    let promise = ComentariosModels.find({ post: id }).populate("comentarios").exec();
    promise.then(function (posts) {
        res.status(200).json(Views.renderMany(posts));
    }).catch(function (error) {
        res.status(500).json({ mensagem: "Deu ruim" })
    })
}