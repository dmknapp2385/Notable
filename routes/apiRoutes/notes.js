const router = require('express').Router();
const path = require('path');
const {notes} = require ('../../db/db.json');
const fs = require('fs');
const {v4 : uuidv4} = require('uuid');

router.get('/notes', (req, res) => {
    res.send(notes);
});

router.post('/notes', (req, res) => {
    let note = req.body;
    note.id = uuidv4();
    notes.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify({ notes }, null, 2)
    
    )
    res.end();
});

router.delete('/notes/:id', (req, res) => {
    const findId = (note) =>  note.id === req.params.id;
    const remove = notes.findIndex(findId);
    notes.splice(remove,1);
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify({ notes }, null, 2)
    )
    res.send(notes);
})

module.exports = router;