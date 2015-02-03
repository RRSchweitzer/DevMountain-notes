// Write a function that accepts a number, n, and returns the nth Fibonacci 
// number. Use a recursive solution to this problem; if you finish with time 
// left over, implement an iterative solution.

//iterative:
var fibo = function(num) {
	var arr = [0,1];
	var total = 0;
	var i = 2;
	while(total < num) {
		total = arr[i - 2] + arr[i - 1];
		arr.push(total);
		i++;
	}
	return arr[num];
};

//recursive:
var reFibo = function(n) {
	if(n <= 2) { //'base case'
		return 1;
	}
	return reFibo(n-1) + reFibo(n-2);
}
