const models = require('../models');


exports.isAdmin = function(req,res,next)
{

    var accountId;
    var userData = req.cookies['userData'];
    
    if(req.user)
    {
        accountId = req.user.id;
    }
    else
    {
        if(userData == null || userData == undefined)
        {
            if(req.cookies.length != 0)
            {
                accountId = req.cookies.id;
            }
        }
        else
        {
            accountId = userData.id;
        }
    }

    models.account.findOne({
        where:{
            id:accountId
        }
    }).then(account=>{

        if(account.accountTypeFk == 1)
            next();
        else
            res.redirect('/');
    })
}