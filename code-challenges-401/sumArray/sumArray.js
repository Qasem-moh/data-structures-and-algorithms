'use strict';


function sumArray(array) {
    var sumValue = array.map(function (item) {
        return item.reduce(function (a, b) { return a + b; }, 0);
    });
    return sumValue
}

module.exports = sumArray;