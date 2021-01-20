let savedNote = require("../db/db");
const fs = require('fs');


module.exports = function(app) {

  app.get("/api/notes", function(req, res) {
    res.json(savedNote);
  });



  app.post("/api/notes", function(req, res) {
    let newNote = req.body;
  
      savedNote.push(newNote);
        
    fs.writeFile("./db/db.json", JSON.stringify(savedNote),(err) => {
      if (err) {
        console.log(err); 
        res.sendStatus(404);
      } 
      else { 
          console.log("Success!");
          res.sendStatus(200);
      }
    });  
  });

  app.delete("/api/notes/:id", function(req, res) {
    let noteid = req.params.id;
    let newID = 0;

    let deleteNote = savedNote.findIndex(atID);

    savedNote.splice(deleteNote, 1);
        fs.writeFile("./db/db.json", JSON.stringify(savedNote),(err) => {
      if (err) {
        console.log(err); 
        res.sendStatus(404);
      } 
      else { 
          console.log("Success!");
          res.sendStatus(200);
      }
    });  
  });
};