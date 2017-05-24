function parse(request){
    var array_param=[],params = {};
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
    return params;
}
module.exports.parse=parse;