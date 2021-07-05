var HTTP = require('http');
var URL = require('url');
const Portifolio = require('./Portifolio')

var controller = function (req, res) {

    const parts = URL.parse(req.url)
    const path = parts.path

    if (path == '/') {
        res.end("Rafael Mello")
    }
    else if (path == '/bio') {
        res.end("Biografia")
    }
    else if (path == '/portifolio') {
        if (req.method == 'GET'){    
            let portifolio = []
            portifolio.push(new Portifolio("perfil", "foto do perfil"))
            portifolio.push(new Portifolio("fundo", "foto do fundo"))
            res.end(JSON.stringify(portifolio))
        }
        else if (req.method == 'POST'){
            res.end('post')
        }
    }
    else {
        res.end("erro 404")
    }

    res.writeHead(200, { "Content-Type": "text/plain" });
};

var server = HTTP.createServer(controller);

server.listen(3000);
console.log("Servidor iniciado em http://localhost:3000/");