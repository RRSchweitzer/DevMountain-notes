// npm install --save babel

// in index.js:
require('babel/register');
require('./server');

// to use es6 in angular, try using google 'tracer'

// ARROW FUNCTIONS
// give you lexical context.
var obj = {
  func: function() {
    console.log(this);
    var dan = ()=>{
      console.log(this);
    }
  }
};

// LET KEYWORD
if (true) {
  let i = 0;
  // let keyword creates block scope for 'if' and 'for', which have no scopes.
}

for (var i = 0; i < array.length; i++) {
  array[i]
}

console.log(i);

// TICKS
var Dan = "Dan";

var sentence = `My name is ${Dan}`;

//DESTRUCTURING

function() {
  return [1, 2, 3];
};

var [a, b, c] = test();

console.log(a, b, c);

function test() {
  return {
    a: 1,
    b: 2,
    c: 3
  }
}

var { a:first, b:second, c:third} = test();

console.log(first, second, third);

//

class Student {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  getStuff(){
    return this.name;
  }
}

class Dan extends Student {
  constructor(name, age, extra, stuff) {
    super(name, age);
    this.extra = extra;
    this.stuff = stuff;
  }
  beGreat() {
    console.log('yeah');
  }
}

var me = new Dan("dan", 25, "this", "that");

var you = new Student('Oliver', 'dunno');
console.log(you);
console.log(me);

// CONST

const dan = "dan";

//

var greg = new Promise(function(resolve, reject) {
  resolve(your stuff);
});

//

function dan(x=1, y="y") {

}

dan();

function thing(x, y) {
  if(!x) {

  }
}

// PROPERTY METHOD ASSIGNMENT

var obj = {
  newMeth() {

  },
  oldMeth: function() {

  }
}

// OBJECT INITIALIZER SHORT-HAND
var a = "a";
var b = "b";
var c = "c";

var obj =

function dan(...stuff) {

};

dan(1,2,3,4,5);

// SPREAD OPERATOR
function dan(a, b, c) {
  console.log(a,b,c);
};

var arg = [1,2,3];

dan(...arg);

arg.push(...[4,5,6]);

//

function* Dan() {
  var i = 0;
  while (i<7) {
    yield i++;
  }
}
