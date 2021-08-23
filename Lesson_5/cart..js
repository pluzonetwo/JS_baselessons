'use strict'
/*const basket = {
    goods: [
        {
            product_id: 111,
            product_name: 'Notebook',
            price: 20000,
            quantity: 5,
        },
        {
            product_id: 222,
            product_name: 'Mouse',
            price: 1000,
            quantity: 10,
        },
        {
            product_id: 333,
            product_name: 'Gamepad',
            price: 10000,
            quantity: 1,
        }
    ],
};
const div = document.querySelector('#catalog');
if (basket.goods.length === 0) {
    div.innerText = 'Корзина пуста';
} else {
    let count = 0;
    let summa = 0;
    basket.goods.forEach((item)=>{
        count += item.quantity;
        summa += item.price;
    });
    div.innerText = 'Корзина имеет '+ count +' товаров на '+ summa +' рублей'
}*/

/*const product = ['Notebook', 'Phone', 'Mouse', 'Keyboard'];
const div = document.querySelector('#catalog');
if (product.length === 0) {
    div.innerText = 'Корзина пуста';
} else {
        div.innerText = product.join(', ');
}*/

const cartItem = {
    render(good) {
        return `<div class="good">
                    <div><b>Наименование</b>: ${good.product_name}</div>
                    <div><b>Цена за ед.</b>: ${good.price}</div>
                    <div><b>Количество</b>: ${good.quantity}</div>
                    <div><b>Стоимость</b>: ${good.quantity * good.price}</div>
                </div>`;
    }
};

const cart = {
    cartListBlock: null,
    cartButton: null,
    cartItem,
    goods: [
        {
            product_id: 111,
            product_name: 'Notebook',
            price: 20000,
            quantity: 5,
        },
        {
            product_id: 222,
            product_name: 'Mouse',
            price: 1000,
            quantity: 10,
        },
        {
            product_id: 333,
            product_name: 'Gamepad',
            price: 10000,
            quantity: 1,
        }
    ],
    init() {
        this.cartListBlock = document.querySelector('.cart-list');
        this.cartButton = document.querySelector('.cart-btn');
        this.cartButton.addEventListener('click', this.clearCard.bind(this));

        this.render();
    },
    render() {
        if (this.goods.length) {
            this.goods.forEach(good => {
                this.cartListBlock.insertAdjacentHTML('beforeend', this.cartItem.render(good));
            });
            this.cartListBlock.insertAdjacentHTML('beforeend', `В корзине ${this.goods.length} позиций(я) стоимостью ${this.getCartPrice()} рублей`);
        } else {
            this.cartListBlock.textContent = 'Корзина пуста';
        }
    },
    getCartPrice(){
        return this.goods.reduce(function (price, good) {
            return price + good.price * good.quantity;
        }, 0);
    },
    clearCard() {
        this.goods = [];
        this.render();
    },
};

cart.init();





