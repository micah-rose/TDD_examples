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
        this.items = new Object();
        this.discounts = new Object();
    }

    addItemPrice(item, price){
        this.prices[item] = price;
    }

    addItem(item){
        if (this.items[item] == undefined){
            this.items[item] = 1;
        }
        else {
            this.items[item]++;
        }
    }

    calculateTotal(){
       var total = 0;
       for (var item in this.items){
           total += (this.prices[item] * this.items[item]);
       }
       return total;
    }

    addDiscount(item, itemCnt, discountPrice){
        this.discounts[item] = {cnt: itemCnt, price: discountPrice}
    }
};