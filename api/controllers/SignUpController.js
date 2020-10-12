const models = require('../models');
const bcrypt = require('bcrypt');
const passport = require('passport');

const generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null );
}

exports.generateHash = function(password)
{
    return generateHash(password);
}