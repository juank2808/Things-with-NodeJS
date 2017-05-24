var http = require("http");

http.createServer(function(request, response) {
    response.writeHead(200,{"Content-Type": "text/plain"});
    response.write("Hola Juan!");
    console.log("Server On");
    response.end();
}).listen(8080);