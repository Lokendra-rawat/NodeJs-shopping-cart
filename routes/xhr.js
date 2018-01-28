var express = require('express');
var router = express.Router();

var people = require('../Models/people');
var posts = require('../Models/post');
var comment = require('../Models/comment');
var stores = require("../Models/stores");

/* GET home page. */

router.get('/search', function (req, res, next) {
	var q = req.query.q;

	// FULL TEXT SEARCH USING $text

	// stores.find({
	// 	$text: {
	// 		$search: q
	// 	}
	// }, {
	// 	_id: 0,
	// 	__v: 0
	// }, function (err, data) {
	// 	res.json(data);
	// });

	// PARTIAL TEXT SEARCH USING REGEX

	stores.find({
		storeName: {
			$regex: new RegExp(q)
		}
	}, {
		_id: 0,
		__v: 0
	}, function (err, data) {
		res.json(data);
	}).limit(10);

});

module.exports = router;