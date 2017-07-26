var root = function (base, decimals) {
	return Math.pow(base, 1 / decimals);
};
Math.root = Math.root || root;
