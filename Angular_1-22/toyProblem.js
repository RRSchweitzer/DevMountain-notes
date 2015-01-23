// Given an arbitrary input string, return the first non-repeated character in the string.
// For example:
// 	firstNonRepeatedCharacter('ABA'); => 'B'

1. Create empty string to store the non-repeated character.
2. Put chatAt(0) into the new string.
3. Loop through the str to see if charAt(x) === charAt(0).
	-If it does, splice charAt(0), and put the charAt(i + 1) into the new string.
4. Return the new str.

var noRepeat = function(str) {
	var table = {};
	for (var i = 0; i < str.length; i++) {
		var before = str.slice(0, i);
		var after = str.slice(i + 1);
		if(before.indexOf(str[i]) === -1 && after.indexOf(str[i]) === -1) {
			return str[i];
		}
	};
	return null;

};

noRepeat('gghghhghyghhg');