// Triangle had n number of rows. Each row has one less block than the row below it.
// Create a function that takes n and calculates the total number of blocks in the triangle.

// ex: Triangle with 3 rows:

		  *
		 * *
		* * *

// function returns 6
// BONUS: create the triangle.

var triangular = function(rows) {
	var blocks = 0;
	var stars = '*';
	for (var i = 0; i < rows; i++) {
		blocks = blocks + (i + 1);
		console.log(stars);
		stars = stars.concat(' *');
	};
	return blocks;
};

	// NEXT --->

// Write a function that console logs numbers
// from 1 to 100. But for multiples of 3, print 'fizz',
// for multiples of 5 print 'buzz', and for multiples of both
// 3 and 5, print 'fizz buzz'.

// ex: '1, 2, fizz, 4, buzz...'

var multiples = function() {
	for (var i = 1; i < 101; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			console.log('fizz buzz');
		} else if (i % 3 === 0) {
			console.log('fizz');
		} else if (i % 5 === 0) {
			console.log('buzz');
		} else {
			console.log(i);
		}
	};
};

multiples();

	// NEXT --->

// Write a function that takes a string as an argument and
// determines whether or not the given string is a palindrome.

// examples of palindrome: racecar, acrobats stab orca

var palindromizer = function(str) {

	var noSpaces = str.split(' ').join('').toLowerCase();
	var reverse = noSpaces.split('').reverse().join('');
	
	console.log(noSpaces);
	console.log(reverse);

	if (noSpaces === reverse) {
		return 'Thats a palindrome, sir.';
	} else {
		return 'Thats just a regular old string, dogg.'
	}

};

palindromizer('Racecar');

	// NEXT --->

