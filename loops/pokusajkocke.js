var n = 4;
var s = "*";

for(var r = 0; r <= n-1; r++){

    if(r == 0 || r == n-1){
        var line = "";
        for(var i = 0; i < n; i++){
            line += s
        }
        /* prins n s symbols */
    
    line += "\n";
    console.log(line);
    }

    else{
        var line = ""
        /* print s */
        line = line + s
        /* print n-2 spaces */
        for(var i = 0; i < n-2;i++){
            line = line + " "

        }
        line = line + s
        line += "\n";
        /* print s */


    }
}

var n = 5;
var line =""
for(var i = 0; i < n; i++){
    line = line + "*";
}
line = line +"\n";
console.log(line)



