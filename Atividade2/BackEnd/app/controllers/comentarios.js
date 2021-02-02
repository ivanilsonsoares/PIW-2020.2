const { populate } = require('../models/Comentario');
const Comentario = require('../models/Comentario');
const Views = require('../views/comentarios');


module.exports.listarComentarios = function(req, res){
    let promise = Comentario.find().populate("post").populate("usuario").exec();
    promise.then(function(comentario){
        res.status(200).json(Views.renderMany(comentario));
    }).catch(function(error){
        res.status(500).json({mensagem: "Deu pau..."})
    });
}

module.exports.buscarostPorId = function(req,res){
    let id = req.params.id;
    let promise = Comentario.findById(id).exec();
    promise.then(function(comentario){
        res.status(200).json(Views.render(comentario));
    }).catch(function(error){
        res.status(500).json({mensagem: "Deu pau..."})
    });

}
module.exports.inserirComenetarios = function(req,res){
let comenetarios = req.body;
let promisse =  Comentario.create(comenetarios);
   
    promisse.then(function(comenetarios){
        res.status(201).json(Views.render(comenetarios));
    }).catch(function(error){
        res.status(400).json({mensagem:"Sua mensagem não foi..."})
    })

}

module.exports.removerComenetarios = function(req, res){
    let id = req.params.id;
    let promise = Comentario.findByIdAndRemove(id).exec();
    promise.then(function(comentario){
        res.status(200).json(Views.render(comentario));
    }).catch(function(error){
        res.status(500).json({mensagem: "Deu pau..."})
    });
}