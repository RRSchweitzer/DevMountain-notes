---ANGULAR REVIEW---

-Controllers
-Services
-Directives
-Filters

//

Controller: mediates between the data and the view.

2 universal practices in programming:
-Modularity: compartmentalizing your code into separate sectors.
	-50 objects that are tiny are better than 2 objects that are huge.
-Dont Duplicate (DRY)

Controllers bring services into view.
You inject any services you are going to want to use into the controller/

Usually you use one controller and then use directives to split up the other functions.
"view" = webpage.
one controller per view.

//

Services: business logic.
Business Logic: modifying the data, or whatever your application 'does'.

//

Directives group up 'view' functionality.

//

Filters filter data

//

How many parameters is too much? like maybe 5. if you have more than that, you might want to
think of an additional service...

CODE SMELL: 
-comments are bad: if you have to put in a bunch of comments, then you have 
	failed to craft logical code. Readable code is better than commented code.
-never use $http in controller.

//post DevMtn learning tools.
//video instruction is best.
egghead.io 
***pluralsite.com - way better than lynda.com

//

Modules: for 99% of all of you projects, one module will do fine.
Only create multiple modules when you are creating services and code that is open source.

//

How to test for bugs when building applications:
-Hardcode: skip the view and just enter values into your code from your js docs.
-console.log your data to see if its working out.

TDD: . . . . . . . .

//

PROMISES:

ECMAScript = JavaScript.

ES6 = ECMAScript 2015.

//

Promises:

deferred automatically declares resolve and reject functions, which is why you
reference them in a $q service

RECAP:

the controller populates the scope. 

"premature optimization is the root of all evil."
never write an algorythm and think about performance. work on performance after you write code.

#1 guideline for writing apps in maintainability. Being able to maintain code b/c
its modulated properly.

the web is backwards compatable.

