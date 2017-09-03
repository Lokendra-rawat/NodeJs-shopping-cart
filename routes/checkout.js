var express = require('express');
var csrf = require('csurf');
var router = express.Router();
// var product = require('./../models/model');
var Cart = require('./../models/cart');
var app = require('../app');
var passport = require('passport');


var csrfProtection = csrf();
router.use(csrfProtection);

// BRAINTREE START

var braintree = require("braintree");

var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: "njx2sfpxmwwv9v74",
  publicKey: "hmgtrm7t3q7ppybm",
  privateKey: "ba9852412a8c06b5f4813dfc783b02b0"
});

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

router.get('/new', function (req, res) {
  if (req.session.cart) {
    console.log("in here");
    // console.log(req.session.cart.find({}));
    // gateway.clientToken.generate({}, function (err, response) {
    // if (response === undefined) { res.render('checkouts/new', { data: req.session }); return };
    res.render('checkouts/checkouts', {
      clientToen: 'response.clientToken',
      auth: req.isAuthenticated(),
      data: req.session,
      messages: req.flash('error'),
      session: req.session
    });
    // });
  } else {
    res.send('Please Add Some Product in the cart...');
  }
});

router.get('checkouts/:id', function (req, res) {
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
module.exports = router;
