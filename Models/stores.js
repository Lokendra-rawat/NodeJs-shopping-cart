var mongodb = require('mongoose');
var Schema = mongodb.Schema;

var stores = mongodb.Schema({
	storeName: {
		type: String,
		required: true,
		unique: false
	}
});

module.exports = stores = mongodb.model('store', stores);