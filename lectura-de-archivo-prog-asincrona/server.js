var http = require("http");
    fs = require("fs");
    


http.createServer(function(request, response) {
    
    var html= fs.readFile("index.html",function(err,html){
        response.writeHead(200,{"Content-Type": "text/html"})//enviar cabecera de la respuesta contentype es el tipo de texto que está leyendo
        response.write(html);//envia partes de la respuesta
        response.end();
    });
}).listen(8080);