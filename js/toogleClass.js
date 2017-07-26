$(function() {
	// toggle class
	$('[data-toggler]').on('click', function (event) {
		event.preventDefault();

		var dataToggle = $(this).data('toggler');
		var $toggleObj = $(dataToggle);
		var toggleClass = $toggleObj.data('toggle');

		$toggleObj.toggleClass(toggleClass);
	});
})