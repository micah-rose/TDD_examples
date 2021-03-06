// Call FizzBuzz
// Get "1" when 1 is passed in
// Get "2" when 2 is passed in
// Get "Fizz" when 3 is passed in
// Get "Buzz" when 5 is passed in
// Get "FizzBuzz" when 15 is passed in, a multiple of 3 and 5

function fizzBuzz(value){
    if (value%3 == 0) {
        if (value%5 == 0){
            return 'FizzBuzz';
        }
        return 'Fizz';
    }
        if (value%5 == 0) return 'Buzz';
    return value.toString();
}

module.exports = fizzBuzz;