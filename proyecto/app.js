var express = require("express");
var bodyParser = require("body-parser");
// var user = exports("./models/userModel").User;
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var app = express();

mongoose.connect('mongodb://juankcol-things-with-nodejs-4895831/proyecto-nodejs');

// password confirmation DEBERIA IR EN EL MODELO
var valores_poss=["M","F"];
var email_match=["^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$",""]
var user_schema = new Schema({
    
    // name: {Type:String},
    username: {type:'String',required:"nombre requerido",maxlength:[50,"Nombre d eusuario muy extenso"]},
    password : {type:'String',required:"nombre requeriido",minlength:[8,"El password tiene que ser mayor de 8 caracteres"]},
    age: {type:Number, min:[5,"Edad no puede se rmenor que 5"], max:[100,"Edad no puede ser mayor de 100"]},
    email : {type : String, required: "Email requerido",match:email_match},
    date_of_bith: Date,
    sex:{Type:String, enum:valores_poss,}
    });
    
user_schema.virtual("password_confirmation").get(function(){
    return this.p_c;    
    }).set(function(password){
        this.p_c=password;
        });
        
        
var User = mongoose.model("User",user_schema);
/** fin del password confirmation**/


app.use("/static",express.static('public'));//middleware que sirve archivos estaticos
app.use("/staticjs",express.static('assets'));//prafijos por si existe algun conflicto en las rutas

app.use(bodyParser.json());//lee las peticiones json
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "jade");

app.get("/", function(req, res){
    res.render("index");
    console.log("Server on");
});
app.get("/login", function(req,res){
        User.find(function(){
                console.log(User.find());
            });
        
        res.render("login");
});
app.post("/users",function(req, res){
    
    var user = new User({email: req.body.email,
    password: req.body.password,password_confirmation:req.body.password_confirmation});
    console.log(user.password_confirmation);
    console.log(req.body.password);
    console.log(req.body.email);
    
    user.save(function(err){
        if(err){
            console.log(String(err))
            }
        });
    
    });
app.listen(8080);