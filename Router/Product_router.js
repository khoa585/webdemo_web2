var express = require('express')
var router = express.Router()
var multer = require('multer')
let passport = require("passport");
let checkIsLogin = require('./../middleware/authen');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, 'date-' + new Date().toISOString().replace(/:/g, '-') + file.originalname);
    }
});
const upload = multer({ storage: storage })
var controller = require('../Controllers/Product_controller')
router.get("/",checkIsLogin,(req,res)=>{
    res.render('Product_api');
})
router.get('/Product_api',checkIsLogin, controller.Products)
router.post('/Product_api', upload.single('productImage'), controller.create_Pd)
router.delete('/Product_api/:id', controller.delete_Pd)
router.get('/login',controller.login)
router.get('/logout',controller.logout)
router.post('/login', passport.authenticate('local', {
    successRedirect: '/Product_api',
    failureRedirect: '/login'
}));
module.exports = router;