

exports.getPage = async function(req,res)
{
    var displayCookieMessage = req.body.displayCookieMessage;
    res.render('home',{user:req.user,displayCookieMessage:displayCookieMessage});
}

exports.getMenHomePage = async function(req,res)
{
    res.render('homeMen',{path:"men"});
}
