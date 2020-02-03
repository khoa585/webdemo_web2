const express = require("express");
const app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Db_Products');
const router = express.Router()
const bodyParser = require('body-parser')
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true })) 
const port = 3000;
const api = require('./Api/Router/Product_router')
app.use('/api',api);
app.listen(port,()=>{console.log(`Example app listening on port ${port}`)})