// Can create an instance of Checkout class
// Can add an item price 
// Can add an item 
// Can calculate the current total
// Can add multiple items and get correct total
// Can add discount rules
// Can apply discount rules to the total
// Exception is thrown for item added without price

module.exports = class Checkout {
    constructor(){
        this.prices = new Object();
        this.total = 0;
    }

    addItemPrice(item, price){
        this.prices[item] = price;
    }

    addItem(item){
        this.total += this.prices[item];
    }

    calculateTotal(){
       return this.total;
    }
};