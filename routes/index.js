var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function (req, res, next) {

  if (req.xhr === true) res.json([1, 2, 3, 2, 3, 4, 2, 2, 3, 1, 1, 1, 1, 1, 4, 5, 1, 1, 1, 1, 1, 1, 1, 1]);

  else res.render('index', {
    title: 'Express',
    loop: [1, 2, 3, 2, 3, 4, 2, 2, 3, 1, 1, 1, 1, 1, 4, 5],
    loop1: [1, 2, 3, 4]
  });

});

module.exports = router;