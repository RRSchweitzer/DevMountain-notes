//ajax

$('#getUsers').on('click', function() {
	return $.ajax({
		method: 'GET', //other methods: PUT, POST, DELETE (RESTful)
		url: 'http://tellUsWhereToGo' //-endpoint
		data: {"user":"ean", "email":"ean@ean.com"},
		success: function(res) {
			console.log(yes);
		}
	})
})

// C - Create - POST
// R - Read - GET
// U - Update - PUT
// D - Destroy - DELETE

// JSON is how you get information from database to site and visa versa.

// json formatter extension for chrome.  add .json to any url to see the database info.

//C - cross
//O - origin
//R - resource
//S - sharing
//security feature

	// DATABASE 
	// 	USERS 
	// 	POSTS 
	// 	COMMENTS 

	// SERVER 
	// 	'HTTP://GITHUB.COM/API/V1/USERS' 
	// 	'HTTP://GITHUB.COM/API/V1/POSTS'
	// 	'HTTP://GITHUB.COM/API/V1/COMMENTS' 

	// DOCUMENTATION
	// 	'To access user data hit this endpoint':
	// 		'HTTP://GITHUB.COM/API/V1/USERS'

EVENTS: run a callback.
mouseenter - when hovering begins.
mouseleave - when hovering ends.
focus - are in an input field.
blur - you leave input field.
click - you click on something.
mousedown - hold down mouse button.
mouseup - as mouse is unclicked.
ready - once the element is loaded.
hover - mouseenter and mouseleave combined.
keystroke - do something when i hit a key.
keydown - when you hold down a key.
keyup - when keydown ends.
scroll - do things when scrolling.
dblclick - on double click.

METHODS - look at docs for callback and other info.
prepend - insert at top of html element.
append - insert at bottom of html element.
toggleClass - use 1 event to add and remove a class from something.
addClass - add a class.
removeClass
toggleFade - toggles fade effect.
fade - fade effect.
animate - takes in an object as instructions.
hasClass - checks for a class.
attr - find attributes on elelents.
hide - hide the element.
show - show the element.
remove - remove the element.
css - change the css of an element.
scrollTop - records how far you are.
html - add html to element.
