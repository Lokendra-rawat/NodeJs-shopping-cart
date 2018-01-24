var str_load = '<div id="loading_loader_store_new" class="text-center pull-left width-100 txt-12" style="height: 30px; display: block;">Loading... &nbsp;&nbsp;<img alt="" src="https://images.freekaamaal.com/common-images/ajax-loader.gif" style="vertical-align: middle;"></div>';

function display_site_names(a) {
	document.getElementById("fkm_store_sites_namelist").style.display = "block", document.getElementById("fkm_store_sites_character").innerHTML = a;
	var b = document.getElementById("fkm_store_sites_list").getElementsByTagName("ul")[0],
		c = b.getElementsByTagName("li"),
		d = 0,
		e = 0;
	if ("All Stores" == a)
		for (c[0].style.display = "none", d = 1; d < c.length;) c[d].style.display = "list-item", d++;
	else if ("0-9" == a) {
		for (d = 1, e = 0; d < c.length;) c[d].getElementsByTagName("a")[0].innerHTML.charAt(0).search(/[0-9]/i) == -1 ? c[d].style.display = "none" : (e = 1, c[d].style.display = "list-item"), d++;
		0 == e ? c[0].style.display = "list-item" : c[0].style.display = "none"
	} else {
		for (d = 1, e = 0; d < c.length;) c[d].getElementsByTagName("a")[0].innerHTML.charAt(0) == a || c[d].getElementsByTagName("a")[0].innerHTML.charAt(0) == a.toLowerCase() ? (e = 1, c[d].style.display = "list-item") : c[d].style.display = "none", d++;
		0 == e ? c[0].style.display = "list-item" : c[0].style.display = "none"
	}
}

function hide_website_list() {
	document.getElementById("fkm_store_sites_namelist").style.display = "none"
}

function internal_display_site_names(a) {
	document.getElementById("fkm_store_internal_sites_namelist").style.display = "block", document.getElementById("fkm_store_internal_sites_character").innerHTML = a, document.getElementById("spanlist").style.display = "block";
	var b = document.getElementById("fkm_store_internal_sites_list").getElementsByTagName("ul")[0],
		c = b.getElementsByTagName("li"),
		d = 0,
		e = 0;
	if ("All Stores" == a)
		for (c[0].style.display = "none", d = 1; d < c.length;) c[d].style.display = "list-item", d++;
	else if ("0-9" == a) {
		for (d = 1, e = 0; d < c.length;) c[d].getElementsByTagName("a")[0].innerHTML.charAt(0).search(/[0-9]/i) == -1 ? c[d].style.display = "none" : (e = 1, c[d].style.display = "list-item"), d++;
		0 == e ? c[0].style.display = "list-item" : (document.getElementById("spanlist").style.display = "block", c[0].style.display = "none")
	} else {
		for (d = 1, e = 0; d < c.length;) c[d].getElementsByTagName("a")[0].innerHTML.charAt(0) == a || c[d].getElementsByTagName("a")[0].innerHTML.charAt(0) == a.toLowerCase() ? (e = 1, c[d].style.display = "list-item") : (document.getElementById("spanlist").style.display = "block", c[d].style.display = "none"), d++;
		0 == e ? c[0].style.display = "list-item" : (document.getElementById("spanlist").style.display = "block", c[0].style.display = "none")
	}
}

function internal_hide_website_list() {
	document.getElementById("fkm_store_internal_sites_namelist").style.display = "none"
}

function get_store_discussion(a) {
	if ($("#nodata").html('<div class="width-100 text-center pull-left"><img src="' + img_base_url + 'common-images/ajax-loader.gif" style="margin:20px auto"/></div>'), parseInt(a) > 0) {
		$("#page_type").val("discussion");
		var b = $("#store_id").val();
		$.ajax({
			type: "POST",
			dataType: "html",
			async: !1,
			data: "option=discussion&page=1",
			url: base_url + "internal/" + b,
			success: function (a) {
				if ("" != a.trim()) {
					$("#nodata").html(""), $("#store-deal").html(a), $("#store-deal").masonry({
						itemSelector: ".mydeal_center",
						columnWidth: 2,
						isAnimated: !1,
						animationOptions: {
							duration: 700,
							easing: "linear"
						}
					}).imagesLoaded(function () {
						$("#store-deal").masonry("reload")
					});
					$(a);
					$("#store-deal").masonry("reload"), page = 2
				} else $("#nodata").html(""), $("#page_type").val("discussion"), $("#store-deal").html('<p class="txt-14 text-center" style="line-height: 28px;">Sorry! No Data Available</p><div id="nodata1"></div>')
			}
		})
	} else $("#nodata").html(""), $("#page_type").val("discussion"), $("#store-deal").html('<p class="txt-14 text-center" style="line-height: 28px;">Sorry! No Data Available</p><div id="nodata1"></div>')
}

