var http = require("http");
    fs = require("fs");
    


http.createServer(function(request, response) {
    
    var html= fs.readFile("index.html",function(err,html){
        
        var html_string = html.toString();
        
        var vars = html_string.match(/[^\{\}]+(?=\})/g);
        var nombre = "Juank";
        for (var i = vars.length - 1;i>=0;i--){
            var value = eval(vars[i]);
            html_string=html_string.replace("{"+vars[i]+"}",value);
        }
        
        
        response.writeHead(200,{"Content-Type": "text/html"})//enviar cabecera de la respuesta contentype es el tipo de texto que está leyendo
        response.write(html_string);//envia partes de la respuesta
        response.end();
    });
}).listen(8080);