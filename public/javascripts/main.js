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

function addToCart(a) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			let data = JSON.parse(this.responseText);
			console.log(data);
			document.getElementById('cartInfo').innerText = data.totalqty;
		}
	};
	xhttp.open("GET", "/add-to-cart/" + a, true);
	xhttp.send();
}


function loadDoc(a) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			let data = JSON.parse(this.responseText);
			console.log(data)
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

function update(a) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			let data = JSON.parse(this.responseText);
			console.log(data)
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

function del(a) {
	var xhttp = new XMLHttpRequest();
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

function refresh(a) {
	var xhttp = new XMLHttpRequest();
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
}
const model = document.getElementById('model');

var open = function (p) {
	return p.style.display = "flex";
}
var close = function (p) {
	return p.style.display = "none";
}