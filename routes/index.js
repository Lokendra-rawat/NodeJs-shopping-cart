var express = require('express');
// var csrf = require('csurf');
var router = express.Router();
let product = require('./../models/model');
let Cart = require('./../models/cart');
var app = require('../app');


// BRAINTREE START 

var braintree = require("braintree");

var gateway = braintree.connect({
	environment: braintree.Environment.Sandbox,
	merchantId: "njx2sfpxmwwv9v74",
	publicKey: "hmgtrm7t3q7ppybm",
	privateKey: "ba9852412a8c06b5f4813dfc783b02b0"
});

// var csrfProtection = csrf();
// router.use(csrfProtection);

var TRANSACTION_SUCCESS_STATUSES = [
	braintree.Transaction.Status.Authorizing,
	braintree.Transaction.Status.Authorized,
	braintree.Transaction.Status.Settled,
	braintree.Transaction.Status.Settling,
	braintree.Transaction.Status.SettlementConfirmed,
	braintree.Transaction.Status.SettlementPending,
	braintree.Transaction.Status.SubmittedForSettlement
];

function formatErrors(errors) {
	var formattedErrors = '';

	for (var i in errors) { // eslint-disable-line no-inner-declarations, vars-on-top
		if (errors.hasOwnProperty(i)) {
			formattedErrors += 'Error: ' + errors[i].code + ': ' + errors[i].message + '\n';
		}
	}
	return formattedErrors;
}

function createResultObject(transaction) {
	var result;
	var status = transaction.status;

	if (TRANSACTION_SUCCESS_STATUSES.indexOf(status) !== -1) {
		result = {
			header: 'Sweet Success!',
			icon: 'success',
			message: 'Your test transaction has been successfully processed. See the Braintree API response and try again.'
		};
	} else {
		result = {
			header: 'Transaction Failed',
			icon: 'fail',
			message: 'Your test transaction has a status of ' + status + '. See the Braintree API response and try again.'
		};
	}

	return result;
}

router.get('/checkouts/new', function (req, res) {
	if (req.session.cart) {
		gateway.clientToken.generate({}, function (err, response) {
			if (response === undefined) { res.render('checkouts/new', {data: req.session}); return }
			res.render('checkouts/new', { clientToken: response.clientToken, data: req.session, messages: req.flash('error') });
		});
	} else {
		res.send('Add something to Cart To go to the CheckOut Page');
	}
});

router.get('/checkouts/:id', function (req, res) {
	var result;
	var transactionId = req.params.id;

	gateway.transaction.find(transactionId, function (err, transaction) {
		result = createResultObject(transaction);
		res.render('checkouts/show', { trans: transaction, res: result });
	});
});

router.post('/checkouts', function (req, res) {
	var transactionErrors;
	var amount = req.body.amount; // In production you should not take amounts directly from clients
	var nonce = req.body.payment_method_nonce;

	gateway.transaction.sale({
		amount: amount,
		paymentMethodNonce: nonce,
		options: {
			submitForSettlement: true
		}
	}, function (err, result) {
		if (result.success || result.transaction) {
			res.redirect('checkouts/' + result.transaction.id);
		} else {
			transactionErrors = result.errors.deepErrors();
			console.log(transactionErrors);
			req.flash('error', { msg: formatErrors(transactionErrors) });
			res.redirect('/checkouts/new');
		}
	});
});

//BRAINTREE END 



/* GET home page. Data for Modal  */
router.get('/add-to-cart/:id', function (req, res) {
	var id = req.params.id;
	var cart = new Cart(req.session.cart ? req.session.cart : {});
	product.findById(id, function (err, product) {
		if (err) { res.redirect('/') };
		cart.add(product, product.id);
		req.session.cart = cart;
		console.log(req.session.cart);
		res.send(req.session.cart);
	});
});

router.get('/reduce/:id', function (req, res) {
	var id = req.params.id;
	
})

router.get('/user-ajax/:id', function (req, res) {
	product.findOne({ _id: req.params.id }, function (err, data) {
		res.send(data);
	});
});

router.delete('/delete/:id', function (req, res) {
	product.remove({ _id: req.params.id }, function (err) {
		if (err) {
			res.send({ product: "not found" })
		};
		res.send(200);
	})
})

router.get('/api', function (req, res) {
	res.send({
		name: "lokendra rawat",
		hobby: "programming",
		best: "javascript",
		comment: {
			name: "alex gerret",
			comment: "hey there this is cool"
		}
	})
})


router.get('/', function (req, res, next) {
	product.find({}, function (err, data) {
		console.log(req.session)
		res.render('index', {
			data: data,
			flash: req.flash(),
			cart: req.session
		});
	});
});

router.get('/admin', function (req, res, next) {
	product.find({}, function (err, data) {
		res.render('admin/dashboard', {
			data: data
		});
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

	let pro = {};
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
})

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

router.get('/buy/:id', function (req, res, next) {
	product.findOne({ _id: req.params.id }, function (err, pro) {
		if (pro == 0) {
			res.redirect('/');
		}
		pro.pa = Math.round((pro.price - pro.price * pro.discount / 100));
		product.find({}, function (err, data) {
			res.render('buy', {
				pro: pro,
				data: data
			});
		}).limit(3);
	});
});

router.get('/test', function (req, res) {
	res.render('test')
})

module.exports = router;