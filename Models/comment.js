var mongodb = require('mongoose');
var Schema = mongodb.Schema;

var commentSchema = mongodb.Schema({
	post: {
		type: Schema.Types.ObjectId,
		ref: 'post'
	},
	comments: [{
		email: {
			type: String,
			required: true
		},
		comment: {
			type: String,
			required: true
		}
	}]
});

module.exports = comment = mongodb.model('comment', commentSchema);