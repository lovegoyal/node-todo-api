const MongoClient  = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{

if(err)
{
    return console.log('unable to connect to database');
}
console.log('connected to mongodb server');

db.collection('Todos').insertOne({
   
    text:'hi this is todo app',
    completed:false
},(err,result)=>{

    if(err){
        console.log('unable to insert todo '+err);
    }
    else{
        console.log(JSON.stringify(result.ops,undefined,2));
    }
})

db.collection('Users').insertOne({
    name:'love',
    age:20,
    location:'yamuna nagar'
},(error,result)=>{
    if(error){
        console.log('unable to insert user'+error);
    }
    else{
      console.log(JSON.stringify(result.ops,undefined,2));
    }
})
db.close();
});