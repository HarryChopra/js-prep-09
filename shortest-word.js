// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
	let arr = s.split(' ');
	for (let word of arr) {
		for (let i = 0; i < arr.length - 1; i++) {
			if (arr[i].length > arr[i + 1].length) {
				[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
			}
		}
	}
	return arr[0].length;
}

console.log(findShort('bitcoin take over the world maybe who knows perhaps')); //3
