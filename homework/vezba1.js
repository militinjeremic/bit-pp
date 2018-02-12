// function kvadrat(a){

//     var stringKonacan = "";

//     for(var i = 0 ; i < a ; i++){
//         if(i==0 || i==a-1){

//           for(var j = 0; j<a; j++){
//               stringKonacan += "*";
//           }

//           stringKonacan += "\n";
//         }else{
//             for(var k =0; k<a;k++){
//                 if(k==0 || k==a-1){
//                     stringKonacan += "*";
//                 }else{
//                     stringKonacan +=" ";
//                 }
//             }
//             stringKonacan +="\n";
            
//         }
//     }
//     return stringKonacan;
// }

// console.log(kvadrat(10));

function kvadrat(a){

    var stringKonacan = "";
    var prviPoslednji = "";
    var ostali = "";

    //prvi i posednji
    for(var j = 0; j<a; j++){
        prviPoslednji += "*";
    }
    prviPoslednji += "\n";

    //ostali
    for(var k =0; k<a;k++){
        if(k==0 || k==a-1){
            ostali += "*";
        }else{
            ostali +=" ";
        }
    }
    ostali +="\n";

    for(var i = 0 ; i < a ; i++){
        if(i==0 || i==a-1){
         stringKonacan += prviPoslednji;
        }else{
         stringKonacan += ostali;
        }
    }
    // console.log(stringKonacan);
    
    return stringKonacan;

}

console.log(kvadrat(10));
