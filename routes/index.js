var express = require('express');
var router = express.Router();
var faker = require('faker');

/* Databases Models*/
var stores = require("../Models/stores");
var deals = require("../Models/deals");

/* Controllers */
var index = require("../controllers/homeController");

/* GET home page. */

router.get('/', index.home);
router.get('/all-stores', index.allStores);
router.get('/all-categories', function(req, res, next) {
  res.render('catagory', {});
});
router.get('/test', function(req, res, next) {
  res.render("test", {});
});

module.exports = router;