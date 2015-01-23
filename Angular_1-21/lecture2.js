-DEBUGGING-

1. Establish the rules of the problem.
2. Explore the problem space.
3. TDD- test driven development.
4. Specify a plan that should solve the problem and elaborate the plan into steps.
5. Translate each line of the plan into a line of code.

//examples:

var names = ['Tyler', 'Cahlan', 'Brock']
uniq(names, function(uniqArr) {
	console.log('The new names array is ', uniqArr);
});

1. rules:
	-the first parameter is an array.
	-the array will contain strings.
	-the second parameter is a function.

2. explore the problem space:
	-loop through all my names.
	-object as a lookup table.
	-dont need to return anything.
	-invoke the second parameter.
	-n^2 vs constant.

3. TDD
	-the code we were given.

4. Specify steps of plan:
	-create a function called: uniq, which takes in an array and a cb.
	-create empty object.
	-loop over array for length of array.
		-look to see if individual item in array (name), is a key/value pair 
		in object. if it isnt, push the name to my new array and add it
		as a property/value on my object. if it is, ignore it.
	-invoke the callback function passing it the new array.

//

var uniq = function(arr, cb) {
	var obj = {};
	var newArr = [];
	for (var i = 0; i < arr.length; i++) {
		if (!obj[arr[i]]) {
			newArr.push(arr[i]);
			obj[arr[i]] = true;
		};
	};
	cb(newArr);
}




