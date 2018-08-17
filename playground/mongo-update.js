const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{

if(err)
{
    return console.log('unable to connect to database');
}
console.log('connected to mongodb server');
// db.collection('Users').findOneAndUpdate({
//     _id: new ObjectID('5b7469f2027f46049d33dc25')
// },{
//    $set:{
//      age:18
//    }
// },{
//     returnOriginal:false
// }).then((result)=>{
//     console.log(result);
// })
db.collection('Users').findOneAndUpdate({
    name:'love'
},{
   $set:{
       name:'love goyal'
   },
   $inc:{
     age:1
   }
},{
    returnOriginal:false
}).then((result)=>{
    console.log(result);
})

db.close();
});