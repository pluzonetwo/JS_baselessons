'use strict';
const Symbols = [,'A','B','C','D','E','F','G','H'];

const chess = {
    containerElement: null,
    cellElements: null,

    run() {
        this.init();
    },

    init() {
        this.containerElement = document.getElementById('chess');

        this.initCells();
    },

    initCells() {
        this.cellElements = [];

        for (let row = 0; row < 10; row++) {
            const tr = document.createElement('tr');
            this.containerElement.appendChild(tr);

            for (let col = 0; col < 10; col++) {
                const td = document.createElement('td');
                if (col === 0 || col === 9 || row === 0 || row === 9) {
                    if (col === 0 || col === 9) {
                        if (!(row === 0 || row === 9)) {
                            td.innerText = row;
                        }
                    } if (row === 0 || row === 9) {
                        if (!(col === 0 || col === 9)) {
                            td.innerText = Symbols[col];
                        }
                    }
                }else {
                    let color = 'white';
                    if (row % 2 > 0) {
                        if (col % 2 > 0){
                            color = 'white';
                        }else {
                            color = 'black';
                        }
                    }else {
                        if (col % 2 === 0){
                            color = 'white';
                        }else{
                            color = 'black';
                        }
                    }
                    td.style.backgroundColor = color;
                }
                tr.appendChild(td);
            }
        }
    }
};
chess.run();





