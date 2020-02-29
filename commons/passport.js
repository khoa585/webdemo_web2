let passport = require("passport");
let passportLocal = require("passport-local");
let {checkLogin} = require('./../Controllers/user');
let LocalStrategy = passportLocal.Strategy;
let initPassportLocal = ()=>{
    passport.use(new LocalStrategy({
        passReqToCallback:true
    }, async (req,username,password,done)=>{
        try{
            let user = await checkLogin(username,password);
            if(user.length>0){
                return done(null, user);
            }
            else{
                return done(null,false,req.flash("errors",'Sai tài khoản hoặc mật khẩu !'));
            }          
        }
        catch(error){
            return done(error);
        }
    }))
    passport.serializeUser((user,done)=>{
        done(null,user);
    })
    passport.deserializeUser( async (id,done)=>{
        done(null,id);
    })
}
module.exports = initPassportLocal;