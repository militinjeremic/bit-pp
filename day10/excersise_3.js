//ne radi

function comb(a, b) {
    var i = 0;
    var j = 0;
    var k = 0;
    var o = 0;
    var c = [];
    for (i = 0, j = 0, k = 0; i < a.length && j < b.length; i++ , j++) {
        c[k] = a[i];
        k++;
        c[k] = b[j];
k++;
    }

    return c;
    }
   

console.log(comb([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]));