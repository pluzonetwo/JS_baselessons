"use strict";

const basket = {
    list: [],

    addProduct(item) {
        let elementFound = false;
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].product_id === item.product_id) {
                this.list[i].quantity++;
                elementFound = true;
            }
        }
        if (elementFound === false) {
            this.list.push({...item});
        }

        this.renderBasket();
    },

    renderBasket() {
        const basketContent = document.querySelector('.basket');
        basketContent.innerHTML = '';
        if (this.list.length) {
            this.list.forEach(item => {
                const div = document.createElement('div');
                div.innerHTML = catalog.render(item);
                basketContent.appendChild(div);
            });
        } else {
            const div = document.createElement('div');
            div.innerHTML = `<b>Здесь ничего нет</b>`;
            basketContent.appendChild(div);
        }
    },

    clearBasket() {
        this.list = [];
        this.renderBasket();
    },
};

const catalog = {
    goods: [
        {
            product_id: 1,
            product_name: 'Notebook',
            price: 20000,
            quantity: 1,
        },
        {
            product_id: 2,
            product_name: 'Mouse',
            price: 1000,
            quantity: 1,
        },
        {
            product_id: 3,
            product_name: 'Gamepad',
            price: 10000,
            quantity: 1,
        },
        {
            product_id: 4,
            product_name: 'Keyboard',
            price: 2000,
            quantity: 1,
        }
    ],

    init() {
        for (let i = 0; i < catalog.goods.length; i++) {
            const div = document.createElement('div');
            div.innerHTML = this.render(catalog.goods[i]);
            const button = document.createElement('button');
            button.innerText = "Купить";
            div.appendChild(button);
            button.addEventListener('click', basket.addProduct.bind(basket, catalog.goods[i]));
            const table = document.querySelector('.table');
            table.appendChild(div);
        }

        const clearButton = document.querySelector('.clearButton');
        clearButton.addEventListener('click', basket.clearBasket.bind(basket));
    },

    render(good) {
        return `<div class="good">
                    <div><b>Наименование</b>: ${good.product_name}</div>
                    <div><b>Цена за ед.</b>: ${good.price}</div>
                    <div><b>Количество</b>: ${good.quantity}</div>
                    <div><b>Стоимость</b>: ${good.quantity * good.price}</div>
                </div>`;
    }
};

basket.renderBasket();
catalog.init();