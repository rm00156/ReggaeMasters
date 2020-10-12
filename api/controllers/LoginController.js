const passport = require('passport');

exports.adminLogin = function(req,res,next)
{
    req.body["admin"] = true;
    passport.authenticate('local', (err,user,info)=> {
        if(err)
            return next(err);
        
        if(!user)
            return render_AdminLogin(req,res);

                
        req.logIn(user, (err)=>{

            if(err)
                return next(err);
            
            return res.redirect('/adminDashboard');

        })
                
    })(req,res,next);
       
}

const render_AdminLogin = function( req,res,next)
{
    res.render('adminLogin', {formData:req.body,error:'You have entered an invalid username or password'});
}
