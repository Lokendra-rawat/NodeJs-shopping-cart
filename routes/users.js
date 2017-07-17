var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport = require('passport');
let product = require('./../models/model');


var csrfProtection = csrf();
router.use(csrfProtection);

/* GET users listing. */
router.get('/signup', function (req, res, next) {
	var message = req.flash('error');
	res.render('user/signup', {
		csrfToken: req.csrfToken(),
		messages: message
	});
});
router.get('/signin', function (req, res, next) {
	res.render('user/signin', {
		csrfToken: req.csrfToken(),
		flash: req.flash()
	});
});
router.get('/profile', function (req, res, next) {
	res.render('user/profile');
});

router.post('/signup', passport.authenticate('local.signup', {
	successRedirect: '/users/signin',
	failureRedirect: '/users/signup',
	failureFlash: true
}));

// router.get('/:id', function (req, res, next) {
// 	product.find({_id: req.params.id}, function (err, data) {
// 		res.render('admin/dashboard', {
// 			data: data
// 		});
// 	});
// });

router.get('/api', function (req, res) {
	res.send({
		"statuses": [
			{
				"created_at": "Mon Apr 17 21:55:11 +0000 2017",
				"id": 854090890477920300,
				"id_str": "854090890477920256",
				"text": "hoeishoeishoe",
				"truncated": false,
				"entities": {
					"hashtags": [],
					"symbols": [],
					"user_mentions": [],
					"urls": []
				},
				"metadata": {
					"iso_language_code": "nl",
					"result_type": "recent"
				},
				"source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
				"in_reply_to_status_id": null,
				"in_reply_to_status_id_str": null,
				"in_reply_to_user_id": null,
				"in_reply_to_user_id_str": null,
				"in_reply_to_screen_name": null,
				"user": {
					"id": 852467212631724000,
					"id_str": "852467212631724032",
					"name": "lokendra rawat",
					"screen_name": "WebTips_",
					"location": "India",
					"description": "webtips a show for web developers",
					"url": null,
					"entities": {
						"description": {
							"urls": []
						}
					},
					"protected": false,
					"followers_count": 0,
					"friends_count": 1,
					"listed_count": 0,
					"created_at": "Thu Apr 13 10:23:16 +0000 2017",
					"favourites_count": 4,
					"utc_offset": -25200,
					"time_zone": "Pacific Time (US & Canada)",
					"geo_enabled": false,
					"verified": false,
					"statuses_count": 28,
					"lang": "en",
					"contributors_enabled": false,
					"is_translator": false,
					"is_translation_enabled": false,
					"profile_background_color": "F5F8FA",
					"profile_background_image_url": null,
					"profile_background_image_url_https": null,
					"profile_background_tile": false,
					"profile_image_url": "http://pbs.twimg.com/profile_images/852474314121035776/1OTe9BfW_normal.jpg",
					"profile_image_url_https": "https://pbs.twimg.com/profile_images/852474314121035776/1OTe9BfW_normal.jpg",
					"profile_banner_url": "https://pbs.twimg.com/profile_banners/852467212631724032/1492085931",
					"profile_link_color": "1DA1F2",
					"profile_sidebar_border_color": "C0DEED",
					"profile_sidebar_fill_color": "DDEEF6",
					"profile_text_color": "333333",
					"profile_use_background_image": true,
					"has_extended_profile": true,
					"default_profile": true,
					"default_profile_image": false,
					"following": false,
					"follow_request_sent": false,
					"notifications": false,
					"translator_type": "none"
				},
				"geo": null,
				"coordinates": null,
				"place": null,
				"contributors": null,
				"is_quote_status": false,
				"retweet_count": 0,
				"favorite_count": 0,
				"favorited": false,
				"retweeted": false,
				"lang": "nl"
			}
		],
		"search_metadata": {
			"completed_in": 0.053,
			"max_id": 854090890477920300,
			"max_id_str": "854090890477920256",
			"query": "hoeishoeishoe",
			"refresh_url": "?since_id=854090890477920256&q=hoeishoeishoe&include_entities=1",
			"count": 20,
			"since_id": 0,
			"since_id_str": "0"
		}
	});
});

router.get('/buy/:id', function (req, res, next) {
	product.find({ _id: req.params.id }, function (err, pro) {
		res.render('buy', {
			pro: pro
		});
	});
});

module.exports = router;