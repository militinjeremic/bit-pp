
// Write a function that capitalizes the first letter of each string argument it receives.  
// Function arguments: ‘hello’, ‘there’, ‘ES’, 6
// Output: ‘Hello’, ‘there’, ‘ES’

'use strict'

function captLetter(...args) {

    let checkIfString = function (x) {
        return typeof x == 'string';
    }

    let b = args.filter(checkIfString);

    b = b.map(function (item) {
        
        return item[0].toUpperCase() + item.slice(1);
    });


    return b;
}
console.log(captLetter("hello", "there", "ES", 6));