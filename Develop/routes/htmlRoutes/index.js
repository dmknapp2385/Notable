const router = require('express').Router();
const path = require('path');

router.get('/', (res, req) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'))
});

router.get('/notes', (res, req) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'))
});

module.exports = router;