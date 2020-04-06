var Product = require('./../Models/Db_Product');
let ResponsiveHelper = require('./../commons/ResponsiveHelper');
module.exports.Products = async function (req, res) {
		const a = req.user
		a.map((test)=>{
			console.log(test._id);
		})	
		var Products = await Product.find();
		res.json(Products);
}
module.exports.create_Pd = async function (req, res) {
	var Products = new Product({
		name: req.body.name,
		description: req.body.description,
		price: req.body.price,
		sale: req.body.sale,
		star: req.body.start,
		productImage: req.file.path
	})
	Products.save()
	res.json(Products);
}
module.exports.delete_Pd = async function (req, res) {
	var result = await Product.findOneAndRemove({ _id: req.params.id }, function (err, res) {
		if (err) throw err;
	})
	return ResponsiveHelper.json(req, res, null, result);
}
module.exports.login = function (req, res) {
	res.render('login', { error: null });
}
module.exports.logout = async function (req, res) {
	req.logout();
	res.render('login', { error: null });
}
