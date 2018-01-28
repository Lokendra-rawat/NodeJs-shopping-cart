var express = require('express');
var router = express.Router();

var stores = require("../Models/stores");

/* GET home page. */

router.get('/', function (req, res, next) {

  if (req.xhr === true) res.json([1, 2, 3, 2, 3, 4, 2, 2, 3, 1, 1, 1, 1, 1, 4, 5, 1, 1, 1, 1, 1, 1, 1, 1]);
  else {
    stores.find({}, {
      _id: 0,
      __v: 0
    }, function (err, data) {
      if (err) throw err;
      res.render('index', {
        title: 'Express',
        stores: data,
        loop: [1, 2, 3, 2, 3, 4, 2, 2, 3, 1, 1, 1, 1, 1, 4, 5],
        loop1: [1, 2, 3, 4]
      });
    }).limit(30);
  }
});

router.get('/all-stores', function (req, res, next) {
  stores.find({}, {
    _id: 0,
    __v: 0
  }, function (err, data) {
    // console.log(data);
    if (err) throw err;
    res.render('allStores', {
      data: data
    });
  }).sort({
    storeName: 1
  }).limit(50);
});

module.exports = router;