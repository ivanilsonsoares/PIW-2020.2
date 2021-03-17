const bcripy = require('bcrypt');
const usuario = require('../models/usuarios.js');
const jwt = require('jsonwebtoken');

module.exports.logar = function(req, res){
    usuario.findOne({email: req.body.email}).exec()
    .then(function(usuario){
        if(bcripy.compareSync(req.body.senha, usuario.senha)){
            let token = jwt.sign({id: usuario._id}, "senha_secreta");
            res.status(200).json({token:token})
        }else{
            res.status(401).send("credenciais erradas");

        }
    })
    .catch(function(error){
        res.status(401).send("credenciais erradas");
    })
}

module.exports.checar = function(req, res, next){
    let token = req.headers.token;
    jwt.verify(token, "senha_secreta", function(err, decoded){
        if(err){
            res.status(401).send("token invalido");
        }else{
            next()
        }
    });
}