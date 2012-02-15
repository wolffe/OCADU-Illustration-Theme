$(document).ready(function () {

	// uniform year select
	"use strict";
	$("select").uniform();

	// Jump menu business
	$('#illu-jumpmenu').change(function () {
		window.location.href = $(this).val();
	});

	// Sticky Illustrator Information
	var illustratorInfo = $('aside#illustrator-meta');
	var yearTitle = $('h1#year-title');

	if ($('body').hasClass('single')) {
		var top = illustratorInfo.offset().top - parseFloat(illustratorInfo.css('marginTop').replace(/auto/, 0));
	} else if ($('body').hasClass('archive') || $('body').hasClass('search')) {
		var topYeartitle = yearTitle.offset().top - parseFloat(yearTitle.css('marginTop').replace(/auto/, 0));
	}

	$(window).scroll(function (event) {
		// what the y position of the scroll is
		var y = $(this).scrollTop();

		// whether that's below the form
		if (y >= top || y >= topYeartitle) {
			if ($('body').hasClass('single')) {
				illustratorInfo.addClass('fixed');
			} else if ($('body').hasClass('archive') || $('body').hasClass('search')) {
				yearTitle.addClass('fixed');
			}
		} else {
			// otherwise remove it
			if ($('body').hasClass('single')) {
				illustratorInfo.removeClass('fixed');
			} else if ($('body').hasClass('archive') || $('body').hasClass('search')) {
				yearTitle.removeClass('fixed');
			}
		}
	});

	// Masonry for Illustrator Pages
	var gallery = $('.gallery');
	var galleryItems = '.gallery-item';

	gallery.imagesLoaded(function () {
		gallery.masonry({
			isAnimated: true,
			itemSelector: galleryItems,
			// set columnWidth a fraction of the container width
			columnWidth: function (containerWidth) {
				return containerWidth / 2;
			}
		});
	});

	// Footer copyright show hide
	var toggleEle = $('#toggle');
	var footerEle = $('#copyright');


	toggleEle.toggle(function () {
		footerEle.animate({
			marginRight: 0
		});
	}, function () {
		footerEle.animate({
			marginRight: -360
		});
	});

	// Show Hide Search
	var searchField = $('#search');

	searchField.one('click', function () {
		$('#access').addClass('hide');
		$(this).animate({
			width: 200
		}, function () {
			$(this).find('input').animate({
				width: 160
			}).fadeTo('slow', 1);
		});
	});

	// Click black year bar to scroll back to top
	var titleBar = $('#year-title');

	titleBar.on('click', function () {
		$('body,html').animate({
			scrollTop: 0
		}, 400);
		return false;
	});

	// Homepage Load
	function doCascade(delay) {
		$('article').each(function (i) {
			$(this).delay(i * delay).animate({
				marginTop: '0px',
				opacity: .99
			}, 500);
		});
	}

	if ($('body').hasClass('home')) {
		doCascade(300);
	}

	// Loader Spinner for images
	$.fn.spin = function (opts) {
		this.each(function () {
			var $this = $(this),
				data = $this.data();
			if (data.spinner) {
				data.spinner.stop();
				delete data.spinner;
			}
			if (opts !== false) {
				data.spinner = new Spinner($.extend({
					color: '#FF6666'
				}, opts)).spin(this);
			}
		});
		return this;
	};

	$('.gallery').spin({
		width: 2
	});

	$(window).load(function () {
		$('.gallery').spin(false);
		$('.gallery').find('img').fadeTo('fast', 1);
	});

	// Keyboard Shortcuts
	$(document.documentElement).keyup(function (event) {
		// handle cursor keys, illustrator, work navigation
		if (event.keyCode === 37 && ($('.nav-previous a').length)) {
			window.location = $('.nav-previous a').attr('href');
		} else if (event.keyCode === 39 && ($(".nav-next a").length)) {
			window.location = $('.nav-next a').attr('href');
		}
	});

});