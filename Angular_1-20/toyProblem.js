//write a function that returns the factorial of a number.
//the number 5 will return 5*4*3*2*1

var factorializer = function(num) {
	var total = num;
	for (var i = num - 1; i > 1 ; i--) {
		total *= i;
	};
	return total;
};

factorializer(5);