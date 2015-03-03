// make the following code work:
// 	var counter = getCounter();
// 	counter(); 2
// 	counter(); 4
// 	counter(); 6
// 	counter(); 8
// 	counter(); 10

var getCounter = function() {
	var int = 0 // int must be declared outside of the closure in order for its value to be preserved.
	return function() {
		int += 2;
		return int;
	};
};

var counter = getCounter();

// a loop that runs 'counter' as many times as you specify.
var countFor = function(num) {
	for (var i = 0; i < num; i++) {
		console.log(counter());
	};
};