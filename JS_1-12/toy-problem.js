// Toy problem: Monday, Jan 12

var nums = ["hello", "javascript", "awesome"]

var finder = function (argument) {
	for (var i = 0; i < nums.length; i++) {
		if (argument === nums[i]) {
			return true;
		};
	};
	return false;
};

console.log(finder("cool"));