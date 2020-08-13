var expect = require('chai').expect;
const Checkout = require('./supermarket');

beforeEach(function(){
    checkout = new Checkout();
    checkout.addItemPrice('a', 1);
    checkout.addItemPrice('b', 2);
})

it('Can calculate current total', function(){
    checkout.addItem('a');
    expect(checkout.calculateTotal()).to.equal(1);
})

it('Can add multiple items and get correct total', function() {
    checkout.addItem('a');
    checkout.addItem('b');
    expect(checkout.calculateTotal()).to.equal(3);
})

it('Can add discount rules', function(){
    checkout.addDiscount('a', 3, 2);
})

xit('Can apply discount rules to total', function(){
    checkout.addDiscount('a', 3, 2);
    checkout.addItem('a');
    checkout.addItem('a');
    checkout.addItem('a');
    expect(checkout.calculateTotal()).to.equal(2);
})
