// Write a function that generates an array of integers of the
// Fibonacci sequence, up to i = 100. The fibonacci sequence
// is defined by: Fn = Fn-1 + Fn-2, which means to find Fn you
// add the previous two numbers up. The first two numbers in the
// sequence are 0 and 1. Write a function to check if a given
// number is in the Fibonacci sequence, return 'yes' if it is,
// if not return the string 'no'.

var fibonacci = function(num) {
	var arr = [0,1];
	var total = 0;
	var i = 2;
	while(total < num) {
		total = arr[i - 2] + arr[i - 1];
		arr.push(total);
		i++;
	}
	if(arr.indexOf(num !=== -1)) {
		return 'yes';
	}
	return 'no';
};

//

var fib = function(num) {
	var arr = [0,1];
	for (var i = 0; i < 99; i++) {
		arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
	};
	console.log(arr);
	if (arr.indexOf(num) === -1) {
		return 'yes';
	};
	return 'no';
};