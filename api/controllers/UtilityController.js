const models = require('../models');

exports.acceptCookie = function(req,res)
{
    var id = req.user.id
    models.cookiePermission.create({
        accountFk:id,
        permissionFl:true,
        deleteFl:false,
        versionNo:1
    }).then(()=>{

        var userData = {id:id};

        res.cookie('reggae_masters_user_data', userData , {httpOnly:true, maxAge:300000});
        res.json({success:'success'});
    })
}