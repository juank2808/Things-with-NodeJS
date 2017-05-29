var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect('mongodb://juankcol-things-with-nodejs-4895831/proyecto-nodejs');

var user_schema = new Schema({
    
    name: String,
    username: String,
    password : String,
    age: Number,
    email : String,
    date_of_bith: Date
    });
    
user_schema.virtual("password_confirmation").get(function(){
    
    return this.p_c;    
    
    }).set(function(password){
        this.p_c=password;
        });

var User = mongoose.model("User",user_schema); //error con los exports
module.export.User = User; 
//NO ESTÁ EN USO