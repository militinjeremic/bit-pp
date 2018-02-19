/*Write a functional expression that duplicates each element of a given array.
Input: [2, 4, 7, 11, -2, 1]
Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]*/

function duplicateElement(a) {
    var i = 0;
    var j = 0;
    var newArray = [];
    for (i = 0; i < a.length; i++ , j += 2) {
        newArray[j] = a[i];
        newArray[j + 1] = a[i];
    }
    return newArray;
}
console.log(duplicateElement([2, 4, 7, 11, -2, 1]));


/*Write a functional expression that removes all duplicates in a given array.
Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
Output: [1, 4, 8, 9, 12, 13]*/

//vise nacina resavanja. sredi ih!
function removeDuplicate(a) {
    var i = 0;
    var j;
    var newArray = [];

    // [2, 5, 4, 1] 
    // [2, 5, 4, 2, 1, 5, 5]

    //i a.indexOf(a[i], k)
    for (i = 0; i < a.length; i++) {

        ind = false;
        for (var j = 0; j<newArray.length; j++){
            if (newArray[j]==a[i]){
                ind = true;
            }
        }

        if ( newArray.indexOf(a[i]) == -1){
        if(ind == false){
          newArray.push(a[i]);  
            
        }
        
        
    }
     return a;

     // [2, 5, 4, 1, 5, 5]

     for (i = 0; i<a.length; i++){
         for (j= i+1; j< a.length; j++){
             if(a[j] == a[i]){
                 a.splice(j,1);
             }
        }
     }

}
console.log(removeDuplicate([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));

/*a.Write a function that checks if a given array has odd number of elements.
Input: [1, 2, 9, 2, 1]
Output: true
 
b.Write a function that counts a number of elements less than the middle element. If the given array has an even number of elements, print out an error message. 
Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
Output: 4 */

function oddNumbOfElements (a) {
    var message;
    if (a.length % 2 == 0){
        message = "This string has even number of elements";
    }
    else {
        message = "This string has odd number of elements";
    }
    return message;
}

console.log(oddNumbOfElements([1, 2, 9, 2, 1, 1]));

function count(a) {
    var counter = 0;
    if (a.length % 2 == 0){
        console.log("Error")
    }
    else {
        var middle = a[(a.length - 1) / 2];
        for (var i = 0; i < a.length; i++){
            if(a[i] < middle){
              counter = counter + 1;  
            }
        }
    }
    return counter;
}
console.log(count([-1, 8.1, 3, 6, 2.3, 44, 2.11]));

/*Write a function that finds the smallest element of a given array. The function should return an object that contains the smallest value and its last position in the array.*/

//?????
function findMin (a){
    var i;
    var min = a[0];
    var indexMin = 0;
    for (i = 0; i < a.length; i++){
        if (a[i] < min){
            indexMin = i;
        }
        
        }
    

function Ourobject(min, indexMin){
    this.value = min;
    this.index = indexMin;
    var h = new Ourobject(min, indexMin);
    return h;
}
console.log(findMin([7, 4, 6, 2, 33, 3, 1, 7]));
