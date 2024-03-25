var express = require('express');
var router = express.Router();
var controller = require('../controllers/travel');

/*Get Travel Page*/
router.get('/', contgroller.travel);

module.exports = router;