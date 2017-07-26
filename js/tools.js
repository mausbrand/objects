$(function() {
	// check if an element exist
	$.fn.elementExist = function() {
		return ($(this).length > 0) === true;
	};
})
