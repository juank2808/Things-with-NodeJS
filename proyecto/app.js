var express = require("express");
var app = express();

app.set("view engine", "jade");

app.get("/", function(req, res){
    res.render("index");
    console.log("Server on");
});
app.get("/login", function(req, res){
    res.render("login");
    console.log("Server on");
});

app.listen(8080);