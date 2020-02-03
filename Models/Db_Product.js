var mongoose = require('mongoose');
var Db_pdSchema = new mongoose.Schema({
	name : String,
	img : String,
	description : String,
	price: String
});
var Db_Product = mongoose.model('Db_Product',Db_pdSchema,'Db_Products');
module.exports = Db_Product;