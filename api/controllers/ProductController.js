const models = require('../models');

exports.getProductTypes = function(req,res)
{
    var categoryId = req.query.categoryId;

    models.productType.findAll({
        where:{
            productTypeGroupFk:categoryId
        }
    }).then(productTypes=>{

        res.json({productTypes:productTypes});
    })
}

exports.getProductTypeGroup = function(req,res)
{
    var categoryId = req.query.categoryId;
    
    models.productTypeGroup.findOne({
        where:{
            id:categoryId
        }
    }).then(productTypeGroup=>{

        res.json({productTypeGroup:productTypeGroup});
    })
}

exports.addProduct = function(req,res)
{
    console.log('reece')
    console.log(req.body);
    console.log(req.files);

    res.json({});
}
