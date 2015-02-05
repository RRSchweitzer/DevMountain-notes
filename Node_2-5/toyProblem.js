// write a function that accepts a multi dimensional array and returns a flattened version.

// flatten([1,2,[3,[4], 5, 6], 7]) = [1, 2, 3, 4, 5, 6, 7]

var steamRoller = function(arr) {
	var arrStr = arr.toString();
	var flatArr = [];
	for (var i = 0; i < arrStr.length; i++) {
		if (arrStr[i] !== ',') {
			flatArr.push(parseInt(arrStr[i]));
		};
	};
	return flatArr;
};

steamRoller([1,2,[3,[4], 5, 6], 7]);

// +str will convert a string value to an integer value, if its possible.

// with recursion --->

var flattener = function(arr, newArr) {
	if(!newArr) {
		newArr = [];
	}
	for (var i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			flattener(arr[i], newArr);
		} else {
			newArr.push(arr[i]);
		}
	};
	return newArr;
}

flattener([1,2,[3,[4], 5, 6], 7]);