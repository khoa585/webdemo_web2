var Product = require('../../Models/Db_Product');
module.exports.index = async function(req,res) {
	res.send("hello")
}
module.exports.Products = async function(req,res) {
	var Products = await Product.find();
	res.json(Products);
}
module.exports.create_Pd = async function(req,res){
	var Products = await Product.create(req.body);
	res.json(Products);
}