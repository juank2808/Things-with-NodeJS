var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var User = require("./models/user");



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
    User.find(function(err,doc){
        console.log(doc);
        res.render("login");
        });//si hay error
    
});
app.post("/users",function(req, res){
    
    var user = new User({email: req.body.email, password: req.body.password, 
                        password_confirmation: req.body.password_confirmation});
    console.log(user.password_confirmation);
    user.save(function(){
        res.send("Datos recibidos");
        });
    
    });
app.listen(8080);