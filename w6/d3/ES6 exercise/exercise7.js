// Write a function that filters all integer arguments that contain digit 5.
// 	Function arguments: 23, 11.5, 9, 'abc', 45, 28, 553 
// 	Output: 45, 553




'use strict'

function filterFive(...args) {

    

    let b = args.map(function (item) {
        
        return item + '';
    });

    let checkForFive = function (x) {
        return x.includes('5')
    }

    b = b.filter(checkForFive);


    return b;
}
console.log(filterFive(23, 11.5, 9, 'abc', 45, 28, 553));