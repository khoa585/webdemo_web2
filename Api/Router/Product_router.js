var express = require('express')
var router = express.Router()
var controller = require('../Controllers/Product_controller')
router.get('/Product_api',controller.Products)
router.post('/Product_api',controller.create_Pd)
module.exports = router;