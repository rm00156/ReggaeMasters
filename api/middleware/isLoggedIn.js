const models = require('../models');
const signupController = require('../controllers/SignupController');

exports.isCheckoutLoggedIn = function(req,res,next)
{
    if(req.user)
    {
        next();
    }
    else
    {
        var callFrom = req.query.callFrom;
        var purchaseBasketId = req.query.purchaseBasketId;
        if(callFrom == 'basket')
            res.redirect('/signup?callFrom=' + callFrom+ '&purchaseBasketId=' + purchaseBasketId);
        else
            res.redirect('/login');
    }
    
}


exports.isLoggedIn = function(req,res,next)
{
    if(req.user)
    {
        next();
    }
    else
    {
        res.redirect('/login');
    }
}