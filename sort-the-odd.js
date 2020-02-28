// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

// Example

// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

function sortArray(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] % 2 === 1 && arr[i] % 2 === 1) {
				if (arr[i] > arr[j]) {
					[arr[i], arr[j]] = [arr[j], arr[i]];
				}
			}
		}
	}
	return arr;
}

console.log(sortArray([5, 3, 2, 8, 1, 4]));
