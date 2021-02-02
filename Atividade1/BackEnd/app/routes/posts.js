const controller = require("../controllers/posts");

module.exports = function(app){
    app.get("/api/post", controller.listarPost);
    app.get("/api/post/:id", controller.buscarostPorId);
    app.post("/api/post",controller.inserirPost);
    app.delete("/api/post/:id",controller.removerPost);
}