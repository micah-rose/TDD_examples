// Phases for TDD 
// 1. Red phase - failing test 
// 2. Green phase - passing test 
// 3. Refactor phase - refactor code to clean it up

var expect =  require('chai').expect;
const fizzBuzz = require('./fizzbuzz');

function checkFizzBuzz(testValue, expectedResult){
    var result = fizzBuzz(testValue);
    expect(result).to.equal(expectedResult);
}

it('returns 1 with 1 as the argument', function () {
   checkFizzBuzz(1, '1');
})

it('returns 2 with 2 as the argument', function () {
    checkFizzBuzz(2, '2');
})

it('returns Fizz with 3 as the argument', function () {
    checkFizzBuzz(3, 'Fizz');
})