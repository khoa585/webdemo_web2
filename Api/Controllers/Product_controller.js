var Product = require('../../Models/Db_Product');
module.exports.index = async (req,res) => {
	var Products = await Product.find();
	res.json(Products);
}
module.exports.Products = async (req,res) => {
	var Products = await Product.find();
	res.json(Products);
}
module.exports.create_Pd = async (req,res) => {
	var Products = await Product.create(req.body);
	res.json(Products);
}