var mongodb = require('mongoose');
var Schema = mongodb.Schema;

var deal = mongodb.Schema({
	imageUrl: {
		type: String,
		required: true,
		unique: false
	}
});

module.exports = deals = mongodb.model('deals', deal);