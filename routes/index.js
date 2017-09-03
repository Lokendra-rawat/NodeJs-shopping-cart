var express = require('express');
var router = express.Router();
var product = require('./../models/model');
var Cart = require('./../models/cart');
var app = require('../app');
var faker = require('faker');
var csrf = require('csurf');
var passport = require('passport');

var csrfProtection = csrf();
router.use(csrfProtection);

// router.use(function timeLog(req, res, next) {
// 	console.log('Time: ', Date.now());
// 	next();
// });

/* GET home page. Data for Modal  */
router.get('/', function (req, res, next) {
	var message = req.flash('error');
	product.find({}, function (err, data) {
		res.render('index1', {
			data: data,
			flash: req.flash(),
			session: req.session,
			messages: message,
			csrfToken: req.csrfToken(),
			auth: req.isAuthenticated()
		});
	}).limit(3).skip(3);
});

router.get('/api', function (req, res) {
	product.find({}, function (err, data) {
		res.render('shop', {
			data: data,
			flash: req.flash(),
			session: req.session,
			csrfToken: req.csrfToken()
		});
		// res.json(data);
	});
});
// router.post('/api', function (req, res) {
// 	// product.find({}, function (err, data) {
// 	// 	res.send(data);
// 	// });
// 	res.send('hello bitch');
// });

router.get('/admin', function (req, res, next) {
	product.find({}, function (err, data) {
		res.render('admin/dashboard', {
			data: data
		});
	});
});

router.get('/buy/:id', function (req, res, next) {
	product.findOne({ _id: req.params.id }, function (err, pro) {
		if (pro == 0) {
			res.redirect('/');
		}
		pro.pa = Math.round((pro.price - pro.price * pro.discount / 100));
		product.find({}, function (err, data) {
			res.render('buy1', {
				pro: pro,
				data: data,
				session: req.session,
				auth: req.isAuthenticated(),
				csrfToken: req.csrfToken(),
			});
		}).limit(3);
	});
});

router.get('/test', function (req, res) {
	res.render('test');
});

module.exports = router;