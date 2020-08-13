var expect = require('chai').expect;
const Checkout = require('./supermarket');

beforeEach(function(){
    checkout = new Checkout();
})

it('Can calculate current total', function(){
    checkout.addItemPrice('a', 1);
    checkout.addItem('a');
    expect(checkout.calculateTotal()).to.equal(1);
})
