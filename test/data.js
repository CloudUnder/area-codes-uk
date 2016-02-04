var assert = require("assert")
var uk = require('../data/uk');


describe('data', function () {

	describe('uk', function () {

		it('should be an object', function () {
			assert.equal("object", typeof uk);
			assert.equal(false, uk === null);
		});

		it('should only contain numbers with 2 to 6 relevant digits', function () {
			var result = true;
			for (var n in uk) {
				if (n.match(/^[1-9]\d{1,5}$/) === null) {
					result = n;
					break;
				}
			}
			assert.equal(true, result);
		});

		it('should only contain non-empty string values', function () {
			var result = true;
			for (var n in uk) {
				if (!uk[n] || typeof uk[n] !== "string") {
					result = n;
					break;
				}
			}
			assert.equal(true, result);
		});

	});

});
