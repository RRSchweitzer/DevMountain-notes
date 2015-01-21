//write a function called simpleSymbols that takes in a string parameter and determines
//if it is an acceptable sequence by either returning the string true or false. The str
//parameter will be composed of + and = symbols with several letters between them 
//(ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a 
//+ symbol. So the string to the left would be false. The string will not be empty and will
//have at least one letter.

var simpleSymbols = function(str) {
	
	var truthy = false;

	for (var i = 0; i < str.length; i++) {
		if (str.charAt(i).toUpperCase() !== str.charAt(i).toLowerCase()) {
			if (str[i - 1 ] === '+' && str[i + 1] === '+') {
				truthy = true;
			} 
			else {
				truthy = false;
			}
		}
	}
	
	return truthy;
};

simpleSymbols('+i+====+a+==')