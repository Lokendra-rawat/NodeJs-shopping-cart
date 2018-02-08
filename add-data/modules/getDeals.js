var cheerio = require('cheerio');
var https = require('https');

/* require models */
var store = require('../../Models/stores');
var deal = require('../../Models/deals');

function checkExistingDeal(dealName) {
  deal.find({
    dealName: dealName
  }, function(err, data) {
    if (err) console.log(err);
    if(data.length === 0) return false;
    return true;
  });
}

function saveDeal(obj) {
  var deal = new deals(obj);
  deal.save({}, function(err, data) {
    if (err) console.log(err);
    else console.log("deal added");
  })
}

module.exports = function(res) {
  var htm = "";
  res.on('data', data => {
    htm += data;
  });
  res.on('end', _ => {
    var $ = cheerio.load(htm);
    $(".product-name a").each(function(i, element) {
      var imageUrl = element.attribs['href'];
      // if (i >= 10) return;
      console.log(imageUrl);
      https.get(imageUrl, function(res) {
        var htm = "";

        var dealName = "";
        var imageUrl = "";
        var imageName = "";
        var storeName = "";
        var cutPrice = "";
        var mainPrice = "";
        var tags = [];

        res.on('data', data => {
          htm += data;
        });
        res.on('end', _ => {
          console.log('deal page loaded');
          var $ = cheerio.load(htm);
          try {
            dealName = $(".product-details-div h1")[0].children[0].data;
            storeName = $(".sold-by a")[0].children[0].data;
            cutPrice = $(".cut-price-details del")[0].children[0].data.replace("Rs ", "");
            mainPrice = $(".main-price-details")[0].children[0].data.replace("Rs ", "");
            imageUrl = $(".details-image img")[0].attribs['data-original'];
            imageName = imageUrl.slice(imageUrl.lastIndexOf('/') + 1);
            $(".detals-stores li").each(function(i, element) {
              if (element.type == "tag") {
                let tagName = element.children[0].children[0].data;
                tags.push(tagName);
              }
            });
            var dealUrl = $(".product-description-section strong a")[0].attribs['href'];
            dealUrl = dealUrl.slice(dealUrl.indexOf("=") + 1);
          } catch (e) {
            console.log(e.message);
            return;
          }
          // create object for indexing
          var obj = {
            storeName: storeName,
            dealName: dealName,
            imageUrl: imageUrl,
            imageName: imageName,
            mainPrice: mainPrice,
            cutPrice: cutPrice,
            dealUrl: dealUrl,
            tags: tags
          }
          if (checkExistingDeal(dealName)) {
            console.log("deal already exists " + dealName);
          } else {
            saveDeal(obj);
          }
        }); //end response
      });
    });
  });
}