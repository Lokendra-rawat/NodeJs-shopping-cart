// if (Notification.permission == "default") {
//   console.log("We want to request notification");
//   Notification.requestPermission();
//   if (Notification.permission == "denied") {
//     console.log("your notification Permission is Set on Block")
//   }
// } else if (Notification.permission == "denied") {
//   console.log("you have denied the permission")
//   Notification.requestPermission();
//   console.log('why would you do that')
// } else if (Notification.permission == "granted") {
//   setInterval(function () {
//     console.log("sent the notification");
//     new Notification("The Robin Store", { body: "you are also a amazing human being " });
//   }, 5000);
// }

/**
 * 
 *  DOCUMENT FUCNTIONS
 */
$("#signup-btn").click(function (event) {
	//console.dir(this); 
	event.preventDefault();
	var logincard = $("#signup-card");
	$("#signup-card").fadeIn().show();
});


function ajaxTest() {
	$.ajax({
		url: "/api",
		beforeSend: function (xhr) {
			xhr.overrideMimeType("text/plain; charset=x-user-defined");
			// setTimeout(_ => document.write('loding...'), 1000);
			console.log('Loding...');
		}
	})
		.done(function (data) {
			if (console && console.log) {
				var nd = JSON.parse(data);
				console.log("Sample of data:", nd);
			}
		});
}

// ajaxTest();

const xhttp = new XMLHttpRequest();

function fetccart() {
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			let data = JSON.parse(this.responseText);
			for (var i = 0; data.length <= 4; i++) {
				// console.log('hello')
			}
			// document.getElementById('cartModal').innerText = data;
		}
	};
	xhttp.open("GET", "/fetchcart", true);
	xhttp.send();
}



/**
 * 
 *  send ajax request to the server 
 *	and recieve the object and
 *	append it to the dom
 *   
 */

function addToCart(a) {
	$.ajax({
		url: "/add-to-cart/" + a,
		beforeSend: function (xhr) {
			xhr.overrideMimeType("text/plain; charset=x-user-defined");
			console.log('Loading...');
			$(".details #"+a + " img").show();
		}
	})
		.done(function (data) {
			if (console && console.log) {
				var Data = JSON.parse(data);
				var it = Data.items;
				$("#cartBox").html("");
				for (var x in it) {
					var box = document.createElement('div');
					console.log(it[x].item._id);
					box.setAttribute("class", "box clearfix list-group-item");
					box.innerHTML = '<img style="height:60px;float:left;margin-right:10px" src="/images/' + it[x].item.image + '"><small>Name : ' + it[x].item.name + '</small><br> <small>Price : ' + it[x].item.price + ' </small> <br><small>Qty : ' + it[x].qty + ' </small>';
					$("#cartBox").append(box);
					$("#tq").html('Total quantity : ' + Data.totalqty);
					$("#tp").html('Total price : ' + Data.totalprice);
					// $("#remove").setAttribute('onclick', 'remove(' + it[x].item._id +')');
				}
				$("#cartInfo").text(Data.totalqty);
				$("#cartInfo").removeClass('hide');
				$("#cartInfo").addClass('badge');
				showPanal();
				$(".details #" + a + " img").hide();
			}
		});
}


function showPanal(message) {
	$("#panal").fadeIn();
	setTimeout(function () {
		$("#panal").fadeOut();
	}, 2500);
}


/**
 * 
 *  Send the ajax request and append the object information to the dom ..
 * 
 */
function loadDoc(a) {
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			var data = JSON.parse(this.responseText);
			document.getElementById("price").innerHTML = "<b>Price : </b>" + data.price;
			document.getElementById("discount").innerHTML = "<b>Discount : </b>" + data.discount + "%";
			document.getElementById("description").innerHTML = data.description;
			document.getElementById("pro-name").innerHTML = data.name;
			document.getElementById("image").setAttribute('src', "../images/" + data.image);
			document.getElementById("buy").setAttribute('href', "../buy/" + data._id);
			document.getElementById("amount").innerHTML = "<b>Payable Amount : </b>" + Math.floor(data.price - (data.price * data.discount) / 100);
			openmodel();
		}
	};
	xhttp.open("GET", "/user-ajax/" + a, true);
	xhttp.send();
}



