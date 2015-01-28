// Find the only item that occurs an even number of times in an array. If there is more than one
// item that occurs an even number of times, just return one of them. If there are no items that
// occur an even number of times, return null.

// var onlyEven = evenOccurence([1, 6, 2, 4, 4, 5, 6, 8, 9, 6]);
// console.log(onlyEven);
// =4

// var onlyEven = evenOccurence([1, 1, 3, 4, 1]);
// console.log(onlyEven);
// =null


var evenOccurence = function(arr) {
	for (var i = 0; i < arr.length; i++) {
		var occurs = 0;
		for (var j = 0; j < arr.length; j++) {
			if (arr[i] === arr[j]) {
				occurs++;
			}
		}
		if(occurs % 2 === 0) {
			console.log(arr[i]);
			break;
		}
	}
};

evenOccurence([1, 2, 3, 4, 4, 5]);

// 'end squared' is this way,
// could also do 'to end' 

// Using a tracker is more efficient because the second loop will run the entire
// loop through each iteration of the first loop (ie. loop through 100 items 100 times)

function evener(arr){
	var track = {};
	for (var i = 0; i < arr.length; i++) {
		if (!track[arr[i]]) {
			track[arr[i]] = 0;
		}
		track[arr[i]] += 1;
	}
	return track;
	for (var key in track) {
		if (!(track[key] % 2)) {
			return [key];
		};
	}
}