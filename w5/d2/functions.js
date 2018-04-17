function Person(name, surname) {
    this.name = name;
    this.surname = surname;

    this.print = function () {
        console.log(name, surname);
    }
}

var pera = new Person("Pera", "Peric");
pera.print();

pera.name = "Zika";
pera.print()

//-------------------------------------------------------------------------------------------//




function add(a) {
    var b = 2
    return function () {

        return a + b;
    }
}

var f = add(5);
var res = f();
console.log(res);


//--------------------------------------------------------------------------------------------------//


function selection(a, f) {
    var newArray = [];
    for (var i = 0; i < a.length; i++) {
        if (f(a[i])) {
            newArray.push(a[i]);
        }
    }
    return newArray;
}

function lessThan(n) {
    return function (x) {
        return x < n;
    }
}

var numbers = [2, 6, 7, 23, 11, 45, 451, 89, 4, 5];
var numbersFiltered = selection(numbers, lessThan(10));

console.log(numbersFiltered)



function startWihPro(s) {

    if (s.toLowerCase().indexOf('pro') == 0) {
        return true;
    }
    return false;
}

var strings = ['programing', 'Product', 'abc', 'prot', 'Prostitutka'];

var filteredStrings = selection(strings, startWihPro);

console.log(filteredStrings);