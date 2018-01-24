var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/all-stores', function (req, res, next) {
	res.render('allStores' , {});
});

module.exports = router;
