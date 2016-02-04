var assert = require("assert")
var _ = require('../utils/utils');


describe('utils', function () {

	describe('extractRelevantDigitsUK', function () {

		it('should return first 6 relevant digits of a normal number', function () {
			assert.equal("161929", _.extractRelevantDigitsUK("01619292929"));
		});

		it('should return first 6 relevant digits of a normal number with string attached', function () {
			assert.equal("161929", _.extractRelevantDigitsUK("01619292929@sipprovider.co.uk"));
		});

		it('should return first 6 relevant digits of a number with international prefix +44', function () {
			assert.equal("161929", _.extractRelevantDigitsUK("+441619292929"));
		});

		it('should return first 6 relevant digits of a number with international prefix 0044', function () {
			assert.equal("161929", _.extractRelevantDigitsUK("00441619292929"));
		});

		it('should return null if empty number', function () {
			assert.equal(null, _.extractRelevantDigitsUK(""));
		});

		it('should return null if number is one digit long', function () {
			assert.equal(null, _.extractRelevantDigitsUK("0"));
		});

		it('should return null if number is two digits long', function () {
			assert.equal(null, _.extractRelevantDigitsUK("02"));
		});

		it('should return number if number is three digits long', function () {
			assert.equal("20", _.extractRelevantDigitsUK("020"));
		});

		it('should return null if number lacks valid prefix', function () {
			assert.equal(null, _.extractRelevantDigitsUK("161"));
			assert.equal(null, _.extractRelevantDigitsUK("1619292929"));
		});
	});

	describe('lookupUK', function () {

		it('should find 2-digit area London with normal number format', function () {
			assert.equal("London", _.lookupUK("02029292929"));
		});

		it('should find 3-digit area Manchester with normal number format', function () {
			assert.equal("Manchester", _.lookupUK("01619292929"));
		});

		it('should find 4-digit area with normal number format', function () {
			assert.equal("Downpatrick", _.lookupUK("02844929292"));
		});

		it('should find 5-digit area with normal number format', function () {
			assert.equal("Appleby", _.lookupUK("01768329292"));
		});

		it('should find 3-digit area with international number format', function () {
			assert.equal("Manchester", _.lookupUK("+441619292929"));
		});

		it('should find 3-digit area with normal number format and string attached', function () {
			assert.equal("Manchester", _.lookupUK("01619292929@sipprovider.co.uk"));
		});

		it('should find 3-digit area with international number format and string attached', function () {
			assert.equal("Manchester", _.lookupUK("+441619292929@sipprovider.co.uk"));
			assert.equal("Manchester", _.lookupUK("00441619292929@sipprovider.co.uk"));
		});

	});

});