function get_store_brand(a) {
	if ($("#store-deal").css("overflow", ""), $("#store-deal").css("height", "auto"), $("#nodata").html('<div class="width-100 text-center pull-left"><img src="' + img_base_url + 'common-images/ajax-loader.gif" style="margin:20px auto"/></div>'), parseInt(a) > 0) {
		$("#page_type").val("brand");
		var b = $("#store_id").val();
		$.ajax({
			type: "POST",
			dataType: "html",
			async: !1,
			data: "option=brand&page=1",
			url: base_url + "internal/" + b,
			success: function (a) {
				"" != a.trim() ? ($("#nodata").html(""), $("#store-deal").html(a), page = 2) : ($("#nodata").html(""), $("#store-deal").html('<p class="txt-14 text-center" style="line-height: 28px;">Sorry! No Data Available</p><div id="nodata1"></div>'), $("#page_type").val("brand"))
			}
		})
	} else $("#nodata").html(""), $("#store-deal").html('<p class="txt-14 text-center" style="line-height: 28px;">Sorry! No Data Available</p><div id="nodata1"></div>'), $("#page_type").val("brand")
}

function get_store_deals(a) {
	if ($("#store-deal").css("height", "auto"), $("#store-deal").css("overflow", ""), $("#nodata").html('<div class="width-100 text-center pull-left"><img src="' + img_base_url + 'common-images/ajax-loader.gif" style="margin:20px auto"/></div>'), parseInt(a) > 0) {
		$("#page_type").val("store");
		var b = $("#store_id").val();
		$.ajax({
			type: "POST",
			dataType: "html",
			async: !1,
			data: "option=pagination&page=1",
			url: base_url + "internal/" + b,
			success: function (a) {
				"" != a.trim() ? ($("#nodata").html(""), $("#store-deal").html(a), page = 2) : ($("#nodata").html(""), $("#store-deal").html('<p class="txt-14 text-center" style="line-height: 28px;">Sorry! No Data Available</p><div id="nodata1"></div>'), $("#page_type").val("store"))
			}
		})
	} else $("#nodata").html(""), $("#store-deal").html('<p class="txt-14 text-center" style="line-height: 28px;">Sorry! No Data Available</p><div id="nodata1"></div>'), $("#page_type").val("store")
}

function get_store_review(a, b, c) {
	$("#store-deal").css("height", "auto"), $("#nodata").html(""), $("#page_type").val("reviews");
	$.post(base_url + "store_review", {
			option: "review",
			reviews_count: b,
			rating: c,
			store_id: a
		},
		function (a) {
			$("#store-deal").html(a), page = 2
		})
}

function get_store_review_pagination(a) {
	$(".load_Review").html("Loading....."), "reviews" == $("#page_type").val() && "no" != page && $.ajax({
		type: "POST",
		dataType: "html",
		async: !1,
		data: "option=pagination&page=" + page + "&store_id=" + a,
		url: base_url + "store_review",
		success: function (a) {
			"noreview" == a.trim() ? (page = "no", $(".load_Review").html("No More Review")) : ($(".load_Review").html("Load More Reviews"), $("#ajaxreview").append(a), page++)
		}
	})
}

