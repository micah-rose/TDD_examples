var expect = require('chai').expect;
const Checkout = require('./supermarket');

beforeEach(function(){
    checkout = new Checkout();
})

it('Can add item price', function() {
    checkout.addItemPrice('a', 1);
})

it('Can add item', function(){
    checkout.addItem('a');
})

it('Can calculate current total', function(){
    expect(checkout.calculateTotal()).to.equal(1);
})
