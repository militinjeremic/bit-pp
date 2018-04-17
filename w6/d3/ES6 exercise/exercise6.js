// Write a function that filters all integer numbers from the given array. 
// Input: [1.6, 11.34, 9.23, 7, 3.11, 8]
// 	Output: [7, 8]



'use strict'

function filterInteger(a) {

    let checkForInteger = function (n) {
        return Number.isInteger(n)
    }

    a = a.filter(checkForInteger);

    return a;

}
console.log(filterInteger([1.6, 11.34, 9.23, 7, 3.11, 8]));