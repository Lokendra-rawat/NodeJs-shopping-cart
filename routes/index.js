var express = require('express');
var router = express.Router();
var faker = require('faker');

var stores = require("../Models/stores");
var deals = require("../Models/deals");

/* GET home page. */

deals.find({},{_id:0,__v:0} , function(err,data){
  console.log(data);
})

router.get('/', function (req, res, next) {
  if (req.xhr === true) res.json([1, 2, 3, 2, 3, 4, 2, 2, 3, 1, 1,1]);
  else {
    stores.find({}, {
      _id: 0,
      __v: 0
    }, function (err, store) {
      if (err) throw err;
      deals.find({}, {
        _id: 0,
        __v: 0
      }, function (err, data) {
        res.render('index', {data : data , stores : store});
      }).limit(20);
    }).limit(20);
  }
});

router.get('/all-stores', function (req, res, next) {
  stores.find({}, {
    _id: 0,
    __v: 0
  }, function (err, data) {
    // console.log(data);
    if (err) throw err;
    res.render('allStores', {});
  }).sort({
    storeName: 1
  }).limit(30);
});

router.get('/all-categories', function (req, res, next) {
  res.render('catagory', {});
});

router.get('/test', function (req, res, next) {
  res.render("test", {});
});

module.exports = router;