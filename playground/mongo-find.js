//const MongoClient  = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{

if(err)
{
    return console.log('unable to connect to database');
}
console.log('connected to mongodb server');
db.collection('Users').find({
    name:'love'
}).toArray().then((docs)=>{
console.log('Todos');
console.log(JSON.stringify(docs,undefined,2));
},(error)=>{

    if(error){
        console.log('unable to connect to todos'+error);
    }
})
// db.collection('Todos').count().then((count)=>{
// console.log(`Total no of todos : ${count}`);
// },(error)=>{

//     if(error){
//         console.log('unable to connect to todos'+error);
//     }
// })

db.close();
});