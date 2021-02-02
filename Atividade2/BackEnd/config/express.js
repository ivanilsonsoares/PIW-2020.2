const express = require('express');
const routsUsuario = require("../app/routes/usuarios");
const routsPost = require("../app/routes/posts");
const routsComentarios = require("../app/routes/comentarios");
const bodyParser = require('body-parser');
 
module.exports = function(){
    let app = express();
    app.set("port", 8000);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(express.static('./public'));
    routsUsuario(app);
    routsPost(app);
    routsComentarios(app);
    return app;
}
