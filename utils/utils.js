var codes = require('../data/uk');


/**
 * Extract relevant digits from a string containing a UK telephone number.
 * Relevant are the first 5 digits without a leading "0" or "+44" or "0044".
 * In the UK geographic landline numbers start with "02" or "03".
 */
var extractRelevantDigitsUK = function (number) {
	var match = number.match(/^(0044|\+44|0)(\d{2,6})/);
	if (match !== null && match.length === 3) {
		return match[2];
	} else {
		return null;
	}
	//return number.match(/[12]\d{2,4}/)[0];
}


var lookupUK = function (number) {
	number = extractRelevantDigitsUK(number);
	if (number !== null) {
		var length = number.length;
		while (length > 1) {
			if (codes.hasOwnProperty(number)) {
				return codes[number];
			}
			number = number.substr(0, --length);
		}
	}

	return null;
};



module.exports.extractRelevantDigitsUK = extractRelevantDigitsUK;
module.exports.lookupUK = lookupUK;
