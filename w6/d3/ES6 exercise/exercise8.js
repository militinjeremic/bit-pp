// Write a function that returns indexes of the elements greater than 10. 
// 	Input: [1.6, 11.34, 29.23, 7, 3.11, 18]
// 	Output: 1, 2, 5




'use strict'

function greaterThanTen(a) {
   let z = [];

    for (let i = 0; i < a.length; i++) {
        if (a[i] > 10) {
            z.push(i)
        }
    }

    return z;
}
console.log(greaterThanTen([1.6, 11.34, 29.23, 7, 3.11, 18]));