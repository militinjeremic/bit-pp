var a = [6, 5, 7, 9, 11, 5, 11, 10, 89, 5,  12];

var min = a[0];
var position =0;

var i;
//od poslednje ka prvom
for(i= a.length -1; i >=0; i--){
    console.log(a[i])
}

/*for(i = 1; i < a.length; i++){
    if(min >= a[i]){
        min = a[i];
        position = i;
    }

}
console.log(min + " Is on the position " + position);