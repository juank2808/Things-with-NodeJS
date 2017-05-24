var express = require("express");
var app = express();

app.set("view engine", "jade");
app.get("/", function(req, res){
    res.render("index",{hola: "Hola juan"});
    console.log("Server on");
});

app.listen(8080);