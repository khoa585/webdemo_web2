require('dotenv').config()
const express = require("express");
const app = express();
const router = express.Router()
const bodyParser = require('body-parser')
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true })) 
var mongoose = require('mongoose');
try {
   	mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true, useUnifiedTopology: true },(erro)=>{
       	if(erro){
           console.log("Erro Connect To DB");
           console.log(erro);
       	}else{
           console.log("Connected to DB");
       	}
   	});
	} catch (error) {
        	handleError(error); 
}
const port = 3000;
const api = require('./Api/Router/Product_router')
app.use('/api',api);
app.listen(process.env.PORT || port,()=>{console.log(`Example app listening on port ${port}`)})