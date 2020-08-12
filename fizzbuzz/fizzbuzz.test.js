var expect =  require('chai').expect;
const fizzBuzz = require('./fizzbuzz');

it('returns 1 with 1 as the argument', function () {
    var result = fizzBuzz(1);
    expect(result).to.equal('1');
})