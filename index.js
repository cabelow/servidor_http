var HTTP = require('http');
var URL = require('url');
const Portifolio = require('./Portifolio')

var server = HTTP.createServer().listen(3000);

server.on('request', function (req, res) {
    console.log("Servidor iniciado em http://localhost:3000/");

    const parts = URL.parse(req.url)
    const path = parts.path

    if (path == '/') {
        res.end("Rafael Mello")
    }
    else if (path == '/bio') {
        res.end("Biografia")
    }
    else if (path == '/portifolio') {
        if (req.method == 'GET') {
            let portifolio = []
            portifolio.push(new Portifolio("perfil", "foto do perfil"))
            portifolio.push(new Portifolio("fundo", "foto do fundo"))
            res.end(JSON.stringify(portifolio))
        }
        else if (req.method == 'POST') {
            let corpo = req.body
            console.log(JSON.stringify(corpo))
            res.end("post")
        }
        else {
            res.end("method nao autorizado")
        }
    }
    else {
        res.end("erro 404")
    }

    res.writeHead(200, { "Content-Type": "text/plain" });
})