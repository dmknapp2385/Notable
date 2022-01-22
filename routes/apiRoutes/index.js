const router = require('express').Router();
const notes = require('../apiRoutes/notes');
// connect to api router notes
router.use(notes);

module.exports = router;
