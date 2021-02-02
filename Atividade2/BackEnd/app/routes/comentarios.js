const controller = require("../controllers/comentarios");

module.exports = function(app){
    app.get("/api/comentario", controller.listarComentarios);
    app.get("/api/comentario/:id", controller.buscarostPorId);
    app.post("/api/comentario",controller.inserirComenetarios);
    app.delete("/api/comentario/:id",controller.removerComenetarios);
}