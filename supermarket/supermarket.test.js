var expect = require('chai').expect;
const Checkout = require('./supermarket');

it('Can instantiate checkout', function(){
    var checkout = new Checkout();
})

it('Can add item price', function() {
    var checkout = new Checkout();
    checkout.addItemPrice('a', 1);
})
