var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use("/static",express.static('public'));//middleware que sirve archivos estaticos
app.use("/staticjs",express.static('assets'));//prafijos por si existe algun conflicto en las rutas
app.use(bodyParser.json());//lee las peticiones json
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "jade");

app.get("/", function(req, res){
    res.render("index");
    console.log("Server on");
});
app.get("/login", function(req, res){
    res.render("login");
    
});
app.post("/users",function(req, res){
    console.log("email:"+ req.body.email);
    console.log("password:"+ req.body.password);
    res.send("Datos recibidos");
    });
app.listen(8080);