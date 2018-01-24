//@ts-check

(function () {
  var tab = $("#tab")[0];
  var contentBox = $("#content-box")[0];
  var tabWidth = tab.offsetWidth;
  var boxWidth = contentBox.offsetWidth;
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
          $("#content-box").append('<div class="col-6 col-sm-4 col-lg-3 col-xl-3 p-0 outer-box"><div class="box border"><img src="images/fkm.jpg" style="width: 100%;"><br><p><a href="#">Last 4 Days to Save - Shop For Rs. 250 & Get Flat Rs. 75 Cashback </a></p><div class=""><div class=""><p class="cut-price"><del><i>₹</i>250 </del><i>₹</i>175<div class="text-right"><p class="store-name"><a href="https://freekaamaal.com/amazon-coupons">amazon</a></p></div></p><p class="main-price"><i> ₹ </i>' + x + '</p></div></div></br></img></div></div>');
        });
      }, 500);
    })
    .fail(function (err) {
      $("#loader").css("display", "none");
      console.log(err);
    })
    .always(function () {});
}

var showResults = debounce(function (arg) {
  var value = arg.trim();
  if (value == "" || value.length <= 2) {
    $("#search-results").fadeOut();
    return;
  }
  // else if (value.length <= 2) return;
  else {
    $("#search-results").fadeIn();
  };

  // $("#search-loader").show();
  var jqxhr = $.get('/xhr/search?q=' + value, function (data) {
      $("#search-results").html("");
    })
    .done(function (data) {
      console.log(data);
      // $("#search-loader").hide();

      if (data.length === 0) {
        $("#search-results").append('<p class="lead text-center mt-2">No results</p>');
      } else {
        data.forEach(x => {
          $("#search-results").append('<a href="#"><p class="m-2 lead"><img style="width:60px;" src="images/fkm.jpg" > ' + x.storeName + '</p> </a>');
        });
      }
    })
    .fail(function (err) {
      console.log(err);
    })
}, 200);

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
