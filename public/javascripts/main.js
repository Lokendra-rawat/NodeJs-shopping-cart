// @hts-check

(function () {
  var tab = $("#tab")[0];
  var contentBox = $("#content-box")[0];
  try {
    var tabWidth = tab.offsetWidth;
    var boxWidth = contentBox.offsetWidth;
  } catch (e) {
    // console.table(e);
    // silent
  }

  window.onscroll = function () {
    if (window.scrollY > 320) {
      $("#tab").css('position', 'fixed');
      $("#tab").css('width', tabWidth);
    } else {
      $("#tab").css('position', 'static');
    }
  }
}());

(function () {
  var obj = {
    name: 'lokendra',
    game: 'call of duty',
    func: function () {
      return this.name + this.game;
    }
  }
  var loki = function (a) {
    var choki = function () {
      return a;
    }
  }
  loki('some key');
  obj.func();
})();

function getData() {
  $("#loader").css('display', 'inline-block');
  var jqxhr = $.get("/", function (data) {
      console.log('success');
    })
    .done(function (data) {
      console.log(data);
      setTimeout(_ => {
        $("#loader").css("display", "none");
        data.forEach(x => {
          $("#content-box").append('<div class="col-6 col-sm-4 col-lg-3 col-xl-3 boder p-0 outer-box"><div class="box border border-left-0 border-top-0 border-right-0"><img src="images/fkm.jpg" onerror="this.src="images/supreme.jpg"" style="width: 100%;height: auto"><br><p><a href="#">Last 4 Days to Save - Shop For Rs. 250 & Get Flat Rs. 75 Cashback </a></p><div class="box-text"><div class="text-center"><div class="cut-price text-left"><div class="clearfix row"><div class="col"><del>$250 </del> $175</div><div class="col text-right"><a href="https://freekaamaal.com/amazon-coupons">amazon</a></div></div><br></div><button class="btn btn-outline-dark btn-sm">Shop Now</button><br><br></div></div></img></div></div>');
        });
      }, 500);
    })
    .fail(function (err) {
      $("#loader").css("display", "none");
      console.log(err);
    })
    .always(function () {});
}

//CODE FOR THE SEARCH RESULTS XHR
var showResults = debounce(function (arg) {
  var value = arg.trim();
  if (value == "" || value.length <= 0) {
    $("#search-results").fadeOut();
    return;
  } else {
    $("#search-results").fadeIn();
  };
  var jqxhr = $.get('/xhr/search?q=' + value, function (data) {
      $("#search-results").html("");
    })
    .done(function (data) {
      if (data.length === 0) {
        $("#search-results").append('<p class="lead text-center mt-2">No results</p>');
      } else {
        console.table(data);
        $("#search-results").append('<p class="text-center m-0 lead">Stores</p>');
        data.forEach(x => {
          $("#search-results").append('<a href="#"><p class="m-2 mt-0 lead"><img style="width:60px;" src="images/supreme1.jpg" > ' + x.storeName + '</p> </a>');
        });
      }
    })
    .fail(function (err) {
      console.log(err);
    })
}, 300);


function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

// module revaling pattern

var people = (function () {
  var people = ['lil pump', 'rich chigga', 'lil xan', 'lil peep'];

  // caching the DOM
  var $box = $("#box");
  var $button = $box.find('button');
  var $input = $box.find('input');
  var $ul = $box.find('ul');
  var template = function (data) {
    return "<li>" + data + "<span class='float-right badge badge-warning badge-pill btn-xs del'>X</span><span class='float-right badge badge-success badge-pill btn-xs up'>Up</span><span class='float-right badge badge-danger badge-pill btn-xs down'>Down</span></li>";
  }

  //bind events
  $button.on("click", addPerson);
  $ul.delegate("span.del", 'click', delPerson);
  $ul.delegate("span.up", 'click', upPerson);
  $ul.delegate("span.down", 'click', downPerson);

  _render();

  function _render() {
    $ul.html("");
    people.forEach(x => {
      $ul.append(template(x));
    });
  }

  function addPerson(value) {
    var name = (typeof value === "string") ? value : $input.val();
    people.push(name);
    _render();
  }

  function delPerson(event) {
    var $remove = $(event.target).closest('li');
    var i = $ul.find('li').index($remove);
    people.splice(i, 1);
    _render();
  }

  function upPerson(event) {
    var $name = $(event.target).closest('li');
    var i = $ul.find("li").index($name);
    if (i != 0) {
      let bufvalue = people[i];
      people[i] = people[i - 1];
      people[i - 1] = bufvalue;
    }
    _render();
  }

  function downPerson(event) {
    var $name = $(event.target).closest('li');
    var i = $ul.find("li").index($name);
    if (i != people.length - 1) {
      let bufvalue = people[i];
      people[i] = people[i + 1];
      people[i + 1] = bufvalue;
    }
    _render();
  }

  // return the public methods to the api

  return {
    addPerson: addPerson,
    delPerson: delPerson,
    upPerson: upPerson,
    downPerson: downPerson
  }

})();

var Person = function (name) {
  this.name = name
};

// Person.prototype = {};
Person.prototype.method1 = function () {
  return this.name;
}

var john = new Person("john");
console.log(john);