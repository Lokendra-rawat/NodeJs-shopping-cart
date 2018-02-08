var cheerio = require('cheerio');
var fs = require('fs');
var https = require('https');
var mongoose = require('mongoose');
var xhrRequest = require('xhr-request');

/* require models */
var store = require('../Models/stores');
var deal = require('../Models/deals');

/* require functions */
var saveImage = require('./modules/saveImage');
var getFkmDeals = require('./modules/getDeals');
var addStores = require('./modules/saveStores');

mongoose.connect('mongodb://lokendra:lokendra@ds115166.mlab.com:15166/stories', {
  useMongoClient: true
}, function(err) {
  if (err) console.log(err.name + " => " + err.message);
});

// deal.find({}, saveImage);

var targetUrl = "https://freekaamaal.com/";
// try {
https.get(targetUrl, getFkmDeals)
// } catch(e){
// console.log(e._message);
// }

/* add stores */
// fs.readFile('./Stores.html', "utf-8", addStores);