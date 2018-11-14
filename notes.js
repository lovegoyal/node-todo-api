console.log('starting notes.js')

const fs = require('fs');

var fetchNotes = ()=>{
    try{
        var text=fs.readFileSync('notes-data.json');
        return JSON.parse(text);
    
           } 
           catch(e){
            
            return [];
               
           }
        
  }
var saveNotes =(notes)=>{
   
    fs.writeFileSync('notes-data.json',JSON.stringify(notes)); 
}

var addNote = (title,body)=>{
  var notes=[];
  var note = {
  title:title,
  body:body
  };
  notes=fetchNotes();
  //console.log('adding Note: ',title,body);
  var duplicateNotes = notes.filter((note) => note.title === title);

  if(duplicateNotes.length === 0)
   {
       notes.push(note);
       saveNotes(notes);
       return note;
   }
};
var getAll = ()=>
{
   return fetchNotes();
}
var readNote = (title)=>
{
    debugger;
    var notes = fetchNotes();
    var newNote ={};
    var searchNote  = notes.filter((newNote) =>newNote.title === title);
        return searchNote[0];
}
var removeNote =(title)=>{
    var notes = fetchNotes();
    var newNote ={};
    var searchNote  = notes.filter((newNote) =>newNote.title !== title)
       saveNotes(searchNote);
 if(notes.length!==searchNote.length)
 {
     return true;
 }
    
}
module.exports=
{
    addNote,
    getAll:getAll,
    readNote,
    removeNote
};