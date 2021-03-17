const controller = require("../controllers/posts");
const controllerAuth = require("../controllers/autenticacao");

module.exports = function(app){
    app.use("/api/post", controllerAuth.checar);
    app.get("/api/post", controller.listarPost);
    app.get("/api/post/:id", controller.buscarostPorId);
    app.get("/api/posts/:id/comentarios", controller.obterComentarios);
    app.post("/api/post",controller.inserirPost);
    app.delete("/api/post/:id",controller.removerPost);
}