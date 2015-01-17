var thing = function(firstNum){
	var num = 1;
	return function(){
		firstNum = firstNum + 1;
		return firstNum;
	}
}

var result = thing(0);

console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());