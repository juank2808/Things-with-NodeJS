var http = require("http"),
    fs = require("fs"),
    parser = require("./params_parser.js");

var p = parser.parse;
http.createServer(function(request, response) {
    
    if(request.url.indexOf("favicon.ico")>0){
        return;
    }
    var html= fs.readFile("form.html",function(err,html){
        var html_string = html.toString();
        var vars = html_string.match(/[^\{\}]+(?=\})/g);
        var nombre ="";
      
        var params= p(request)
            
        for (var i = vars.length - 1;i>=0;i--){
            var variable = vars[i];
            html_string=html_string.replace("{"+vars[i]+"}",params[variable]);
        };
        response.writeHead(200,{"Content-Type": "text/html"})//enviar cabecera de la respuesta contentype es el tipo de texto que está leyendo
        response.write(html_string);//envia partes de la respuesta
        response.end();
    });
}).listen(8080);