console.time('test');

var bucketSort = function(a) {

	var buckets = [];

	for (var i = 0; i < 1001; i++) {
		buckets.push(0);
	};

	for (var i = 0; i < a.length; i++) {
		var number = a[i];
		buckets[number]++;
	};

	for (var number = 0; number < 1001; number++) {
		var count = buckets[number];
		var index = 0;
		for (var j = 0; j < count; j++) {
			a[index] = number;
			index++;
		};
	};

};

var a = [2,2,3,4,5,5,6,5,4,3,3,3,2,2,1,3,4,5];

bucketSort(a);
console.log(a);

console.timeEnd('test');