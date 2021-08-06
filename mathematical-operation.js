var onionPrice = 42;
var eggPrice = 8;
var eggQuantity = 5;
var moneyAvailable = 100;
var orangePrice = 6;

var totalPrice = onionPrice + eggPrice;
var priceDifference = onionPrice - eggPrice;
var eggPriceMultiplication = eggPrice * eggQuantity;
var orangeQuantity = moneyAvailable / orangePrice;
var orangeRemainder = moneyAvailable % orangePrice;

console.log(onionPrice);
console.log(eggPrice);
console.log(totalPrice);
console.log(priceDifference);
console.log(eggPriceMultiplication);
console.log(orangeQuantity);
console.log(orangeRemainder);

// special addition 
var firstNumber = 0.1;
var secondNumber = 0.2;
var total = firstNumber + secondNumber;

// total = total.toFixed(1)
// total = parseFloat(total);
console.log(parseFloat(total.toFixed(1)));