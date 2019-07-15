$(function () {
    var tabContainers = $('div.tabs > div');
    tabContainers.hide();
    $('div.tabs ul.tabNavigation a').hover(function () {
        tabContainers.hide();
        tabContainers.filter(this.hash).show();
        $('div.tabs ul.tabNavigation a').removeClass('selected');
        $(this).addClass('selected');
        return false;
    }).filter(':first').click();
});
$(function () {
    var tabContainers = $('div.tabs2 > div');
    tabContainers.hide();
    $('div.tabs2 ul.tabNavigation a').hover(function () {
        tabContainers.hide();
        tabContainers.filter(this.hash).show();
        $('div.tabs2 ul.tabNavigation a').removeClass('selected');
        $(this).addClass('selected');
        return false;
    }).filter(':first').click();
});

$(document).on('mouseup', function (e){
    var div = $(".product-lists-page .sort .manufacturer-select .select");
    if (!div.is(e.target) 
         && div.has(e.target).length === 0 
         && !$(e.target).is('.product-lists-page .sort .manufacturer-select a'))
    {
        div.hide();
        $('.product-lists-page .sort .manufacturer-select').removeClass('active');
    }
});

$(document).on('mouseup', function (e){
    var div = $(".product-lists-page .sort .sort-select .select");
    if (!div.is(e.target) 
         && div.has(e.target).length === 0 
         && !$(e.target).is('.product-lists-page .sort .sort-select a'))
    {
        div.hide();
        $('.product-lists-page .sort .sort-select').removeClass('active');
    }
});

$(function(){
	$('.fixed-header ul li a.cat-menu').click(function() {
		$(this).toggleClass('active');
		$('.fixed-header ul .categories-menu').slideToggle();
	});
	$('.product-lists-page .list_1 .item .order-block .hide').click(function() {
		$(this).parent().slideToggle();
	});
	$('.product-lists-page .list_1 .item .counts').click(function() {
		$(this).parent().find('.order-block').slideToggle();
	});
	$(window).scroll(function() {
		if($(this).scrollTop() > 280) {
			$('.fixed-header').addClass('opened');
		} else {
			$('.fixed-header').removeClass('opened');
		}
	});
	$('.product-lists-page .sort .sort-select a').click(function() {
		$(this).parent().toggleClass('active');
		$('.product-lists-page .sort .sort-select .select').toggle();
	});
	$('.product-lists-page .sort .manufacturer-select a').click(function() {
		$(this).parent().toggleClass('active');
		$('.product-lists-page .sort .manufacturer-select .select').toggle();
	});
	$('.product-lists-page .sort button').click(function() {
		$(this).toggleClass('active');
		$('.product-lists-page form').toggleClass('opened');
		$('.product-lists-page .list').toggleClass('small');
	});
	$('.product-lists-page form .hidden-link').click(function() {
		$(this).hide();
		$('.product-lists-page form .hidden-list').show();
	});
	$('.mobile-menu .cat-item .close, .mobile-menu .cat-item .back').click(function() {
		$('.mobile-menu .cat-item').fadeOut();
	});
	$('.mobile-menu .cat-menu ul li a').click(function() {
		$('.mobile-menu .cat-item').fadeIn();
	});
	$('.mobile-menu .cat-menu .close').click(function() {
		$('.mobile-menu .cat-menu').fadeOut();
	});
	$('.mobile-menu .second-menu .back').click(function() {
		$('.mobile-menu .second-menu').fadeOut();
	});
	$('.mobile-menu .menu li a.sm-link').click(function() {
		$('.mobile-menu .second-menu').fadeIn();
	});
	$('.mobile-menu .menu li a.cat-link').click(function() {
		$('.mobile-menu .cat-menu').fadeIn();
	});
	$('.mobile-menu .cclose').click(function() {
		$('.mobile-menu').fadeOut();
	});
	$('.header .menu-button, .fixed-header .menu-button, .fixed-header .menu-button').click(function() {
		$('.mobile-menu').fadeIn();
	});
	$('.left-menu-button').click(function() {
		$('.left-menu').slideToggle();
	});
	$('.main-menu ul li a.cat-menu').click(function() {
		$(this).toggleClass('active');
		$('.main-menu ul .categories-menu').slideToggle();
	});
	$('.left-menu .bottom-link').click(function() {
		$(this).hide();
		$('.left-menu ul li.hidden').removeClass('hidden');
	});
	$('.browsed-items').slick({
	  arrows: false,
	  speed: 300,
	  slidesToShow: 1,
	  variableWidth: true
	});
	$('.product-slider').slick({
	  speed: 300,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 767,
	      settings: {
	        slidesToShow: 1,
	        variableWidth: true
	      }
	    }
	  ]
	});
});