var sayName = function(name){
	alert('Hello ' + name);
}

sayName; // Gives the function definition.

sayName('Brandon'); // Invokes the function.

var myOtherFn = function(){
	debugger;
}

var myOtherFn = function(callback){
	console.log(callback);
	debugger;
}

//

var sayHello = function(){
	alert('Hello!');
}

var myOtherFn = function(callback){
	console.log('The parameter is ' + callback);
	console.log('Before invoking the callback');
	callback();
	console.log('After invoking the callback');
}

//

var sayName = function(name){
	alert('Hello ' + name);
}

var getName = function(){
	var name = prompt('What is your name?');
	return name;
}

var getName = function(callback){
	var name = prompt('What is your name?');
	callback(name);
}
getName(sayName); // Uses the function definition of sayName as a parameter for getName

// Write a function called addNums that takes two numbers, and adds them together, and returns the result.

// Write a function called invoker that receives a callback function (addNums), and invokes it passing it two numbers.

var addNums = function(num1, num2){
	return num1 + num2;
}

var invoker = function(callback){
	return callback(4,5);
}

invoker(addNums);

// Write a function called getFirst that takes in two parameters.
// The first parameter is an array, and the second parameter is a function.
// Get the first item in the array, and pass that to the callback.

var getFirst = function(arr, callback){
	var firstItem = arr[0];
	callback(firstItem;)
}

var friends = ['Tyler', 'Jacob', 'Jess'];
var cb = function(firstItem){
	alert('The first item is ' + firstItem);
}

getFirst(friends, cb);

// The purpose of using a callback is to delay a function from being invoked.
// 

var getSongs = function(callback){
	alert('About to get songs...');
	setTimeout(function(){
		alert('After 3 Seconds');
		var songs = "Nelly's songs"
		callback(songs);
	}, 3000);
	
}

var alertSongs = function(songData){
	alert('The songs are ' + songData)
}

getSongs(alertSongs);

// Write a function called last which takes in an array, and a callback function.
// Get last item in array, then invoke callback.

var alertThing = function(thing){
	alert(thing);
}

var last = function(arr, callback){
	 callback(arr[arr.length-1]);
}

last([1,2,3], alertThing);

//
var sayHi = function(sentence, cb){
	cb(sentence + ' you are the best');
}

sayHi ('Hi Katie', function(thingToSay){
	alert(thingToSay);
});

