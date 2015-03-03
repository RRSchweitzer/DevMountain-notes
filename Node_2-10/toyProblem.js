'http://jsfiddle.net/sf6z5x0c'

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
    
//code here

var keyDefiner = function(arr, str) {
	var keyObj = {};
	var property = {};

	for (var i = 0; i < arr.length; i++) {
		if(!keyObj[arr[i][property]]) { //keyObj["49ers"]. Have to use bracket notation with strings.
			keyObj[arr[i][property]] = [];
			keyObj[arr[i][property]].push(arr[i]);
		} else {
			keyObj[arr[i][property]].push(arr[i]);
		}
	};
	return keyObj;
};

// Could also:
var keyDefiner = function(arr, str) {
	var keyObj = {};
	var property = {};

	for (var i = 0; i < arr.length; i++) {
		if(!keyObj[arr[i][property]]) {
			keyObj[arr[i][property]] = [];	
		}
		keyObj[arr[i][property]].push(arr[i]);
	};
	return keyObj;
};

// 'If'-statements check for something. They check for values, truthyness, or whatever
// you want to check for. But the point is that they check for something.
    
//should return:
{ 
    '49ers': [{name: 'Joe Montana', team: '49ers'}, {name: 'Jerry Rice', team: '49ers'}, {name: 'Steve Young', team: '49ers'}],
    'Cowboys': [{name: 'Tony Romo', team: 'Cowboys'}, {name: 'Emmitt Smith', team: 'Cowboys'}],
    'Bears': [{name: 'Dick Butkus', team: 'Bears'}],
    'Raiders': [{name: 'Fred Biletnikoff', team: 'Raiders'}]
}

SOLUTION:
'http://jsfiddle.net/sf6z5x0c/9/'