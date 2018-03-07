// Write a function that filters all even elements of the array.
// 	Input: [6, 11, 9, 0, 3]
// 	Output: [6, 0]



'use strict'

function allEven(a) {
    let even = function (x) {
        return x % 2 == 0 && x != 0;
    }

    let b = a.filter(even);

    return b;
}
console.log(allEven([6, 11, 9, 0, 3]));