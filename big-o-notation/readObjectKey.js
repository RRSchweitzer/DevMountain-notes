console.time('test');

var x = {};

for (var i = 0; i < 15; i++) {
	x["property" + i] = "foo " + i;
};

console.log(x);

Object.keys(x);

console.timeEnd('test');




