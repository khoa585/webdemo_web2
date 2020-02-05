var mongoose = require('mongoose');
var Db_pdSchema = new mongoose.Schema({
	name : String,
	img : String,
	description : String,
	price: String
});
var Db_Product = mongoose.model('products',Db_pdSchema,'products');
module.exports = Db_Product;