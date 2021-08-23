'use strict'
// Вывод простых чисел
/*
let i = 0;
while (i < 100) {
    if (isPlainNumber(i)) {
        console.log(i);
    }
    i++;
}

function isPlainNumber(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
*/

/*var n = 10;
var i = 19;
while (true){
    if (i % 2 == 0)
        continue;
    console.log(i++);
}*/

const basket = [
    ['Notebook', 20000, 5],
    ['Gamepad', 10000, 10],
    ['Mouse', 1000, 20],
    ['Keyboard', 1500, 15],
]

function countBasketPrice(basket){
    return basket.reduce((totalPrice, cartItem) => totalPrice + cartItem[1] * cartItem[2], 0);
}

console.log(countBasketPrice(basket));

