const formatFullname = require('../formatFullname');
const expect = require('chai').expect;

describe('formatFullname', () => {
	it('should format the full name correctly', () => {
		expect(formatFullname('JOHN DOE')).to.equal('John Doe');
		expect(formatFullname('JOHN doE')).to.equal('John Doe');
		expect(formatFullname('amanda doe')).to.equal('Amanda Doe');
	});

	it('should return "Error" for invalid or empty input', () => {
		expect(formatFullname('')).to.equal('Error');
		expect(formatFullname(123)).to.equal('Error');
		expect(formatFullname('!@!@#!')).to.equal('Error');
	});

	it('should return "Error" if last name is missing', () => {
		expect(formatFullname('John')).to.equal('Error');
		expect(formatFullname('Amanda')).to.equal('Error');
	});

	it('should return "Error" for invalid name format', () => {
		expect(formatFullname('Amanda Test Doe')).to.equal('Error');
		expect(formatFullname('Amanda')).to.equal('Error');
	});
});
