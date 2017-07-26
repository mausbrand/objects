$(function() {
	// scroll to an element
	// #TODO add offset
	$.fn.scrollTo = function (options) {
		options = $.extend({
			speed: 1000,
			easing: 'swing',
			onScrollStart: $.noop,
			onScrollEnd: $.noop
		}, options);

		// scroll only to the first element
		$this = $(this[0]);

		if(!$this.offset() && !$this.offset().top) {
			return this;
		}

		var thisTop = $this.offset().top;
		var bodyTop = $('body').offset().top;
		var place = thisTop - bodyTop;

		// need to avoid trigger callback twice, caused by the double animation of body,html
		var triggeredStartCallback = triggeredEndCallback = false;

		$('html,body').animate({
			scrollTop: place
		}, {
			duration: options.speed,
			easing: options.easing,
			start: function() {
				if (!triggeredStartCallback) options.onScrollStart.call(null, $this, null);
				triggeredStartCallback = true;
			},
			complete: function() {
				if (!triggeredEndCallback) options.onScrollEnd.call(null, $this, null);
				triggeredEndCallback = true;
			}
		});

		return this;
	};


	// enable scroll anchor for an element
	$.fn.scrollAnchor = function (options) {
		this.on('click', function(event) {
			event.preventDefault();

			var $this = $(this);

			if (!!$this.data('target'))
				var target = $this.data('target');
			else if (!!$this.prop('href'))
				var target = $this.prop('href');
			else
				return console.error('No Scroll Target');

			return $(target).scrollTo(options);
		});
	};


	// toggle class
	$('[data-scroll-target]').on('click', function (event) {
		event.preventDefault();

		var target	= $(this).data('scroll-target');
		var speed	= $(this).data('scroll-speed');
		var easing	= $(this).data('scroll-easing');
		var $target	= $(target);
		var options = {};

		if (typeof speed != 'undefined') options.speed = speed;
		if (typeof easing != 'undefined') options.easing = easing;

		$target.scrollTo(options);
	});
})