function submit_store_review() {
	var a = $("#store_rev_rating").val().trim(),
		b = $("#store_id").val(),
		c = $("#reviewtitle").val(),
		d = $("#revcomment").val();
	return "0" == a ? ($("#successreview").html("Please Give Rating For Review ").css("background-color", "#e74c3c").fadeIn(500).fadeOut(1500), !1) : "" == c ? ($("#successreview").html("Please Fill Title Of Review ").css("background-color", "#e74c3c").fadeIn(500).fadeOut(1500), !1) : "" == d ? ($("#successreview").html("Please Fill Description Of Review ").css("background-color", "#e74c3c").fadeIn(500).fadeOut(1500), !1) : void $.ajax({
		type: "POST",
		dataType: "html",
		async: !1,
		data: "option=review&store_id=" + b + "&review_title=" + c + "&review_rating=" + a + "&review_desc=" + d,
		url: base_url + "store/" + b + "/" + "submit-review",
		success: function (a) {
			1 == a ? ($("#successreview").html("You have successfully submitted your review.").css("background-color", "#1abc9c").fadeIn(500).fadeOut(1e3), $("#store_rev_rating").val("0"), $(".rat_star").removeClass("highstar").addClass("blankstar"), $("#review_form").trigger("reset"), setTimeout(function () {
				$("#ratereview").modal("hide");
				$(".modal-backdrop").hide(0);
			}, 3e3)) : ($("#successreview").html("You have already submitted your review").css("background-color", "#e74c3c").fadeIn(500).fadeOut(1e3), $("#store_rev_rating").val("0"), $(".rat_star").removeClass("highstar").addClass("blankstar"), $("#review_form").trigger("reset"), setTimeout(function () {
				$("#ratereview").modal("hide");
				$(".modal-backdrop").hide(0);
			}, 3e3))
		}
	})
}

function set_rating(a, b) {
	$(a).removeClass("blankstar").addClass("highstar"), $(a).nextAll(".smstar").removeClass("highstar").addClass("blankstar"), $(a).prevAll(".smstar").removeClass("blankstar").addClass("highstar"), $("#store_rev_rating").val(b)
}
var page = 2,
	ratings = 0,
	requestIsRunning = !1;
$(document).ready(function () {
	// $(window).scroll(function() {
	//     $(window).scrollTop() >= $(document).height() - ($(window).height() + 1600) && (requestIsRunning || (requestIsRunning = !0, void 0 == $("#nodata1").html() && store_deal_pagination1(), requestIsRunning = !1))
	// })
}), $(document).ready(function () {
	$(".storedetail li a").click(function () {
		$(".storedetail li a").removeClass("active"), $(this).addClass("active")
	})
}), $(document).ready(function () {
	$(".glyphblank").bind({
		mouseenter: function () {
			$(this).prevAll().addBack().attr("class", "glyphhigh glyphicon glyphicon-star")
		},
		mouseleave: function () {
			$(".glyphicon-star").attr("class", "glyphblank glyphicon glyphicon-star")
		},
		click: function () {
			$(".glyphicon-star").attr("class", "glyphblank glyphicon glyphicon-star"), $(this).prevAll().addBack().attr("class", "glyphhigh glyphicon glyphicon-star"), $(".glyphicon-star").off("mouseenter").off("mouseleave"), ratings = $(this).prevAll().addBack().length
		}
	})
});

function load_more_on_button_click_store() {
	store_deal_pagination();
}

function store_deal_pagination() {
	$('#load_button_wrapper').css('display', 'block');
	var a = $("#page_type").val(),
		b = $("#store_post_count").val();
	if ("store" == a && "0" != b && "no" != page) {
		$("#nodata").html('<div class="width-100 text-center pull-left">Loading...&nbsp;&nbsp;<img src="' + img_base_url + 'common-images/ajax-loader.gif" style="margin:20px auto"/></div>');
		var c = $("#store_id").val();
		$.ajax({
			type: "POST",
			dataType: "text",
			async: !1,
			data: "option=pagination&page=" + page,
			url: base_url + "internal/" + c,
			success: function (a) {
				"no" == a.trim() ? (page = "no", $("#nodata").html('<p class="txt-14 text-center" style="line-height: 28px;">Sorry! No More Data Available</p>'), $('#load_button_wrapper').css('display', 'none')) : ($("#nodata").html(''), $("#store-deal").append(a), page += 1)
			}
		})
	} else if ("discussion" == a && "no" != page) {
		$("#nodata").html('<div class="width-100 text-center pull-left">Loading...&nbsp;&nbsp;<img src="' + img_base_url + 'common-images/ajax-loader.gif" style="margin:20px auto"/></div>');
		var c = $("#store_id").val();
		$.ajax({
			type: "POST",
			dataType: "text",
			async: !1,
			data: "option=dis_pagination&page=" + page,
			url: base_url + "internal/" + c,
			success: function (a) {
				"no" == a.trim() ? (page = "no", $("#nodata").html('<p class="txt-14 text-center" style="line-height: 28px;">Sorry! No More Data Available</p>'), $('#load_button_wrapper').css('display', 'none')) : ($("#nodata").html(''), $data = $(a), $("#store-deal").append($data).masonry("appended", $data, !0), $("#store-deal").masonry("reloadItems"), page++)
			}
		})
	} else if ("brand" == a && "no" != page) {
		$("#nodata").html('<div class="width-100 text-center pull-left">Loading...&nbsp;&nbsp;<img src="' + img_base_url + 'common-images/ajax-loader.gif" style="margin:20px auto"/></div>');
		var c = $("#store_id").val();
		$.ajax({
			type: "POST",
			dataType: "text",
			async: !1,
			data: "option=brand_pagination&page=" + page,
			url: base_url + "internal/" + c,
			success: function (a) {
				"no" == a.trim() ? (page = "no", $("#nodata").html('<p class="txt-14 text-center" style="line-height: 28px;">Sorry! No More Data Available</p>'), $('#load_button_wrapper').css('display', 'none')) : ($("#nodata").html(''), $("#store-deal").append(a), page++)
			}
		})
	}
}


