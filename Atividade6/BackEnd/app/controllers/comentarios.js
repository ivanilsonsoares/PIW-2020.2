const { populate } = require('../models/Comentario');
const Comentario = require('../models/Comentario');
const Views = require('../views/comentarios');
const jwt = require('jsonwebtoken');
const { findOne } = require('../models/post');


module.exports.listarComentarios = function (req, res) {
    let promise = Comentario.find().populate("post").populate("usuario").exec();
    promise.then(function (comentario) {
        res.status(200).json(Views.renderMany(comentario));
    }).catch(function (error) {
        res.status(500).json({ mensagem: "Deu pau..." })
    });
}

module.exports.buscarostPorId = function (req, res) {
    let id = req.params.id;
    let promise = Comentario.findById(id).exec();
    promise.then(function (comentario) {
        res.status(200).json(Views.render(comentario));
    }).catch(function (error) {
        res.status(500).json({ mensagem: "Deu pau..." })
    });

}
module.exports.inserirComenetarios = function(req,res){
    let id_post = req.body.post;
    let token = req.headers.token;
    let payload = jwt.decode(token);
    let id_usuario_logado = payload.id;

    let comentarioFim = {
        texto: req.body.texto,
        post: id_post,
        usuario: id_usuario_logado
    }
    
    let promisse =  Comentario.create(comentarioFim);
       
        promisse.then(function(comenetarios){
            res.status(201).json(Views.render(comenetarios));
        }).catch(function(error){
            res.status(400).json({mensagem:"Sua mensagem não foi..."})
        })
    
    }

module.exports.removerComenetarios = function (req, res) {
    let id = req.params.id;
    let token = req.headers.token;
    let payload = jwt.decode(token);
    let usuario_logado = payload.id;

    //let promise = Comentario.findByIdAndRemove(id).exec();
    let promise = Comentario.findOneAndDelete({_id: id, usuario:usuario_logado});

    promise.then(function (comentario) {
        console.log(comentario)
        if(comentario == null){
            res.status(500).json({mensagem:"Deu pau...1"})
        }else{
            res.status(200).json(Views.render(comentario));
        }
    }).catch(function (error) {
        res.status(500).json({ mensagem: "Deu pau..." })
    });
    //promise.then(function (comentario) {
    //    res.status(200).json(Views.render(comentario));
    //}).catch(function (error) {
    //    res.status(500).json({ mensagem: "Deu pau..." })
    //});
}