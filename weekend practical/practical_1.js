// practical 6

// 1.

function count(someString) {
    var counter = 0;
    var index;
    var vowels = ['a', 'e', 'i', 'o','u'];

    for(var j = 0; j < vowels.length; j++){
        for( var i = 0; i < someString.length; i++){
            index = someString.indexOf(vowels[j], i);
            if(index != -1) {
            counter++;
            i= index;
        }
        }
    }
    return counter;
}

console.log(count('ahfurteoplujusioytar'));

// 2.

function combine(firstArray, secondArray) {

    var thirdArray = [];

    for(var i= 0, j=0, k=0; k<firstArray.length + secondArray.length; k+= 2, i++, j++) {

        thirdArray[k] = firstArray[i];
        thirdArray[k+1] = secondArray[j];

        
    }
    return thirdArray;
}
console.log(combine([1,2,3],["a", "b", "c"]));

// 3.

function rotate(array, elem){

    var temp;
    
    for(var i=0; i < elem; i++){
        temp = array[0];
        for(var j=0; j< array.length-1; j++){
            array[j] = array[j+1];
        }
        array[j]=temp;
    }
    return array;
}

console.log(rotate([1,2,3,4,5,6], 2));


// 4.

function digitsToArray(n) {
    return n.toString().split("");
}

console.log(digitsToArray(4568));

function digits(n){
    var a = [];
    n = n + '';

    for(var i = 0; i< n.length; i++){
        a[i] = n[i];
    }
return a;
}

console.log(digits('6754'));