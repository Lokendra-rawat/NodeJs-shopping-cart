var stores = require("../Models/stores");
var deals = require("../Models/deals");

exports.home = function(req, res, next) {
  if (req.xhr === true) res.json([1, 2, 3, 2, 3, 4, 2, 2, 3, 1, 1, 1]);
  else {
    stores.find({}, {
      _id: 0,
      __v: 0
    }, function(err, store) {
      if (err) throw err;
      deals.find({}, {
        _id: 0,
        __v: 0
      }, function(err, data) {
        res.render('index', {
          data: data,
          stores: store
        });
      }).sort('-date').limit(30);
    }).limit(20);
  }
}

exports.allStores = function(req, res, next) {
  stores.find({}, {
    _id: 0,
    __v: 0
  }, function(err, data) {
    // console.log(data);
    if (err) throw err;
    res.render('allStores', data);
  }).sort({
    storeName: 1
  }).limit(30);
}