const Usuario = require ('../models/usuarios');
const PostModels = require('../models/post');
const Views = require('../views/usuario');
const bcripy = require('bcrypt');
const jwt = require("jsonwebtoken");
const { hashSync } = require('bcrypt');

module.exports.listarUsuarios = function(req, res){
    let promise = Usuario.find().exec();
    promise.then(function(usuario){
        res.status(200).json(Views.renderMany(usuario));
    }).catch(function(error){
        res.status(500).json({mensagem: "Deu pau..."})
    });
}

module.exports.buscarUsuarioPorId = function(req,res){
    let id = req.params.id;
    let promise = Usuario.findById(id).exec();
    promise.then(function(usuario){
        res.status(200).json(Views.render(usuario));
    }).catch(function(error){
        res.status(500).json({mensagem: "Deu pau..."})
    });
  
}
module.exports.inserirUsuario = function(req,res){
    let usuario = {
        nome: req.body.nome,
        email: req.body.email,
        senha: bcripy.hashSync(req.body.senha, 10)
    };
    let promise =  Usuario.create(usuario);
   
    promise.then(function(usuario){
        res.status(201).json(Views.render(usuario));
    }).catch(function(error){
        res.status(400).json({mensagem:"Sua mensagem não foi..."})
    })

}

module.exports.removerUsuario = function(req, res){
    let id = req.params.id;
    let token = req.headers.token;
    let payload = jwt.decode(token);
    let usuario_logado = payload.id;

    console.log("Url: "+id)
    console.log("usuario: "+ usuario_logado)


    if(usuario_logado == id){
        let promise = Usuario.findByIdAndRemove(id).exec();
        promise.then(function(usuario){
            res.status(200).json(Views.render(usuario));
        }).catch(function(error){
            res.status(500).json({mensagem: "Deu pau..."})
        });
    }else{
        res.status(500).json({mensagem: "Deu pau..."})
    }
   
    
}

module.exports.obterPosts = function(req,res){
     let id = req.params.id;
     let promise = PostModels.find({usuario:id});
     promise.then(function(posts){
         res.status(200).json(posts);
     }).catch(function(error){
         res.status(500).json({mensagem:"Deu ruim"})
     })
}