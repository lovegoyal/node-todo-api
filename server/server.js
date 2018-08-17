var express = require('express');
var bodyParser = require('body-parser');

//body-parser extract the entire body portion of an incoming request stream and exposes it on req.body . 
//The middleware was a part of Express.js earlier but now you have to install it separately. 
//This body-parser module parses the JSON, buffer, string and URL encoded data submitted using HTTP POST request.

var {mongoose} = require('/Users/lovegoyal/Documents/node-todo-api/db/mongoose.js');
var {Todo} = require('/Users/lovegoyal/Documents/node-todo-api/db/models/todos.js');
var {user} = require('/Users/lovegoyal/Documents/node-todo-api/db/models/Users.js');

var app = express();
app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
   
    var todos = new Todo({
        text:req.body.text
    })
    
    todos.save().then((doc)=>{
        console.log(doc);
        res.send(doc);
    },(e)=>{
        if(e){
            res.send(e);
        }
    })
});

app.listen(3000,()=>{
console.log('started on port 3000');
});