function filter(type, id) {

	$('input:checkbox').removeAttr('checked');
	if (type == 'deals') {

		$('#my-tab-content').html(str_load);
		$.get('/store/' + id + '/' + type, function (data) {
			$('#my-tab-content').html(data);
		});
		$("#deal-type-tab").addClass('active');
		$("#all-type-tab").removeClass('active');
		$("#offer-type-tab").removeClass('active');
		$("#coupon-type-tab").removeClass('active');
		$("#review-type-tab").removeClass('active');

	} else if (type == 'reviews') {
		$('#my-tab-content').html(str_load);
		$.get('/store/' + id + '/' + type, function (data) {
			$('#my-tab-content').html(data);
		});
	} else {
		$('#tab_type').val(type);
		if ($('.items').length) {
			if ($('#viewcompact').val() != 1) {
				var cats = filter_deals(type);
				//alert(cats);
				filter_category(cats, type);
			} else {
				//$('#my-tab-content').html(str_load);
				$.get('/store/' + id + '/' + type, function (data) {
					$('#my-tab-content').html(data);
					var cats = filter_deals(type);
					filter_category(cats, type);
				});
			}
		} else {
			// alert('no'); 
			$('#my-tab-content').html(str_load);
			$.get('/store/' + id + '/' + type, function (data) {
				$('#my-tab-content').html(data);
				var cats = filter_deals(type);
				filter_category(cats, type);
			});
		}
		if (type == 'coupons') {
			$("#item_type_title").html("Coupons");
		} else if (type == 'offers') {
			$("#item_type_title").html("Offers");
		} else if (type == 'all') {
			$("#item_type_title").html("Offers & Coupons");
			$("#deal-type-tab").removeClass('active');
			$("#all-type-tab").addClass('active');
			$("#offer-type-tab").removeClass('active');
			$("#coupon-type-tab").removeClass('active');
			$("#review-type-tab").removeClass('active');
		}
		//$("#offer-type-tab").removeClass('active');        
		//$("#coupon-type-tab").removeClass('active');
	}
	$("#tabs").focus();
}

function filter_category(cats, type) {
	//alert(cats); 
	if (cats != null) {
		$("#categories-div").show();
		$("#news-subscribe").removeClass('subscr-replace-m');
		$(".cat_class").hide();
		cats = cats.split(',');
		for (i = 0; i < cats.length; i++) {
			// alert("'"+"#cat_list_"+cats[i]+"'");
			$("#cat_list_" + cats[i]).show();
		}
	} else {
		$(".cat_class").hide();
		$("#categories-div").hide();
		$("#news-subscribe").addClass('subscr-replace-m');
	}
}

