// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
// Rules for a smiling face:
// -Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// -A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// -Every smiling face must have a smiling mouth that should be marked with either ) or D.
// No additional characters are allowed except for those mentioned.
// Valid smiley face examples:
// :) :D ;-D :~)
// Invalid smiley faces:
// ;( :> :} :]

function countSmileys(arr) {
	let eyes = [':', ';'];
	let lips = [')', 'D'];
	let nose = ['-', '~'];
	function _matches(emoji, facepart) {
		if (facepart === 'eyes') {
			return eyes.indexOf(emoji[0]) > -1;
		} else if (facepart === 'lips') {
			return lips.indexOf(emoji[emoji.length - 1]) > -1;
		} else if (facepart === 'nose') {
			return emoji.length === 2 || (emoji.length === 3 && nose.indexOf(emoji[1]) > -1);
		}
	}

	let result = 0;
	for (let emoj of arr) {
		if (_matches(emoj, 'eyes') && _matches(emoj, 'lips') && _matches(emoj, 'nose')) {
			result += 1;
		}
	}

	return result;
}

// console.log(countSmileys([':D', ':~)', ';~D', ':)'])); //4
