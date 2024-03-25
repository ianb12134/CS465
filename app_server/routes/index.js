var express = require('express');
var router = express.Router();
const controller = require('../controllers/main');

/* GET home page. */
router.get('/', controller.index);


module.exports = router;
/*I had to add this so I had something new to add topush to 
github*/