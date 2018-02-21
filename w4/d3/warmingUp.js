
//    var x = Math.cell (Math.random=()*a.length);

// console.log(shuffle([2, 3, 1, 7, 8]));



function shuffle(a) {
    //new array
    var b = [];

    //used index
    var usedIndexes = [];

    for (var i = 0; i < a.length;) {
        //in each iteration

        //generate random index
        var randomIndex;
        randomIndex = Math.floor(Math.random() * a.length);

        //check if have already used index
        if (randomIndex.indexOf(usedIndexes) != -1) {

            i++;


            //if not
            //copy the element and extended
            b.push(a[randomIndex]);
            usedIndexes.push(randomIndex);
        }
        else {
            //if yes
            //go to the next iteration
            continue;
        }
    }
}
console.log(shuffle([1, 2, 3, 4, 5, 6, 7]));
