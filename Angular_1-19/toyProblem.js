// Write a function called reverse that takes in a string and returns the string reversed.
// Do NOT use .reverse() method on the arrays prototype.

var reverse = function(str) {
	var oldStr = str.split('');
	var newStr = [];
	for (var i = 0; i < oldStr.length; i++) {
		newStr.unshift(oldStr[i]);
	};
	console.log(newStr.join(''));
};

reverse('Hello, Brandon.');