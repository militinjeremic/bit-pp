function rotate(a,b){
    var c=[];
    var i;
    var j;
    var k;

    for(i=b, k=0;i<a.length;i++){
        c[k]=a[i];
        k++;
    }

    for(j=0;j<b;j++){
        c[k] = a[j];
        k++;
    }

    return c;
}

console.log(rotate([1, 2, 3, 4, 5,6],2));


function zadatak15(a){
    var stringRezultat = "***********"+"\n";
    var i;

    for(i = 0; i<a.length;i++){
        stringRezultat += "*"+a[i]+"*" + "\n";
    }
    stringRezultat += "***********"
    return stringRezultat;
}

console.log(zadatak15(["mkdfjkads","jksjfas","sjf","skf"]));



