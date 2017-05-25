var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var app = express();
var db = 'mongodb://juankcol-things-with-nodejs-4895831/proyecto-nodejs';
mongoose.connect(db);

var userSchemaJSON = {
    email:String,
    password:String
    };
    
var user_schema = new Schema(userSchemaJSON);
var User = mongoose.model("User",user_schema);

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
        });//si hay error
    res.render("login");
    
});
app.post("/users",function(req, res){
    
    var user = new User({email:req.body.email, password:req.body.password});
    user.save(function(){
        res.send("Datos recibidos");
        });
    
    });
app.listen(8080);