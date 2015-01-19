var person = function(name, age){
	return {
		name: name,
		age: age,
	}
}

person('brandon k3nt', 28);

//
var brandon = person('brandon k3nt', 28);

brandon.name;

brandon.age;
//

person('Jason', 27);
var jason = person('Jason', 27);
// 'Maker' function.

brandon.sayName(); //alert 'Brandon'
jason.sayName();//alert 'Jason'

//--->
var person = function(name, age){
	return {
		name: name,
		age: age,
		sayName: function(){
			alert(this.name);
		};
	};
};

var brandon = person('Brandon', 28);
var jason = person('Jason', 27);

brandon.sayName();

//
// CONSTRUCTORs = function that returns an object.
//

var person = function(name, age){ //MAKER FUNCTION
	var obj = {};
	obj.name: name,
	obj.age: age,
	obj.sayName: function(){
		alert(this.name);
	};
	return obj;
};

var Person = function(name, age){ //capitalized to show that its a constructor and not a function
	//var this = {};
	this.name = name;
	this.age = age;
	//return this
	};

var Person = function(name, age){ //capitalized to show that its a constructor and not a function
	//var this = object.prototype;
	this.name = name;
	this.age = age;
	//return this
	};

Person.prototype.sayName = function(){ //prototype is an object that every function has. it is a functions backpack.
	alert(this.name);
}

var kassidi = new Person ('Kas', 23);
kassidi.age;

var jacob = new Person ("Jacob", 22);
jacob.name;

Person.prototype.sayName = function(){
	alert('My name is ' + this.name);
};

jacob.sayName();
kassidi.sayName();

Person.prototype;

Person;

//
//
//

Array.prototype. //type in chrome dev console

var friends = ['Jake', 'Jess'];
friends.first(); //Jake
// 'first' is the *this
Array.prototype.first = function(){
 	//this
 	return this[0]; //this refers to 'friends' or whatever your array/obj/str before the '.first'
}

//
// practice--->
//

//make the new constructor --->
var Car = function(color, make, model){
	this.color = color;
	this.make = make;
	this.model = model;
};

//make two objects with the constructor --->
var firstCar = new Car ('red','Ford', 'Fiesta');
var secondCar = new Car ('blue', 'Tesla', 'Model S');

//make two methods that both objects can share --->
Car.prototype.drive = function(){
	alert('Driving...');
};

Car.prototype.stop = function(){
	alert('Stopping...');
};

//
//
//

What does the 'new' keyword do in JavaScript?

1) creates an object called this.
2) uses object.create to create an object, which delegates to the constructors prototype.
3) returns the this object.

What are the benefits of using a constructor function vs just create a function that returns an object?
-Constructor creates you objects that can delegate to their constructors.
-Add a method after initially creating the instance.

//
//
//

// Create a boat constructor
// -color
// -price 
//
// Boats should be able to drive and stop. Create two instances of Boat.

var Boat = function(color, price){
	this.color = color;
	this.price = price;
};

var firstBoat = new Boat ('red',52000);
var secondBoat = new Boat ('blue', 58000);

Boat.prototype.drive = function(){
	alert('Driving...');
};

Boat.prototype.stop = function(){
	alert('Stopping...');
};

//
//

Boat.prototype.sayPrice = function(){
	alert(this.price);
	//THE KEYWORD 'THIS' REFERS TO WHATEVER IS TO THE LEFT OF THE DOT AT CALL-TIME.
}
//ex--->
brandonsBoat.sayPrice(); //'this' refers to brandonsBoat