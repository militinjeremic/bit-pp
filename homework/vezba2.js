// function returnNumberWithSuffix(a) {

//     var string = "";
//     if (a < 100) {
//         if (a == 1) {
//             string += a + "st";
//         } else if (a == 2) {
//             string += a + "nd";
//         } else if (a == 3) {
//             string += a + "rd";
//         } else {
//             //svi sa th
//             string += a + "th";
//         }
//     } else {
//         string = "broj je veci od 100";
//     }
//     return string;
// }
// console.log(returnNumberWithSuffix(1));
// console.log(returnNumberWithSuffix(92));


// function humanize(num) {

//     if (typeof (num) == "undefined") {
//         return;
//     }

//     if (num % 100 >= 11 && num % 100 <= 13) {
//         return num + "th";
//     }

//     switch (num % 10) {
//         case 1: return num + "st";
//         case 2: return num + "nd";
//         case 3: return num + "rd";
//     }
//     return num + "th";
// }


// console.log(humanize());
// console.log(humanize(1));
// console.log(humanize(8));
// console.log(humanize(301));
// console.log(humanize(402));

function isNumberInArray(a,e){
    var niz = a;
    var broj = e;

    var rezultat = "no";

    for(var i = 0; i<niz.length; i++){
        if(niz[i] == e){
            return rezultat = "yes";
        }
    }
    return rezultat;


}

console.log(isNumberInArray([5,3,15,22,2],2))

function multiplePositiveNumbers(a){
    var niz = a;
    
    var rezultat = 1;
    
    for(var i = 0; i<niz.length; i++){
        if(niz[i]> 0 && niz[i] % 2 ==0){
            rezultat *= niz[i];
        }
    }
    return rezultat;


}

console.log(multiplePositiveNumbers([10,-3,15,-22,2]))