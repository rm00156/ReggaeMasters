var express = require('express');
var router = express.Router();

const {getUser} = require('../middleware/cookie');
const {isAdmin} = require('../middleware/admin');
const homeController = require('../controllers/HomeController');
const utilityController = require('../controllers/UtilityController');
const adminController = require('../controllers/AdminController');
const loginController = require('../controllers/LoginController');
const signupController = require('../controllers/SignUpController');

router.get('/',getUser,homeController.getPage);
router.post('/acceptCookie', utilityController.acceptCookie);

router.get('/adminLogin',adminController.getLogin);
router.post('/adminlogin', loginController.adminLogin);

router.get('/adminDashboard', isAdmin, adminController.getAdminDashboard);
router.get('/addProduct', isAdmin, adminController.getAddProduct);

module.exports = router;