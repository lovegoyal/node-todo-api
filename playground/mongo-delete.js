const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{

if(err)
{
    return console.log('unable to connect to database');
}
console.log('connected to mongodb server');
// db.collection('Todos').deleteMany({
//     text:'hi this is todo app'
// }).then((docs)=>{
// console.log('Todos');
// console.log(JSON.stringify(docs,undefined,2));
// },(error)=>{

//     if(error){
//         console.log('unable to connect to todos'+error);
//     }
//     db.collection('Users').deleteOne({
//         name:'love'
//     }).then((docs)=>{
//     console.log('Todos');
//     console.log(JSON.stringify(docs,undefined,2));
//     },(error)=>{
    
//         if(error){
//             console.log('unable to connect to todos'+error);
//         }
// })

db.collection('Users').findOneAndDelete({
            _id : 123
        }).then((docs)=>{
        console.log('Todos');
        console.log(JSON.stringify(docs,undefined,2));
        },(error)=>{
        
            if(error){
                console.log('unable to connect to todos'+error);
            }
    })


db.close();
});