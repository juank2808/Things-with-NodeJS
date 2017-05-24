var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hola parceros");
});

app.listen(8080);