'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    console.log('Creating board...');

    // row
    for (var i = 0; i < BOARD_LENGTH; i++) {
        var row = [];

        // column
        for (var j = 0; j < BOARD_LENGTH; j++) {
            row.push({
                columnId: columnIds[j],
                rowId: i + 1,
                color: calcColor(j, i)
            });
        }

        board.push(row);
    }

    return board;
};

var columnIds = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

var isOdd = function isOdd(num) {
    return num % 2;
};

var calcColor = function calcColor(columnId, rowId) {
    var isRowEven = !isOdd(rowId);
    var isRowOdd = isOdd(rowId);

    var isColumnEven = !isOdd(columnId);
    var isColumnOdd = isOdd(columnId);

    if (isRowEven && isColumnEven) return 'black';
    if (isRowOdd && isColumnOdd) return 'black';
    if (isRowEven && isColumnOdd) return 'white';
    if (isRowOdd && isColumnEven) return 'white';
};

var BOARD_LENGTH = 8;
var board = [];