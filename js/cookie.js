/* cookie functions */
var cookie = {
	writeCookie: function (name, value, days, path, domain) {
		var expires;

		if (days) {
			var date = new Date();
			date.setTime(date.getTime() + (days*24*60*60*1000));
			expires = '; expires=' + date.toGMTString();
		}
		if (path) {
			path = '; path=' + path;
		}
		if (domain) {
			domain = '; domain=' + domain;
		}

		document.cookie = name + '=' + value + expires + path + domain;
	},

	getCookie: function (name) {
		var	nameEQ = name + '=',
			cookies = document.cookie.split(';');

		for (var i = 0; i < cookies.length; i++) {
			var cookie = cookies[i];
			while (cookie.charAt(0) == ' ') {
				cookie = cookie.substring(1);
			}
			if (cookie.indexOf(nameEQ) == 0) {
				return cookie.substring(nameEQ.length, cookie.length);
			}
		}

		return null;
	},

	deleteCookie: function (name) {
		cookie.writeCookie(name, null, -1);
	}
}
