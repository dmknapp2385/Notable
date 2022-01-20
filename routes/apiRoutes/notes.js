const router = require('express').Router();
const path = require('path');
const {notes} = require ('../../db/db.json');
const fs = require('fs');
const { rawListeners } = require('process');

router.get('/notes', (req, res) => {
    let savedNotes = notes;
    res.send(savedNotes);
});

router.post('/notes', ({body}, res) => {
    let note = body;
    notes.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify({ notes }, null, 2)
    
    );   
});

module.exports = router;