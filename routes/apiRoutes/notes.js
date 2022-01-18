const router = require('express').Router();
const path = require('path');
const {notes} = require ('../../db/db.json');
const fs = require('fs');

router.get('/notes', (req, res) => {
    let savedNotes = notes;
    res.send(savedNotes);
});

router.post('/notes', (req, res) => {
    let note = req.body;
    console.log(note);
    console.log(notes);
    notes.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify({ notes }, null, 2)
  );
  return note;  
});

module.exports = router;