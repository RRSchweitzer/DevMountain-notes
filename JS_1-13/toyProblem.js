
var firstNames = ['Robbie', 'Garret', 'Spencer'];
var secondNames = ['Ferrin', 'Shields', 'Carlson'];
var combined = [];

var combinator = function(){
	for (var i = 0; i < firstNames.length; i++){
		combined.push(firstNames[i].concat(' ' + secondNames[i]));
	}
}

combinator();
return combined;

// Other way to do it.

var combinator = function(arr1, arr2){
	var newArr = [];
	for (var i = 0; i < arr1.length; i++) {
		newArr.push(arr1[i] + ' ' + arr2[i]);
	};
	return newArr;
}

combinator(['Robbie', 'Garret', 'Spencer'], ['Ferrin', 'Shields', 'Carlson']);