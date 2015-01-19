// Write a function that returns another function.

var outerFunction = function() {
	return function(){
		alert('Woo!');
	};
};

outerFunction();
//

var thing = outerFunction(); 

thing; //thing will be the definition of outerFunction.
thing(); //will invoke/call outerFunction.

thing.age = 24;
thing.age;

// Make a variable in scope of outerFunction then alert it in the inner function.

var outerFunction = function() {
	var yes = 'YES';
	return function(){
		alert(yes);
	};
};

outerFunction();
var thing = outerFunction(); 
thing
//

//also this --->
var mantle = function() {
  var temp = 'Hot enough to be ductile!';
  return function() {
    alert(temp);
  };
};

mantle
// function () {
//   var temp = 'Hot enough to be ductile!';
//   return function() {
//     alert(temp);
//   };
// }

mantle();
// function () {
//     alert(temp);
//   }

var crust = mantle();

crust
// function () {
//     alert(temp);
//   }

crust();
//

// Write the function definition.

var innerFn = makeCounter();
innerFn() // 1
innerFn() // 2
innerFn() // 3
innerFn() // 4

var makeCounter = function() {
	var count = 0;
	return function() { //outer fn must RETURN the inner fn.
		count += 1;
		return count;
	};
};

var innerFn = makeCounter();
innerFn();
//

var makeCounter = function(argument) { //stuck in a parameter for the count to start at.
	var count = argument;
	return function() { 
		count += 1;
		return count;
	};
};

var innerFn = makeCounter(5);
innerFn();
//

var makeCounter = function(arg) { //arg becomes a variable within the makeCounter scope.
	return function() { 
		arg += 1;
		return arg;
	};
};

var innerFn = makeCounter(5);
innerFn();
//

//
// Private Data
//

var outerFunction = function() {
	var privateVar = 'Brandon';
	return function() {
		return privateVar;
	};
};
//

// Make in the following two lines work:
var twice = multiplier(2);
twice(5); //10

var multiplier = function(arg) {
	return function(arg2) {
		return arg * arg2;
	};
};

var twice = multiplier(2);
twice(5);
