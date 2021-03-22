const http = require("http");
const app = require('./config/express.js')();
const db = require('./config/database.js');

http.createServer(app).listen(app.get('port'), function(){
    console.log('Servidor rodando '+app.get('port'));
});

db('mongodb://localhost/sistema1');
