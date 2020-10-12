const models = require('../models');


exports.isAdmin = function(req,res,next)
{
    var account = req.user;
    if(account)
    {
        models.account.findOne({
            where:{
                id:account.id
            }
        }).then(account=>{
    
            if(account.accountTypeFk == 1)
                next();
            else
                res.redirect('/');
        })
    }
    else
        res.redirect('/');
}