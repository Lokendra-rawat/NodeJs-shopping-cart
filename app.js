var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
// var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
//var emitter = require('events');
var passport = require('passport');
var flash = require('connect-flash');
var session = require('express-session');
var passwordHash = require('password-hash');
var expressHbs = require('express-handlebars');
var mongoStore = require('connect-mongo')(session);
var compression = require('compression');

var faker = require('faker');

var randomName = faker.name.findName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard(); // random contact card containing many properties
var product = faker.commerce.product();
//setInterval(function(){ console.log('' + faker.lorem.paragraph()); }, 1000);
// console.log(product);

//console.log(passwordHash.verify('loki', 'sha1$b1b7e59f$1$5c3cc682a9d2afccd48d7bc324087b146a70d5b1'));
//mongodb://<dbuser>:<dbpassword>@ds115573.mlab.com:15573/cart

// mongoose.connect('mongodb://127.0.0.1:27017/cart', function (err) {
// 	if (err) console.log(err.name + " => " + err.message);
// });
mongoose.connect('mongodb://lokendra:mlab@ds115573.mlab.com:15573/cart', function (err) {
	if (err) console.log(err.name + " => " + err.message);
});

var obj = {
	firstname: [],
	email: []
};

for (i = 0; i < 5; i++) {
	obj.firstname.push(faker.name.firstName());
	obj.email.push(faker.internet.ip());
}
// console.log(obj);


require('./config/passport');

var index = require('./routes/index');
var users = require('./routes/users');
var checkout = require('./routes/checkout');
var ajax = require('./routes/ajax');

var app = express();

// view engine setup

// app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', expressHbs({ defaultLayout: 'layout', extname: '.hbs' }));
app.set('view engine', '.hbs');
// hello this was edited from vim text editor nigga
// uncomment after placing your favicon in /public

app.use(compression());
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
	secret: 'mysupersecret',
	resave: false,
	saveUninitialized: false,
	store: new mongoStore({ mongooseConnection: mongoose.connection }),
	cookie: { maxAge: 10 * 1000 }
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

// app.use(cookieParser('keyboard cat'));
//app.use(session({ cookie: { maxAge: 60000 } }));


app.use('/', index);
app.use('/users', users);
app.use('/checkouts', checkout);
app.use('/ajax', ajax);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};
	res.locals.session = req.session;
	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;


/**	
 * 
 * LOKI PLAYING GROUND...PLAYING GROUND
 * 
 */


var n = [3, 9, 7, -2, 0];

var product = function (n) {
	var product = 1;
	n.filter(x => x !== 0).forEach(x => product *= x);
	return n.filter(x => x !== 0).map(x => product / x);
};

// console.log(product(n));

/*
*
/////////////////////////
* FUNCTIONS PRACTICE
/////////////////////////
*/
var mul = function (a, b) {
	return a * b;
};
var add = function (a, b) {
	return a + b;
};
var sub = function (a, b) {
	return a - b;
};
var double = function (a) {
	return a + a;
};
var square = function (a) {
	return a * a;
};

var twice = function (func) {
	return (function (a) {
		return func(a, a);
	});
};
// console.log(twice(mul)(4));

var reverse = function (a, b) {
	return sub(b, a);
};
// console.log(reverse(3, 1));

var composeu = function (func1, func2) {
	return function (a) {
		return func2(func1(a));
	};
};
// console.log(composeu(double, square)(3));

var composeb = function (func1, func2) {
	return function (a, b, c) {
		return (func2(func1(a, b), c));
	};
};
// console.log(composeb(add, mul)(2, 3, 7));

var limit = function (func1, c) {
	return function (a, b) {
		if (c === 0) {
			return undefined;
		} else {
			c -= 1;
			return add(a, b);
		}
	};
};

// var ans = limit(add, 2);
// console.log(ans(3, 4));
// console.log(ans(3, 3));
// console.log(ans(3, 3));

var from = function (a) {
	return function () {
		var next = a;
		a += 1;
		return next;
	};
};

// var index = from(0);
// console.log(index());
// console.log(index());

var to = function (from, a) {
	return function () {
		var next = from();
		if (next >= a) {
			return undefined;
		}
		return next;
	};
};

// var v = to(from(3), 5);
// console.log(v());
// console.log(v());
// console.log(v());

var fromto = function (a, b) {
	return to(from(a), b);
};

// var ft = fromto(1,4);
// console.log(ft());
// console.log(ft());
var arr = ['a', 'b', 'c', 'd', 'e', 'f'];

var element = function (arr, from) {
	if (from === undefined) {
		from = fromto(0, arr.length);
	}
	return function () {
		var index = from();
		if (index !== undefined) {
			return arr[index];
		}
	};
};
// console.log(element(arr)());
// console.log(element(arr)());

// var el = element(arr);
// console.log(el());
// console.log(el());
// console.log(el());
// console.log(el());
// console.log(el());
// console.log(el());
// console.log(el());
var array = [];
var collect = function (fromto, arr) {
	return function () {
		var index = fromto();
		if (index !== undefined) {
			array.push(index);
		}
		return index;
	};
};

// var col = collect(fromto(0, 3), arr);
// console.log(col());
// console.log(col());
// console.log(array);

var filter = function (fromto, callback) {
	return function () {
		var index;
		do {
			index = fromto();
		} while (index !== undefined && !callback(index));
		return index;
	};
};

var fil = filter(fromto(0, 5), function (val) {
	return (val % 3) === 0;
});
// console.log(fil());
// console.log(fil());
// console.log(fil());

