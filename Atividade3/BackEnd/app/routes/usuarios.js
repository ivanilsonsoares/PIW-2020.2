const controller = require("../controllers/usuarios");
const controllerAuth = require("../controllers/autenticacao")

module.exports = function(app){
    app.post("/api/usuarios/signin", controllerAuth.logar);
    app.post("/api/usuarios",controller.inserirUsuario);
    app.use("/api/usuarios", controllerAuth.checar);
    app.get("/api/usuarios", controller.listarUsuarios);
    app.get("/api/usuarios/:id", controller.buscarUsuarioPorId);
    app.get("/api/usuarios/:id/post", controller.obterPosts);
    app.delete("/api/usuarios/:id",controller.removerUsuario);
}