$(function () {
	$(".header__menu-btn").click(function () {
		$(".header__menu").toggleClass("active");
		$(".header__menu-btn").toggleClass("active");
	});

	$('.slider__inner').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 600,
		dots: false,
		arrows: false
	});

	(function ($) {
		'use strict';
		var $banner = $('.wrapper');
		if ($banner.length) {
			var $patterns = $banner.find('.slider__item-image');
			var x = 0,
				y = 0;
			$(window).on('mousemove', function (event) {
				x = event.pageX;
				y = event.pageY;
			});
			window.requestAnimationFrame(function animation() {
				$patterns.each(function (key) {
					var modifier = 10 * (key + 1);
					$(this).css({
						'transform': 'translate(' + (x / modifier) + 'px, ' + (y / modifier) + 'px)'
					});
				});
				window.requestAnimationFrame(animation);
			});
		}

	})(jQuery);

});
