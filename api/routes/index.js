var express = require('express');
var router = express.Router();

const homeController = require('../controllers/HomeController');

router.get('/', homeController.getPage);


module.exports = router;