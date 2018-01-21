var mongodb = require('mongoose');
var Schema = mongodb.Schema;

var postSchema = mongodb.Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: 'people'
	},
	title: {
		type: String,
		required: true
	},
	body: {
		type: String,
		required: true
	},
	comments: {
		type: Schema.Types.ObjectId,
		ref: 'comment'
	}
});

module.exports = post = mongodb.model('post', postSchema);