var a = [6, 5, 7, 9, 11, 5, 11, 10];

var max = a[0];

var i;

for(i = 1; i < a.length; i++){
    if(a[i] > max){
        max = a[i];
    }

}
console.log(max);