var concat = function (callback1, callback2) {
	return function () {
		var val1 = callback1();
		if (val1 !== undefined) {
			return val1;
		}
		return callback2();
	};
};
var con = concat(fromto(0, 3), fromto(0, 2));
// console.log(con());
// console.log(con());
// console.log(con());
// console.log(con());
// console.log(con());
// console.log(con());

var gensymf = function (char) {
	var val = from(0);
	return function () {
		return char + val();
	};
};
var gen = gensymf('H');
// console.log(gen());
// console.log(gen());
// console.log(gen());

var fibonaccif = function (a, b) {
	return function () {
		var next = a;
		a = b;
		b += next;
		return next;
	};
};

var fib = fibonaccif(0, 1);
// console.log(fib());
// console.log(fib());
// console.log(fib());
// console.log(fib());

var counter = function (a) {
	return {
		up: function () {
			return a += 1;
		},
		down: function () {
			return a -= 1;
		}
	};
};

// var object = counter(4);
// var up = object.up;
// console.log(up());

var revocable = function (callback) {
	return {
		invoke: function (a, b) {
			if (callback !== undefined) {
				return callback(a, b);
			}
		},
		revoke: function () {
			callback = undefined;
		}
	};
};
// var rev = revocable(add);
// console.log(rev.invoke(3, 5));
// // console.log(rev.revoke());
// console.log(rev.invoke(3, 4));

var m = function (val, source) {
	return {
		value: val,
		source: (typeof source === 'string') ? source : "" + val + ""
	};
};

// console.log(JSON.stringify(m(3)));

var addm = function (a, b) {
	return m(
		a.value + b.value,
		"(" + a.source + "+" + b.source + ")"
	);
};

// console.log(JSON.stringify(addm(m(3), m(4))));

var liftm = function (bin, string) {
	return function (a, b) {
		return m(
			bin(a.val, b.val),
			"(" + a.source + string + b.source + ")"
		);
	};
};

var modliftm = function (bin, string) {
	return function (a, b) {
		// console.log(typeof (b));
		// if (typeof (a) === "object" && typeof (b) === "object") {
		// 	return m(
		// 		bin(a.val, b.val),
		// 		"(" + a.source + string + b.source + ")"
		// 	);
		// }
		// if (typeof (a) === "object" && typeof (b) === "number") {
		// 	return m(
		// 		bin(a.val, b),
		// 		"(" + a.source + string + b + ")"
		// 	);
		// }
		// if (typeof (a) === "number" && typeof (b) === "object") {
		// 	return m(
		// 		bin(a, b.val),
		// 		"(" + a + string + b.source + ")"
		// 	);
		// }
		// return m(bin(a, b), "(" + a + string + b + ")");

		if (typeof a === "number") {
			a = m(a);
		}
		if (typeof b === "number") {
			b = m(b);
		}
		return m(bin(a.val, b.val), "(" + a.source + string + b.source + ")");

	};
};

// var addmn = liftm(add, "+");
// console.log(JSON.stringify(addm(m(3), m(4))));
var addmn = modliftm(add, "+");
// console.log(JSON.stringify(addmn(3, m(3))));


// WRITE A FUNCTION EXP THAT EVALUATES SIMPLE ARRAY EXPRESSIONS
// ------------------------------------------------------------

var jojo = [mul, 5, 5];
var nae = [
	Math.sqrt,
	[
		add,
		[square, 3],
		[square, 5]
	]
]
var exp = function (a) {
	// console.log(Array.isArray(a));
	return (Array.isArray(a)) ? a[0](a[1], a[2]) : a;
};

var modexp = function (a) {
	// console.log(Array.isArray(a));
	// return (Array.isArray(a)) ? a[0]((Array.isArray(a[1])) ? a[1][0](a[1][1][0](a[1][1][1])  , a[1][2][0](a[1][2][1])) : a ) : a;

	// return (Array.isArray(a) ) ? a[0](exp(a[1]), exp(a[2])) : a;
};

// console.log(exp(jojo));

// console.log(modexp(nae));

var addg = function (first) {
	function more(next) {
		if (next === undefined) {
			return first;
		}
		first += next;
		return more;
	}
	if (first !== undefined) {
		return more;
	}
};

// console.log(addg(3)(3)());

var liftg = function (binary) {
	return function (first) {
		if (first === undefined) {
			return first;
		}
		return function more(next) {
			if (next === undefined) {
				return first;
			}
			first = binary(first, next);
			return more;
		};
	};
};

// console.log(liftg(mul)(10)(0)());

var arrayg = function (val) {
	var arr = [];
	function more(first) {
		if (first === undefined) {
			return arr;
		}
		arr.push(first);
		return more;
	}
	return more(val);
};

// console.log(arrayg(2)(3)());

function continuize(unary) {
	return function (callback, arg) {
		return callback(unary(arg));
	};
}

function anycontinuize(any) {
	return function (callback, ...x) {
		return callback(any(...x));
	};
}


/// ALGORITHEMS CLASSES

var naive = function (a, b) {
	var x = a;
	var y = b;
	var z = 0;
	while (x > 0) {
		z += y;
		x -= 1;
	}
	return z;
};

// console.log(naive(3333334443, 344333332));


var russian = function (a, b) {
	var x = a;
	var y = b;
	var z = 0;
	while (x > 0) {
		if (x % 2 == 1) {
			z += y;
		}
		y = y << 1;
		x = x >> 1;
	}
	return z;
};

// console.log(russian(4323234,3434442));
// console.log(17 >> 1);