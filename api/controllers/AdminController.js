const models = require('../models');

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
    models.productTypeGroup.findAll().then(categories=>{
        models.color.findAll().then(colors=>{
            
            res.render('addProduct', {user:req.user, categories:categories,colors:colors});

        })
    })
}