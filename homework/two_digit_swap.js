var n = 74;
var string;
//var new_n;

if(typeof n == "number" && n>9 && n<100 && !(n%1)) {
    if(!(n%10)) {
        n = (n-n%10)/10 + 10*(n%10);
        console.log("0" + n);
    }
    else {
        n = (n-n%10)/10 + 10*(n%10);
        console.log(n);
    }
}
else {
    console.log("Greška!")
}
