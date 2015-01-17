// Make the function invocation work.

//your code here-->
var sum = function(arr, callback) {
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
		sum += arr[i]; //sum = sum + arr[i];
	}
	callback(sum);
};

//given-->
sum([1,4,3,5,2,8], function(total) {
	console.log('The total sum of the array is ' + total);
});