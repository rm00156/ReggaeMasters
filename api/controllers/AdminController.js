
exports.getLogin = function(req,res)
{
    res.render('adminLogin');
}

exports.getAdminDashboard = function(req,res)
{
    res.render('adminDashboard',{user:req.user});
}

exports.getAddProduct = function(req,res)
{
    res.render('addProduct', {user:req.user});
}