function filter_offer_coupon_by_category() {
	//var cts=null; //get all selected categories
	var type = null; //
	var count_items = 0;
	var count_items1 = 0;
	var count_items2 = 0;
	type = $('#tab_type').val();
	var cts = '';
	$("input[name='filters_cat[]']").each(function () {
		if ($(this).prop('checked') == true) {
			if (cts != '') {
				cts = cts + ',' + $(this).val();
			} else {
				cts = $(this).val();
			}
		}
	});
	if (cts != '')
		var data_cts_arr = cts.split(',');

	if (type == 'offers') {
		$('.items').each(function () {
			$(this).hide(0);

			if ($(this).attr('data-type') == '0') {
				var data_element_cts_arr = $(this).attr('data-categories').split(',');
				if (cts == '') {
					count_items = parseInt(count_items) + 1;
					$(this).show(0);
				} else {
					for (var i = 0; i < data_element_cts_arr.length; ++i) {
						if (jQuery.inArray(data_element_cts_arr[i], data_cts_arr) != -1) {
							count_items = parseInt(count_items) + 1;
							$(this).show(0);
							break;
						}
						//~ else
						//~ {
						//~ count_items = parseInt(count_items) + 1;
						//~ $(this).show(0);
						//~ }
					}
				}
			} else {
				var data_element_cts_arr = $(this).attr('data-categories').split(',');
				if (cts == '') {
					count_items1 = parseInt(count_items1) + 1;
					//~ $(this).show(0);
				} else {
					for (var i = 0; i < data_element_cts_arr.length; ++i) {
						if (jQuery.inArray(data_element_cts_arr[i], data_cts_arr) != -1) {
							count_items1 = parseInt(count_items1) + 1;
							//~ $(this).show(0);
							break;
						}
						//~ else
						//~ {
						//~ count_items = parseInt(count_items) + 1;
						//~ $(this).show(0);
						//~ }
					}
				}
			}

		});
		$('#offer-num').html('(' + count_items + ')');
		$('#coupon-num').html('(' + count_items + ')');
	} else if (type == 'coupons') {
		$('.items').each(function () {
			$(this).hide(0);

			if ($(this).attr('data-type') == '1') {
				var data_element_cts_arr = $(this).attr('data-categories').split(',');
				if (cts == '') {
					count_items = parseInt(count_items) + 1;
					$(this).show(0);
				} else {
					for (var i = 0; i < data_element_cts_arr.length; ++i) {
						if (jQuery.inArray(data_element_cts_arr[i], data_cts_arr) != -1) {
							count_items = parseInt(count_items) + 1;
							$(this).show(0);
							break;
						}
						//~ else
						//~ {

						//~ $(this).show(0);
						//~ }
					}
				}
			} else {
				var data_element_cts_arr = $(this).attr('data-categories').split(',');
				if (cts == '') {
					count_items1 = parseInt(count_items1) + 1;
					//$(this).show(0);
				} else {
					for (var i = 0; i < data_element_cts_arr.length; ++i) {
						if (jQuery.inArray(data_element_cts_arr[i], data_cts_arr) != -1) {
							count_items1 = parseInt(count_items1) + 1;
							//$(this).show(0);
							break;
						}
						//~ else
						//~ {

						//~ $(this).show(0);
						//~ }
					}
				}
			}
		});
		$('#coupon-num').html('(' + count_items + ')');
		$('#offer-num').html('(' + count_items1 + ')');
	} else {
		$('.items').each(function () {

			$(this).hide(0);

			var data_element_cts_arr = $(this).attr('data-categories').split(',');
			if (cts == '') {
				count_items = parseInt(count_items) + 1;
				if ($(this).attr('data-type') == '1') {
					count_items1++
				} else {
					count_items2++
				}
				$(this).show(0);
			} else {
				for (var i = 0; i < data_element_cts_arr.length; ++i) {
					if (jQuery.inArray(data_element_cts_arr[i], data_cts_arr) != -1) {
						count_items = parseInt(count_items) + 1;
						$(this).show(0);
						if ($(this).attr('data-type') == '1') {
							count_items1++
						} else {
							count_items2++
						}
						break;
					}
					//~ else
					//~ {
					//~ count_items = parseInt(count_items) + 1;
					//~ $(this).show(0);
					//~ }
				}
			}
		});

		$('#all-num').html('(' + count_items + ')');
		$('#coupon-num').html('(' + count_items1 + ')');
		$('#offer-num').html('(' + count_items2 + ')');
	}
}


