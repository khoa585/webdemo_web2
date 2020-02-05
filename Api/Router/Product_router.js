var express = require('express')
var router = express.Router()
var controller = require('../Controllers/Product_controller')
router.get('/index',controller.Products)
router.get('/Product_api',controller.Products)
router.post('/Product_api',controller.create_Pd)
module.exports = router;