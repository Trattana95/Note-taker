var savedNotes = require("../db/db");
const fs = require('fs');


module.exports = function(app) {



  app.get("/api/notes", function(req, res) {
    res.json(savedNotes);
  });




  app.post("/api/notes", function(req, res) {
    var newNote = req.body;

    newNote.id = savedNotes.length.toString();
    
    savedNotes.push(newNote);

    fs.writeFile("./db/db.json", JSON.stringify(savedNotes),function(err) {
            if (err) 
            console.log (err);        
        }); 

        res.json(data);    

    });

    

  //Deleting
  app.delete("/api/notes/:id", function(req, res) {
    var id = req.params.id;

    var atID = (element) => element.id === id;
    var deleteNote = savedNotes.findIndex(atID);

    savedNotes.splice(deleteNote, 1);
    
    fs.writeFileSync("./db/db.json", JSON.stringify(data));
        res.json(savedNotes);

    });
    
  };