function filter_deals(type) {
	var cats = null;
	var count_items = 0;

	if (type == 'all') {
		$('.items').each(function () {
			count_items = parseInt(count_items) + 1;
			if ($(this).attr('data-type') == 1) {
				$(this).show(0);
			}
			if ($(this).attr('data-type') == 0) {
				$(this).show(0);
			}
			if ($(this).attr('data-categories') != '') {
				if (cats == null) {
					cats = $(this).attr('data-categories');
				} else {
					cats = cats + "," + $(this).attr('data-categories');
				}
			}
		});
		$('#all-num').html('(' + count_items + ')');

	} else if (type == 'coupons') {
		$('.items').each(function () {
			if ($(this).attr('data-type') == 1) {
				if ($(this).attr('data-categories') != '') {
					if (cats == null) {
						cats = $(this).attr('data-categories');
					} else {
						cats = cats + "," + $(this).attr('data-categories');
					}
				}
				count_items = parseInt(count_items) + 1;
				$(this).show(0);
			}
			if ($(this).attr('data-type') == 0) {
				$(this).hide(0);
			}
		});
		$('#coupon-num').html('(' + count_items + ')');
	} else if (type == 'offers') {
		$('.items').each(function () {
			if ($(this).attr('data-type') == 1) {
				$(this).hide(0);
			}
			if ($(this).attr('data-type') == 0) {
				if ($(this).attr('data-categories') != '') {
					if (cats == null) {
						cats = $(this).attr('data-categories');
					} else {
						cats = cats + "," + $(this).attr('data-categories');
					}
				}
				count_items = parseInt(count_items) + 1;
				$(this).show(0);
			}
		});
		$('#offer-num').html('(' + count_items + ')');
	}
	if (count_items == 0) {
		//alert(0);
		$("#not-found-div").show();
	} else {
		//alert(1);
		$("#not-found-div").hide();
	}
	return cats;
}





function store_load_more_review() {
	str_load = '<div id="loading_loader_store_new" class="text-center col-md-12 pull-right txt-12" style="height: 30px; display: block;">Loading... &nbsp;&nbsp;<img alt="" src="https://images.freekaamaal.com/common-images/ajax-loader.gif" style="vertical-align: middle;"></div>';
	$('#no_dt_wrap_store_hot').html(str_load).show(0);
	$('#load_more_wrap_store_hot').hide(0);
	var url_to_hit = $('#more_store_hot').attr('csu');
	var page = $('#more_store_hot').attr('page');
	if (page != '0') {
		$('#review_store').append(str_load);
		$.ajax({
			type: "POST",
			dataType: "html",
			data: "page=" + page,
			url: url_to_hit,
			success: function (a) {
				$('body').find('#loading_loader_store_new').remove();
				if (a.trim() != '1') {
					page = parseInt(page) + 1;
					$('#review_store').append(a);
					$('#no_loading_store_hot').hide(0);
					$('#more_store_hot').attr('page', page);
					$('#load_more_wrap_store_hot').show(0);
				} else {
					page = 0;
					$('#more_store_hot').attr('page', page);
					$('#no_dt_wrap_store_hot').html('No more review ');
					$('#no_dt_wrap_store_hot').show(0);
				}
			}
		})
	}
}


function store_load_more_hot() {
	str_load = '<div id="loading_loader_store_new" class="text-center col-md-12 pull-right txt-12" style="height: 30px; display: block;">Loading... &nbsp;&nbsp;<img alt="" src="https://images.freekaamaal.com/common-images/ajax-loader.gif" style="vertical-align: middle;"></div>';
	var cts = '';
	$("input[name='cats_filter[]']").each(function () {
		if ($(this).prop('checked') == true) {
			if (cts != '') {
				cts = cts + ',' + $(this).val();
			} else {
				cts = $(this).val();
			}
		}
	});

	// $('#no_loading_store_hot').html('loading...').show(0);
	$('#load_more_wrap_store_hot').hide(0);
	var url_to_hit = $('#more_store_hot').attr('csu');
	var page = $('#more_store_hot').attr('page');
	if (page != '0') {
		$('#hot_deals_store').append(str_load);
		$.ajax({
			type: "POST",
			dataType: "html",
			data: "page=" + page + "&cats=" + cts,
			url: url_to_hit,
			success: function (a) {

				$('body').find('#loading_loader_store_new').remove();
				if (a.trim() != '1') {
					page = parseInt(page) + 1;
					$('#hot_deals_store').append(a);
					$('#more_store_hot').show(0);
					$('#no_dt_wrap_store_hot').hide(0);
					$('#more_store_hot').attr('page', page);
					$('#load_more_wrap_store_hot').show(0);
				} else {
					page = 0;
					$('#more_store_hot').attr('page', page);
					$('#more_store_hot').hide(0);
					$('#no_dt_wrap_store_hot').show(0);
					$('#no_loading_store_hot').show(0);
				}

			}
		})
	}
}


