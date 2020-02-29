let checkIsLogin = (req,res,next)=>{
    if(req.isAuthenticated()){
        console.log(req.isAuthenticated())
         return next();
    }
    return res.redirect("/login");
}
module.exports = checkIsLogin