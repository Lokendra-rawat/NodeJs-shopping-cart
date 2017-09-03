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

router.get('/fetchcart', function (req, res) {
	res.send(req.session.cart);
});

router.get('/user-ajax/:id', function (req, res) {
	product.findOne({ _id: req.params.id }, function (err, data) {
		res.send(data);
	});
});

router.get('/reduce/:id', function (req, res) {
	var id = req.params.id;
	var cart = new Cart(req.session.cart ? req.session.cart : {});
	cart.remove(id);
	var fin = cart.find(id);
	req.session.cart = cart;
	res.send([fin, id]);
});


router.get('/add-to-cart/:id', function (req, res) {
	var id = req.params.id;
	var cart = new Cart(req.session.cart ? req.session.cart : {});
	product.findById(id, function (err, product) {
		if (err) { res.redirect('/'); }
		if (!req.isAuthenticated()) {
			cart.add(product, product.id);
			req.session.cart = cart;
			res.send(req.session.cart);
		} else {

		}
	});
});

router.delete('/delete/:id', function (req, res) {
	var id = req.params.id;
	var Cat = new Cart(req.session.cart ? req.session.cart : {});
	if (Cat.bfind(id)) {
		Cat.remove(id);
	}
	product.remove({ _id: req.params.id }, function (err) {
		if (err) {
			res.send({ product: "not found" });
		}
		res.sendStatus(200);
	});
});

router.get('/admin/update/:id', function (req, res, next) {
	product.findOne({ _id: req.params.id }, function (err, data) {
		res.render('admin/update', {
			data: data,
		});
	});
});

router.post('/admin/update/:id', function (req, res, next) {
	var pro = {};
	pro.name = req.body.name;
	pro.description = req.body.description;
	pro.price = req.body.price;
	pro.quantity = req.body.quantity;
	pro.discount = req.body.discount;
	pro.image = req.body.image;

	product.update({ _id: req.params.id }, pro, function (err) {
		if (err) {
			console.log(err.name, err._message);
			res.send(err.name + " <br> " + err._message + "<br><b> Every product is required </b> ");
		} else {
			console.log('Data Updated');
			res.redirect('/admin');
		}
	});
});

router.get('/admin/add', function (req, res) {
	res.render('admin/add', { admin: " lokendra rawat" });
});

router.post('/admin', function (req, res, next) {
	var pro = new product();
	pro.name = req.body.name;
	pro.description = req.body.description;
	pro.price = Math.floor(Math.random() * 10000);
	pro.quantity = Math.floor(Math.random() * 500);
	pro.discount = Math.floor(Math.random() * 10);
	pro.image = req.body.image;

	pro.save(function (err) {
		if (err) {
			console.log(err.name, err._message);
			res.send(err.name + " <br> " + err._message + "<br><b> Every product is required </b> ");
		} else {
			console.log('Data saved');
			res.redirect('/admin');
		}
	});
});


module.exports = router;