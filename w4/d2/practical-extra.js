
// Write a function that finds the smallest element of a given array. 
// The function should return an object that contains the smallest value and its last position in the array.



function smallestObj(a) {

    // var min = Math.min(a);

    var min = a[0];
    var indexMin = 0;
    for (var i = 0; i < a.length; i++) {

        if (a[i] < min) {
            min = a[i];
            indexMin = i;
        }

    }

    //   function OurObject(min, indexMin) {

    //     this.value = min;
    //     this.index = indexMin;
    //   }

    //   var h = new OurObject(min, indexMin);

    var h = {};
    h.value = min;
    h.index = indexMin;

    return h;
}


console.log(smallestObj([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));



//----------------------------------------------------------------------------------------------------------------//

// a)

var shopping = function() {

}


var list = [a, b, c];

var a = {
    name: "apple",
    price: 100,
}

var b = {
    name: "milk",
    price: 80,
}

var c = {
    name: "bananas",
    price: 150,
}

var totalPrice = a.price + b.price + c.price;
console.log(totalPrice);


// b) average price

var averagePrice = (totalPrice / 3);


// c) Write a function that prints out the name of the most expensive product on your shopping list. Write the name in uppercase. 



// 8. Write a function that for a given departure and arrival time calculates the time the trip takes.

function daysTillBDay(birthday) {
    var bDay = new Date(birthday).getTime();
    var today = new Date().getTime();

    var daysTilBDay = Math.floor((bDay - today)/1000/3600/24);
    return daysTilBDay;
}

console.log(daysTillBDay("19 June 2018"))




// 9 Write a function that for a given departure and arrival time calculates the time the trip takes


function tripTime (dep,arr){
    var departure= new Date(dep).getTime();
    var arrival=new Date(arr).getTime();


    var tripTimeHours=Math.floor((arrival-departure)/1000/3600);

    var tripTimeMinutes=Math.floor((arrival-departure)/1000/60) - tripTimeHours*60;

    var tripTimeSeconds=Math.floor((arrival-departure)/1000) - tripTimeHours*60*60 - tripTimeMinutes*60;
    

    return tripTimeHours + ":" + tripTimeMinutes +":" + tripTimeSeconds;
}
console.log(tripTime("February 20, 2018 8:22:13", "february 20, 2018 11:43:22"));



//zadatak 10

// Write a constructor function that creates points in space. Each point in space has its own x, y, and z coordinate. For example, (3, 5, 1) can be a point in space

function point(a,b,c){
    this.x=a,
    this.y=b,
    this.z=c;
    var tacka = new point(3,5,1);
    return tacka;
    
}


console.log(x,y,z);

function t1(){

}


