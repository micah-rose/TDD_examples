var expect =  require('chai').expect;


it('can call fizzBuzz', function () {
    fizzBuzz(1);
})

it('returns 1 with 1 as the argument', function () {
    var result = fizzBuzz(1);
    expect(result).to.equal('1');
})