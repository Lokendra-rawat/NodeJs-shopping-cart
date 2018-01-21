var express = require('express');
var router = express.Router();

var people = require('../Models/people');
var posts = require('../Models/post');
var comment = require('../Models/comment');

/* GET home page. */

router.get('/search', function (req, res, next) {
	var q = req.query.q;
	posts.find({ $text: { $search: q } }, { _id: 0 })
		// .populate('posts')
		.populate('comments')
		.exec(function (err, data) {
			if (err) throw err;
			res.json(data);
		});
});

module.exports = router;