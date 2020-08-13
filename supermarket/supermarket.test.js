var expect = require('chai').expect;
const Checkout = require('./supermarket');

it('Can add item price', function() {
    var checkout = new Checkout();
    checkout.addItemPrice('a', 1);
})
