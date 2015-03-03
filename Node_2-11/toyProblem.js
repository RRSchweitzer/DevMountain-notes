// Create a function that can only be invoked once.

var onceFn = function() {
	var invoked = false;
	return function(str) { //closure is an encapsulated function.
		if (invoked === false) {
			alert(str);
			invoked = true;
		}
	};
};

var callOnce = onceFn();

callOnce('Only alert me ONCE!');

//Jacob's way --->

var functionCreator = function(fn, n) {
	var counter = 0;
	return function() {
		if (counter < n) {
			fn.apply(this, arguments);
			counter++;
		}
	};
};

var myFunc = functionCreator(function(one, two) {
	console.log(one + two);
});
