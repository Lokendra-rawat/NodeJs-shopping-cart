var mongodb = require('mongoose');
var Schema = mongodb.Schema;

var peopleSchema = mongodb.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true
	},
	address: {
		type: String,
		required: true
	},
	posts: [{
		type: Schema.Types.ObjectId,
		ref: 'post'
	}]
});

module.exports = people = mongodb.model('people', peopleSchema);