// Write a function called reverse that takes in a string and returns the string reversed.
// Do NOT use .reverse() method on the arrays prototype.


		// NEXT PROBLEM --->

// Write a function that returns the factorial of a number.
// the number 5 will return 5*4*3*2*1


		// NEXT PROBLEM --->

// Write a function called simpleSymbols that takes in a string parameter and determines
// if it is an acceptable sequence by either returning the string true or false. The str
// parameter will be composed of + and = symbols with several letters between them 
// (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a 
// + symbol. So the string to the left would be false. The string will not be empty and will
// have at least one letter.


		// NEXT PROBLEM --->

// Given an arbitrary input string, return the first non-repeated character in the string.
// For example: firstNonRepeatedCharacter('ABA'); => 'B'


		// NEXT PROBLEM --->

// Write a function called ABCheck that takes a string
// parameter and return the string true if the characters a and
// b are separated by exactly 3 places anywhere in the string
// at least once (ie. "lane borrowed" would result in true because
// there is exactly three characters between a and b).
// Otherwise return the string false.


		// NEXT PROBLEM --->

// Write a function that generates an array of integers of the
// Fibonacci sequence, up to i = 100. The fibonacci sequence
// is defined by: Fn = Fn-1 + Fn-2, which means to find Fn you
// add the previous two numbers up. The first two numbers in the
// sequence are 0 and 1. Write a function to check if a given
// number is in the Fibonacci sequence, return 'yes' if it is,
// if not return the string 'no'.


		// NEXT PROBLEM --->

// Find the only item that occurs an even number of times in an array. If there is more than one
// item that occurs an even number of times, just return one of them. If there are no items that
// occur an even number of times, return null.

// var onlyEven = evenOccurence([1, 6, 2, 4, 4, 5, 6, 8, 9, 6]);
// console.log(onlyEven);
// =4

// var onlyEven = evenOccurence([1, 1, 3, 4, 1]);
// console.log(onlyEven);
// =null


		// NEXT PROBLEM --->

// Write a function that accepts a number, n, and returns the nth Fibonacci 
// number. Use a recursive solution to this problem; if you finish with time 
// left over, implement an iterative solution.


		// NEXT PROBLEM --->

// Create a function that takes in three strings as parameters. The goal
// is to swap all x characters in the string for y characters.
// ex:
//   swapper('some string', 's', 'z');
// 	 returns 'zome ztring'.


		// NEXT PROBLEM --->

replaceOdd([1,2,3,4,5,6,7,8,9,10]);

['O', 2, 'O', 4, 'O', 6, 'O', 8, 'O', 10]

// Write a function named replaceOdd that takes in 
// an array of numbers, and changes all of the 
// odd numbers to the letter O.


		// NEXT PROBLEM --->

// Make the function invocation work.

//your code here-->


//given-->
sum([1,4,3,5,2,8], function(total) {
	console.log('The total sum of the array is ' + total);
});


		// NEXT PROBLEM --->

// Make the following code work:
// 	var counter = getCounter();
// 	counter(); 2
// 	counter(); 4
// 	counter(); 6
// 	counter(); 8
// 	counter(); 10


		// NEXT PROBLEM --->

// Write a function that takes a string with parens, brackets, braces, ({[<>]}) 
// & checks to see if they close.
//   Ex:
//   (string{stringy}) -- true; ([string]} -- false.


		// NEXT PROBLEM --->

// Create a function that takes an array of objects as an argument and a string that 
// represents a property of an object contained in the array and returns an object 
// whose keys are the properties and whose values are arrays of objects that match 
// that property.

//e.g.
var arr = [
    {name: 'Joe Montana', team: '49ers'}, 
    {name: 'Jerry Rice', team: '49ers'}, 
    {name: 'Steve Young', team: '49ers'},
    {name: 'Tony Romo', team: 'Cowboys'},
    {name: 'Fred Biletnikoff', team: 'Raiders'},
    {name: 'Dick Butkus', team: 'Bears'},
    {name: 'Emmitt Smith', team: 'Cowboys'},
];


		// NEXT PROBLEM --->

// Create a function that can only be invoked once.


		// NEXT PROBLEM --->

// write a function that accepts a multi dimensional array and returns a flattened version.

// flatten([1,2,[3,[4], 5, 6], 7]) = [1, 2, 3, 4, 5, 6, 7]


		// NEXT PROBLEM --->

var animals = [
    {
        name: 'Dog',
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Mammalia',
        order: 'Carnivora',
        family: 'Canidae',
        species: 'Canis lupus'
    },
    {
        name: 'Cat',
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Mammalia',
        order: 'Carnivora',
        family: 'Felidae',
        species: 'Felis catus'
    },
    {
        name: 'Hippopotamus',
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Mammalia',
        order: 'Artiodactyla',
        family: 'Hippopotamidae',
        species: 'Hippopotamus amphibius'
    },
    {
        name: 'Playtpus',
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Mammalia',
        order: 'Monotremata',
        family: 'Ornithorhynchidae',
        species: 'Ornithorhynchus anatinus'
    },
    {
        name: 'Lizard',
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Reptilia',
        order: 'Squamata',
        family: 'Agamidae',
        species: 'Pogona vitticeps'
    },
    {
        name: 'Blackbird',
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Aves',
        order: 'Passeriformes',
        family: 'Turdidae',
        species: 'Turdus merula'
    }
];
    
//given the above object, write a function that returns an object whose keys are 
//the fields found above and whose values are objects containing all the values as 
//keys and a count for how many times that value occurs.

//e.g.
//{
//    kingdom: {Animalia: 6}
//    phylum: {Chordata: 6},
//    class: {Mammalia: 4, Reptilia: 1, Aves: 1}
//}


		// NEXT PROBLEM --->

// Triangle had n number of rows. Each row has one less block than the row below it.
// Create a function that takes n and calculates the total number of blocks in the triangle.

// ex: Triangle with 3 rows:

		  *
		 * *
		* * *

// function returns 6
// BONUS: create the triangle.


		// NEXT PROBLEM --->

// Write a function that console logs numbers
// from 1 to 100. But for multiples of 3, print 'fizz',
// for multiples of 5 print 'buzz', and for multiples of both
// 3 and 5, print 'fizz buzz'.

// ex: '1, 2, fizz, 4, buzz...'


		// NEXT PROBLEM --->

// Write a function that takes a string as an argument and
// determines whether or not the given string is a palindrome.

// examples of palindrome: racecar, acrobats stab orca


