// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

function toCamelCase(str) {
	if (str === '') return '';
	let arr = [];
	if (str.includes('-')) arr = str.split('-');
	else arr = str.split('_');

	for (let i = 1; i < arr.length; i++) {
		arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
	}
	return arr.join('');
}

console.log(toCamelCase('the-stealth-warrior'));
console.log(toCamelCase('The_Stealth_Warrior'));
