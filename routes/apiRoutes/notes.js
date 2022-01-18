const router = require('express').Router();
const path = require('path');
const notes = require ('../../db/db.json');
const fs = require('fs');

router.get('/notes', (req, res) => {
    let savedNotes = notes;
    res.json(savedNotes);
});

router.post('/notes', (req, res) => {
    let note = req.body;
    alert('note saved');
    console.log(note);
        //function with outside npm library to create unique id for each note
    notes.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify({ notes }, null, 2)
  );
  return note;  
});

module.exports = router;