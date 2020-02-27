// Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 21445 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

// var num = n.toString().split('');
// var num = [...`${n}`];
// var num = Array.from(String(n), Number);

function descendingOrder(n) {
	let arrN = Array.from(String(n), Number);
	for (num in arrN) {
		for (i = arrN.length - 1; i >= 0; i--) {
			if (arrN[i] > arrN[i - 1]) {
				[arrN[i], arrN[i - 1]] = [arrN[i - 1], arrN[i]];
			}
		}
	}
	return arrN.join('');
}

console.log(descendingOrder(21445));

// function descendingOrder(n){

// }