function get_deals_cat_store() {
	str_load = '<div id="loading_loader_store_new" class="text-center col-md-12 txt-12 pull-right" style="height: 30px; display: block;">Loading... &nbsp;&nbsp;<img alt="" src="https://images.freekaamaal.com/common-images/ajax-loader.gif" style="vertical-align: middle;"></div>';

	$("body").find("#real_time_count").remove();
	var cts = '';
	$("input[name='cats_filter[]']").each(function () {
		if ($(this).prop('checked') == true) {
			if (cts != '') {
				cts = cts + ',' + $(this).val();
			} else {
				cts = $(this).val();
			}
		}
	});

	// $('#no_loading_store_hot').html('loading...').show(0);
	$('#load_more_wrap_store_hot').hide(0);
	var url_to_hit = $('#more_store_hot').attr('csu');
	var page = 1;
	if (page != '0') {
		$('#hot_deals_store').html(str_load);

		$.ajax({
			type: "POST",
			dataType: "html",
			async: !1,
			data: "page=" + page + "&cats=" + cts + "&frst=1",
			url: url_to_hit,
			success: function (a) {
				$('body').find('#loading_loader_store_new').remove();
				if (a.trim() != '1') {
					page = parseInt(page) + 1;
					$('#hot_deals_store').html('');
					$('#hot_deals_store').html(a);
					$('#no_loading_store_hot').hide(0);
					$('#more_store_hot').attr('page', page);
					$('#load_more_wrap_store_hot').show(0);
					$('#more_store_hot').show(0);
				} else {
					page = 0;
					$('#more_store_hot').attr('page', page);
					$('#no_dt_wrap_store_hot').show(0);
				}
				var real_count = $("#real_time_count").val();
				console.log(real_count);
				$('#deal-num').html('(' + $("#real_time_count").val() + ')');
			}
		})
	}

}

function like_coupon(id) {
	$.get('/coupon-code/like/' + id, function (data) {
		if (data.trim() == '1') {
			$('#like_hand_' + id).css('color', '#FB6780');
			$('#like_count_' + id).css('color', '#FB6780')
			$('#like_count_' + id).next('span').css('color', '#FB6780');
			$('#like_count_' + id).html(parseInt($('#like_count_' + id).html()) + 1);
			$('#like_count_' + id).next('span').html('Liked');
		} else {

		}
	})
}

function subcribe_coupon() {

	var foot_email = $('#coupon_newsletters').val().trim();
	if (foot_email.trim() != '') {
		var x = foot_email;
		var atpos = x.indexOf("@");
		var dotpos = x.lastIndexOf(".");
		if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {

			alert('Please enter valid email id');
			$('#coupon_newsletters').val('');
			return false;
		} else {
			$.post(base_url + 'user/subscribe-mailer', {
					'user_email': foot_email
				},
				function (data) {

					if (data.trim() == '2') {
						alert('Please enter valid email id');
						$('#coupon_newsletters').val('');
						return false;
					} else if (data.trim() == 'confirmed') {

						alert('You have already subscribed');
						$('#coupon_newsletters').val('');
						return false;
					} else if (data.trim() == 'notconfirmed' || data.trim() == 'created') {

						alert('We have sent you an email with verification link please follow instrunctions in email to confirm your newsletter account');
						$('#coupon_newsletters').val('');
						return false;
					} else if (data.trim() == 'notconfirmed') {

						alert('We have sent you an email with verification link please follow instrunctions in email to confirm your newsletter account');
						$('#coupon_newsletters').val('');
						return false;
					} else {
						$('.dealsuberror').html('Something went wrong please try again later').fadeIn(0).fadeOut(3000);
						alert('Something went wrong please try again later');
						$('#coupon_newsletters').val('');
						setTimeout(function () {
							location.reload();
						}, 3500);
						return false;
					}
				}
			);
		}
	} else {
		alert('Please enter email to subscribe.');
		$('#coupon_newsletters').val('');
		return false;
	}
}