var https = require('https');
var fs = require('fs');

function getImage(imageUrl, imageName) {
  https.get(imageUrl, function(res) {
    var img = "";
    res.setEncoding('binary');
    res.on('data', data => {
      img += data;
    });
    res.on('end', function(data) {
      // console.log(img);
      fs.writeFile('public/images/products/' + imageName, img, 'binary', function(err) {
        if (err) throw err;
        else console.log('saved');
      });
    });
  });
}

module.exports = function(err, data) {
  if (err) console.log(err.message);
  data.forEach(x => {
    var imgName = x.imageUrl;
    var url = x.imageUrl.replace(x.imageUrl.slice(x.imageUrl.lastIndexOf('/') + 1), "");
    imgName = "large_" + imgName.slice(imgName.lastIndexOf('/') + 1);
    var fullUrl = url + imgName;
    console.log(fullUrl);
    // getImage(x.imageUrl, imgName);
  })
}