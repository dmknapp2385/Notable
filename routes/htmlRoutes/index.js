const router = require('express').Router();
const path = require('path');


//Load index.thml
router.get('/', function (req, res) {
    res.send(path.join(__dirname, '../../public/index.html'))
});


// Load note html page
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
}); 

module.exports = router;