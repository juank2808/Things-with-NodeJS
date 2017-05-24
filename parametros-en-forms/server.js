var http = require("http");
    fs = require("fs");
    

http.createServer(function(request, response) {
    
    if(request.url.indexOf("favicon.ico")>0){
        return;
    }
    var html= fs.readFile("form.html",function(err,html){
        var html_string = html.toString();
        
        var array_param=[],params = {};
        var vars = html_string.match(/[^\{\}]+(?=\})/g);
        var nombre ="";
      
        if(request.url.indexOf("?")>0){
            // /?nombre=Juank
            var url_data= request.url.split("?");
            var array_param = url_data[1].split("&");
            // [nombre=juank,data-algo]
        }
        
        for (var i= array_param.length-1;i>=0;i--){
            
            var param =array_param[i];
            //nombre=Juank
            var param_data = param.split("=");
            //[nombre,Juank]
            params[param_data[0]] = [param_data[1]];
            //{nombre : juank}
        };
        
        for (var i = vars.length - 1;i>=0;i--){
            var variable = vars[i];
            html_string=html_string.replace("{"+vars[i]+"}",params[variable]);
        };
        response.writeHead(200,{"Content-Type": "text/html"})//enviar cabecera de la respuesta contentype es el tipo de texto que está leyendo
        response.write(html_string);//envia partes de la respuesta
        response.end();
    });
}).listen(8080);