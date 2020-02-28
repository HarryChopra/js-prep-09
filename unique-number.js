// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// Using an object

function findUniq(arr) {
	let numCount = {};
	for (let i of arr) {
		if (numCount[i]) {
			numCount[i]++;
		} else {
			numCount[i] = 1;
		}
	}
	for (let j in numCount) {
		if (numCount[j] === 1) {
			return j;
		}
	}
}

//Without a data structure

function findUniq(arr) {
	let notUniq;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === arr[i + 1] || arr[i] === arr[i + 2]) {
			notUniq = arr[i];
			break;
		}
	}
	for (let j of arr) {
		if (j !== notUniq) {
			return j;
		}
	}
}

console.log(findUniq([1, 1, 1, 2, 1, 1]));
console.log(findUniq([0, 0, 0.55, 0, 0]));
