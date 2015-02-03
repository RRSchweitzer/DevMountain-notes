// Create a function that takes in three strings as parameters. The goal
// is to swap all x characters in the string for y characters.
// ex:
// 	swapper('some string', 's', 'z');
// 	returns 'zome ztring'.

var swapper = function(str, xChar, yChar) {
	var arr = str.split('');
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === xChar) {
			arr.splice(i, 1, yChar);
		}
	};
	return arr.join('');
};

swapper('some string', 's', 'z');