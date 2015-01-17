// Objects
// -Key/Value Pair
// -They have properties
// -Two ways to create (Literal, Constructor)
// -Functions in objects are called methods
// -Dot notation and bracket notation to access values

var myObj = {
	0: "First Thing",
	1: "Second Thing",
	2: "Third Thing"
};

// to create new object

var obj = {};

// arrays have order (by index).
// objects have no order, its just a grouping of data.

// waitress table app example:

table {
	haveOrdered: true,
	size: 6,
	people: 4
};

// carwash example:
// want to know which slot was occupied, yearly revenue, how many visitors.

[] [] [] [Office]

Collection
	List
	Collection

	var carWash = {
		slots: [true, false, true];
		info: {
			visitors: 32,
			revenue: 24532
		};
	};

// arrays are lists, and objects are collections of data. They both can be used whenever you want to,
// just use them based on what you are trying to do. You can also have objects inside an array...

//iTunes 'Nelly' example.

var countryGrammar = [
	{
		title: 'St. Louis',
		duration: 190s,
		key: value
	},
	{
		key: value,
		key: value,
		key: value
	},
	{}
];

// me as an object

var Brandon = {
	name: 'Brandon',
	age: 28,
	birthday: 'Feb 9',
	taken: true,
	occupation: 'student'
}

brandon.age
28

brandon.hairColor = "brown";

// intro to methods

brandon.getHairColor = function(){
	return 'brown';
}

// to invoke/call a methods

brandon.getHairColor();

// to delete a key/value in an object:

delete brandon.age;

// table example again

var tables = [
	{
		tableNumber: 1,
		occupied: false,
		haveOrdered: false,
		numberOfPeople: 0
	},
	{
		tableNumber: 2,
		occupied: true,
		haveOrdered: false,
		numberOfPeople: 3
	},
	{
		tableNumber: 3,
		occupied: true,
		haveOrdered: true,
		numberOfPeople: 4
	}
];

tables[2].haveOrdered;

tables[0].occupied;

// See how many people are in the restaurant:

var occupancy = function(){
	var num = 0;
	for (var i = 0; i < tables.length; i++){
		num = num + tables[i].numberOfPeople;
		// short-hand is: num += tables[i].numberOfPeople;
	}
	return num;
}

// Looping thru arrays...

var friends = ["Jess", "Jacob", "Dan"];

for (var i = 0; i < friends.length; i++){};

// Looping thru objects... (keys aren't indexed)

var person = {
	name: "Tyler",
	age: 24
}

for (var key in person){
	alert(key);
}

// Bracket notation:

person.age = person["age"];

// Why use bracket notation?

var placeHolderForName = "name";

person.placeHolderForName; // Doesn't work.

person[placeHolderForName]; // Works.

// Back to loop example...

for (var key in person){
	alert(key); //Alerts the key.
	alert(person[key]); // Alerts the value.
}

// NEVER USE A FOR IN LOOP ON AN array

