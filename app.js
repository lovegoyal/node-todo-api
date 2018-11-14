console.log('starting app.js');

const fs=require('fs');
const _=require('lodash');
const yargs=require('yargs');

const notes=require('./notes.js')
 
const argv = yargs.argv;
var command = argv._[0];
console.log('process',process.argv);
console.log('yargs',argv);

console.log('command: ',command);

if(command==='add')
{
    var note = notes.addNote(argv.title,argv.body);
    if(note)
    {
    console.log("note added sucessfully");
    console.log('---');
    console.log('title :'+ note.title);
    }
    else
    console.log("note title already in use");
}
else if(command==='list')
{
 var allNotes = notes.getAll();
 console.log('printing '+allNotes.length+ ' notes');
 allNotes.forEach( (note)=> {
    console.log('title :'+ note.title);
    console.log('body :'+note.body);
  
 });
}
else if(command==='read')
{
var note= notes.readNote(argv.title);
if(note)
{
    console.log('note found');
    console.log('---');
    console.log('title :'+ note.title);
    console.log('body :'+note.body);

}
else
    console.log("note title not found");
}
else if(command==='remove')
{
   var note=notes.removeNote(argv.title);
   if(note)
   {
       console.log('note removed');
   }
   else
   {
       console.log('note not found');
   }
}
else
{
    console.log('command note found');
}