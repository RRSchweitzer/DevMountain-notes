replaceOdd([1,2,3,4,5,6,7,8,9,10]);

['O', 2, 'O', 4, 'O', 6, 'O', 8, 'O', 10]

// Write a function named replaceOdd that takes in 
// an array of numbers, and changes all of the 
// odd numbers to the letter O.

var replaceOdd = function(arr) {
	for (var i = arr.length -1; i >= 0; i--) {
		if (arr[i] % 2 === 1) {
			arr[i] = 'O';
		};
	};
	console.log(arr);
};

replaceOdd([1,2,3,4,5,6,7,8,9,10]);