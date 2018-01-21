var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:d', function (req, res, next) {
  res.send('Why are you adding this additional Url ' + req.params.d + " and query " + req.query.hello);
});

module.exports = router;
