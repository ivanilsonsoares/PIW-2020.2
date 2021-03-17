const controller = require("../controllers/comentarios");
const controllerAuth = require("../controllers/autenticacao");

module.exports = function(app){
    app.use("/api/comentario", controllerAuth.checar);
    app.get("/api/comentario", controller.listarComentarios);
    app.get("/api/comentario/:id", controller.buscarostPorId);
    app.post("/api/comentario",controller.inserirComenetarios);
    app.delete("/api/comentario/:id",controller.removerComenetarios);
}