/**
 * takes the product id and sends the ajax req.
 * and update the Product in the ADMIN PANAL
 *
 */
function update(a) {
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			let data = JSON.parse(this.responseText);
			console.log(data);
			let update = document.getElementById("update");
			console.log('/admin/update/' + data._id);
			update.children[1].children[0].setAttribute('action', '/admin/update/' + data._id);
			update.children[1].children[0].children[1].value = data.name;
			update.children[1].children[0].children[3].innerHTML = data.description;
			update.children[1].children[0].children[5].value = data.price;
			update.children[1].children[0].children[7].value = data.quantity;
			update.children[1].children[0].children[9].value = data.discount;
			update.style.display = "block";
		}
	};
	xhttp.open("GET", "/user-ajax/" + a, true);
	xhttp.send();
}



/**
 * sends the ajax req. with the product id and 
 * DELETE the products from the admin panal
 * 
 */

function del(a) {
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			// window.location.assign('/admin');
		}
	};
	xhttp.open("DELETE", "/delete/" + a, true);
	// let r = confirm('Item ' + a + '  Will be Deleted ');
	let r = 1;
	if (r == true) {
		xhttp.send();
		document.getElementById(a).style.display = "none";
	} else {
		return false;
	}
}


function removeFromList(a) {
	$.ajax({
		url: "/reduce/" + a,
		beforeSend: function (xhr) {
			xhr.overrideMimeType("text/plain; charset=x-user-defined");
			$("#" + a + " img").show();
		}
	})
		.done(function (data) {
			if (console && console.log) {
				var Data = JSON.parse(data);
				console.log(Data);
				$("#" + a + " img").hide();
				if (!Data[0]) {
					$("#" + a).hide();
				} else {
					var box = $("#" + a);
					box.children[2].text = 'hello';
					box.children[3].text = 'hello';
				}
			}
		});
}



/**
 * 
 * REMOVE the product from the checkout page One by One
 * and if all the products are removed from the cart
 * then it redirects to the HOME page
 * 
 */

function remove(a) {
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			var data = JSON.parse(this.responseText);
			if (data[0]) {
				document.getElementById(data[1]).children[1].innerHTML = "Item Quantity : " + data[0].itemqty;
				document.getElementById(data[1]).children[2].innerHTML = "Item Price : " + data[0].itemprice;
				document.getElementById('total').children[0].innerText = "Total Quantity : " + data[0].totalqty;
				document.getElementById('total').children[1].innerText = "Total Price : " + data[0].totalprice;
				document.getElementById('amount').value = data[0].totalprice;
				document.getElementById('tq').innerHTML = '<b>Total quantity :</b>' + data[0].totalqty;
				document.getElementById('tp').innerHTML = '<b>Total price :</b>' + data[0].totalprice;
			} else {
				window.location.assign('/checkouts/new');
			}
		}
	};
	xhttp.open("get", "/reduce/" + a, true);
	xhttp.send();
}

function refresh(a) {
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			console.log('refresh done');
		}
	};
	xhttp.open("GET", '/admin', true);
	xhttp.send();
}

function closemodel() {
	document.getElementById('model').style.display = "none";
	document.getElementsByClassName('model')[0].style.display = "none";
}

function openmodel() {
	var model = document.getElementById('model');
	model.style.display = "flex";
	clickAnywhere("#model", "#model");
}

const model = document.getElementById('model');

var open = function (p) {
	return (p.style.display = "flex");
};
var close = function (p) {
	return (p.style.display = "none");
};

const clickAnywhere = function (a, b) {
	$('body').click(function (event) {
		if (!$(event.target).closest(b).length && !$(event.target).is(a)) {
			$(b).hide();
		}
	});
}; 