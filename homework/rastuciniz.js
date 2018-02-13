var a = 6;
var b = 0;
var c = -9;
var temp;
// if(a>b) {
//     temp = b;
//     b = a;
//     a = temp
// }
// if(b>c) {
//     temp = b;
//     b = c;
//     c = temp
// }
// if(a>b) {
//     temp = b;
//     b = a;
//     a = temp
// }
// console.log(a,b,c);
if(a>b && a>c) {
    if(b>c) { console.log(c,b,a, "cba")}
    else {console.log(b,c,a, "bca")}
}
if(b>a && b>c) {
    if(a>c) { console.log(c,a,b, "cab")}
    else {console.log(a,c,b, "acb")}
}
if(c>b && c>a) {
    if(a>b) { console.log(b,a,c, "bac")}
    else {console.log(a,b,c, "abc")}
}