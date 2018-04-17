// Write a function that filters all the strings from the given array that contain substring JS or js.
// 	Input: ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']
// 	Output: ['babel.js, 'JS standard']



'use strict'

function jsJS(a) {

    a = a.map(function (item) {

        return item.toLowerCase();
    });

    let checkForJS = function (x) {
        return x.includes('js')
    }

    a = a.filter(checkForJS);

    return a;

}
console.log(jsJS(['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']));