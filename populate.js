var mongodb = require('mongoose');
var faker = require('faker');

var Schema = mongodb.Schema;

mongodb.connect('mongodb://127.0.0.1:27017/populate', {
	useMongoClient: true
}, function (err) {
	if (err) console.log(err.message);
});

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
 
var people = mongodb.model('people', peopleSchema);
var post = mongodb.model('post', postSchema);
var comment = mongodb.model('comment', commentSchema);

var newPeople = new people({
	name: faker.internet.userName(),
	email: faker.internet.email(),
	address: faker.address.streetAddress()
});

var newPost = new post({
	user: "5a5f11b80e02d108741773da",
	title: faker.company.catchPhrase(),
	body: faker.lorem.paragraph()
});

// var newComment = new comment({
// 	post: "5a618a3a116fc70fc0f9b96c"
// });

// newComment.save(function(err,data){
// 	if(err)console.log(err);
// 	else{
// 		console.log('data saved');
// 	}
// });


// comment.update({
// 	'post': '5a618a3a116fc70fc0f9b96c'
// }, {
// 	$push: {
// 		'comments': {
// 			'email': faker.internet.email(),
// 			'comment': faker.company.catchPhrase()
// 		}
// 	}
// }, {
// 	multi: true
// }).exec(function (err, data) {
// 	console.log(data);
// });


// newPost.save(function (err, data1) {
// 	if (err) console.log(err);
// 	else {
// 		/*  ADD POST TO THE PEOPLE POSTS COLLECTION */
// 		people.update({
// 			'_id': data1.user
// 		}, {
// 			$push: {
// 				'posts': data1._id
// 			}
// 		}, {
// 			multi: true
// 		}).exec(function (err, data) {
// 			console.log(data);
// 		});

// 		/*  ADD COMMENT WITH POST ID TO THE POST COLLECTION */
// 		var newComment = new comment({
// 			post: data1._id
// 		});
// 		newComment.save(function (err, data) {
// 			if (err) console.log(err);
// 			else {
// 				/* UPDATE POST COMMENT REF ID */
// 				post.update({
// 					'_id': data1._id
// 				}, {
// 					$set: {
// 						'comments': data._id
// 					}
// 				}, {
// 					multi: true
// 				}).exec(function (err, data) {
// 					console.log(data);
// 				});

// 			};
// 		});
// 		console.log(data1);
// 	}
// });

// newPeople.save(function (err) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log('data saved');
// 	}
// });

// post.findOne().
// populate('user').
// populate('comments').
// exec(function (err, story) {
// 	if (err) return handleError(err);
// 	console.log(story);
// });

// comment.findOne().
// populate('post').
// exec(function(err,story){
// 	if(err) return handleError(err);
// 	console.log(story);
// })

// post.find({} , {comments: 0}).
// // populate('posts').
// // populate('comments').
// exec(function (err, data) {
// 	if (err) return handleError(err);
// 	console.log(data);
// });