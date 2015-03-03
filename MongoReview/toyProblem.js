// write a function that takes a string with parens, brackets, braces, ({[<>]}) 
// & checks to see if they close.
Ex:
(string{stringy}) -- true; ([string]} -- false.


var chipsSolution = function(string) {
	var isValid = true;
	var charTracker = {
		'(': 0,
		'[': 0,
		'{': 0,
		'<': 0
	};
	for (var i = 0; i < string.length; i++) {
		switch (string[i]) {
			case '(':
			case '[':
			case '{':
			case '<':
				charTracker[string[i]] ++;
				break;
			case ')':
				charTracker['('] --;
				break;
			case ']':
				charTracker['['] --;
				break;
			case '}':
				charTracker['{'] --;
				break;
			case '>':
				charTracker['<'] --;
				break;
		}
	};
	for (var key in charTracker) {
		if (charTracker[key] !== 0) {
			return false;
		}
		return true;
	};
};

Dans Solution: jsfiddle.net/4w33kLz9/2/﻿




// var closeCheck = function(string) {
// 	var arr = string.split('');
// 	var chars = [];
// 	for (var i = 0; i < arr.length; i++) {
// 		if (arr[i] === '(') {
// 			chars.push(arr[i]);
// 		} else if (arr[i] === '[') {
// 			chars.push(arr[i]);
// 		} else if (arr[i] === '{') {
// 			chars.push(arr[i]);
// 		} else if (arr[i] === '<') {
// 			chars.push(arr[i]);
// 		} else if (arr[i] === ')') {
// 			chars.push(arr[i]);
// 		} else if (arr[i] === '}') {
// 			chars.push(arr[i]);
// 		} else if (arr[i] === ']') {
// 			chars.push(arr[i]);
// 		} else if (arr[i] === '>') {
// 			chars.push(arr[i]);
// 		} 	
// 	};

// 	for (var i = 0; i < chars.length; i++) {
// 		for (var j = 1; j < chars.length + 1; j++) {
// 			if (chars[i] === '(' && chars[j] === ')') {
// 				console.log('true');
// 				if (chars[i] === '[' && chars[j] === ']') {
// 					console.log('true');
// 					if (chars[i] === '{' && chars[j] === '}') {
// 						console.log('true');
// 						if (chars[i] === '<' && chars[j] === '>') {
// 							console.log('true');
// 						}
// 					}
// 				}
// 			}
// 		};
// 		return false;
// 	};
// };
