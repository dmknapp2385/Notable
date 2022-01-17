const router = require('express').Router();
const path = require('path');
const notes = require ('../../db/db.json');
const fs = require('fs');

router.get('/notes', (res, req) => {
    let notes = notes;
    res.json(notes);
});

router.post('/notes', (res,req) => {
    let note = req.body;
    //function with outside npm library to create unique id for each note
    notes.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify({ notes }, null, 2)
  );
  return note;  
});

module.exports = router;