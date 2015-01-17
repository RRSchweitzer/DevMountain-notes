Go to Utah JS to network with other developers.

Check out Underscore JS.

WTF is 'this'. If 'this' is undefined, it will default to the 'window' object.

Maker Function:

var personMaker = function(name, age) {
	var person = Object.create(personMaker.prototype);
	person.name = name;
	person.age = age;
	return person;
}

MDN is the best JavaScript documentation on the web.

Look up Object.create sometime and become enlightened.

Stack Overflow is good too just as long as it has over 100 upvotes.

What is a Closure?
-Just a function.
-BUT, in JS you can define a function within another function, and that inner function
has access to the variables of the function that contains it.
-A closure is the inner function<<<<<<<<
-Private data: 'good fences make good neighbors.'

A function can also invoke the closure function after it is declared.

In Java you do 'private' or 'public'.  Closures are the only way to make data private in JavaScript.

Closures are important because they allow for asyncronous processes to happen. Your browser wont freeze.

Every callback is a closure, but not every closure is a callback. Callback is a convention, 
its just a way to use the language. 

"callback" means you call your friend and tell him to wash your windows, and instead of waiting on the phone
for him to finish, you tell him to call you back and let you know when he is finished.

"scope" just means where a property/variable/thing lives. function scope = local scope. In the browser, the
global scope is assigned to something called the 'window'.

in VIM :set numbers shows line numbers

magic string: 'use strict'; means that if you don't declare a variable in a function, the function won't use it.
it will return an error. it wont let you add a new variable to the global scope.

You can declare variables like this:

function() {
	var x = 2,
		y = 3,
		z = function() {
			alert('HEY DUDE');
		},
		a = 4;
}

