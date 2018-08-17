var mongoose = require('mongoose');

var user = mongoose.model(('user'),{

    email:{
        type:String,
        minLength:1,
        required:true,
        trim:true
     },
     password:{
        required:true,
        minLength:1,
        type:String
     }
 });

 module.exports = {user};