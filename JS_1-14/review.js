var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

var uniq = function(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    if (i !== arr.indexOf(arr[i])) {
      arr.splice(i, 1);
      i--;
    };
  };
  callback(arr);
};

uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});

// Maker vs Constructor patterns -->

var person = function(name, age) { //this is maker pattern
  var obj = {
    name: name,
    age: age
  }
  return obj;
}

var jacob = person('Jacob', 21);

person.prototype.sayName = function() {
  alert(this.name); //doesn't work with maker pattern. CAN'T DO PROTOTYPE.
};

var Person = function(name, age) { //this is constructor pattern
  this.name = name;
  this.age = age;
};

var jacob = new Person ('Jacob', 21);

Person.prototype.sayName = function() {
  alert(this.name); //WORKS!
};

//
// From constructor project
//

var users = [];

users.push( //don't have to create a variable name to make an object using constructor pattern.
  new User ('Tyler', 'tylermcginnis33@gmail.com'),
  new User ('Cahlan', 'cahlan@devmounta.in')
  );

