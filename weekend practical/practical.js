// practical 
// 1.

function max(x,y){
    return (x>y)?x:y;
}
console.log(max(8,10));

//2.

function odd(n){
    if(n % 2 != 0){
        return true;    
    } else {
        return false;
    }
}

console.log(odd(7));

// 3.

function check(m){

    if(m > 99 && m< 1000 || m < -99 && m > -1000){
        return true;
    } else {
        return false;
    }
}

console.log(check(1435));

// 4.

function calc(n,m,k,l){

    return (n+m+k+l) / 4;

}

console.log(calc(4,5,6,7));

// 5.

//kada uvek iscrtavamo kvadrat velicine 5x5
function draw(){
    s="";
    //tip za prvi i poslednji red
    red1 = "*****\n";
    red2 = "*   *\n";
    //prolazimo kroz redove
    for (i=1; i<=5; i++) {
        if (i == 1 || i == 5) {
            s = s + red1;
        } else {
            s = s + red2;
        }
    }
    return s;
}

console.log(draw());

//za bilo koju velicinu kvadrata NxN
//nacin 1

function drawFlex(n){
    var s="";
    var red1="";
    var red2="";
    //generisemo ona dva tipa redova u zavisnosti od unetog argumenta n
    for (var i=1; i<=n; i++) {
        red1 = red1 + "*";
    }
    red1 = red1 +"\n";
    for (var i = 1; i<=n; i++) {
        if (i == 1 || i == n) {
            red2 = red2 + "*";
        } else {
            red2 = red2 +".";
        }
    }
    red2 = red2 +"\n";
    for (var i=1; i<=n; i++) {
        if (i == 1 || i == n) {
            s = s + red1;
        } else {
            s = s + red2;
        }
    }
    return s;
}
console.log(drawFlex(50));

//nacin 2

function drawFlexNested(n) {
    s="";
    for (var i = 1; i<=n; i++) {
        for (var j = 1; j <=n; j++) {
            //pitamo da li smo u prvom ili u poslednjem redu
            if(i == 1 || i == n) {
                s += "*";
            } else {
            // pitamo da li smo skroz levo ili skroz denso (prva ili poslednja kolona)
            if (j == 1 || j== n) {
                s += "*";
            } else {
                s += " ";
            }
            }          
        }
        s+="\n";
    }
    return s;
}

console.log(drawFlexNested(7));

//6.
//nacin 1

function chart(n,l,t){

    var line1 = line2 = line3 = '';

    for(var i = 1; i <= n; i++){
        line1 += '*';
    }
    for(var i = 1; i <= l; i++){
        line2 += '*';
    }
    for(var i = 1; i <= t; i++){
        line3 += '*';
    }
    return line1 + '\n' + line2 + '\n' + line3; 
}

console.log(chart(4,9,16));

//nacin 2

function chartFlex(){
    var s = "";
    for (var i = 0; i <=arguments.length - 1 ; i++){
        for (var j = 0; j< arguments[i]; j++){
            s += "*";
        }
        s += "\n";
    }
    return s;
}

console.log(chartFlex(4,8,23,9,41));

//7.

function calc(n){
    var c = 0;

    while (n > 0){
        c++;
        n = parseInt (n / 10);
    
    }
    return c;
}

console.log(calc(451));

// 8.


function app(m,l) {

    var counter = 0;

    for(var i = 0; i< m.length; i++){
        if(m[i] == l){
            counter++;
        }

    }
    return counter;
}

console.log(app([1,2,1,3,1,4,1,5,1,6], 1));

// 9.

function odd(n) {
    var sum = 0;

    for(var i = 0; i < n.length; i++){
        if(n[i] % 2 != 0){
            sum += n[i];
        }
    }
    return sum;
}

console.log(odd([4,5,7,8,9,452,-451]));

console.log(-29 % 2);

// 10.


function calc(b,c,d) {
    var x = 0;

    for(var i=0; i<b.length; i++){
        if(b[i] == c || b[i] == d) {
            x++;
        }
    }
  return x;  
}

console.log(calc('atdoftaApgeptaAA', 'a', 'A'));

// 11.

function concat(someString,nTimes){
    var newString = '';

    for(var i =0; i<nTimes; i++){
        newString+=someString;
    }
    return newString;
}

console.log(concat('abc', 10));