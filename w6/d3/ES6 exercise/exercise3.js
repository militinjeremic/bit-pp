// Write a function that increases each element of the given array by the given value. If the value is omitted, increase each element of the array by 1.  
// 	Input: [4, 6, 11, -9, 2.1], 2
// 	Output: [6, 8, 13, -7, 4.1]



'use strict'

function increase(a, x = 1) {

    let b = a.map(function (item) {
        // Increment each item by 1
        return item + x;
    });

    return b;
}
console.log(increase([4, 6, 11, -9, 2.1], 2));