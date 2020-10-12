var express = require('express');
var router = express.Router();

const {getUser} = require('../middleware/cookie');
const homeController = require('../controllers/HomeController');
const utilityController = require('../controllers/UtilityController');

router.get('/',getUser,homeController.getPage);
router.post('/acceptCookie', utilityController.acceptCookie);
module.exports = router;