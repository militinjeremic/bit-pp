"use strict";
(function () {

    function Person(name, surname) {
        this.getData = function () {
            return name + " " + surname;
        }
        this.getName = function () {
            return name;
        }
        this.getSurname = function () {
            return surname;
        }

    }
    function Seat(category, number) {

        if (category == " " || typeof number == "undefined") {
            category = "E";
        }
        if (typeof number == "undefined") {
            number = Math.floor(Math.random() * (100 - 10 + 1) + 10);
        }

        if(category == "B"){
            category = "business";
        }else if(category == "E"){
            category = "economy";
        }

        this.getData = function () {
            return category.toUpperCase() + ", " + number;
        }
        this.getCategory = function () {
            return category;
        }
        this.getNumber = function () {
            return number;
        }
    }

    // var seatTest = new Seat('a', 12);
    // console.log(seatTest.getData());
    // var personTest = new Person("test", "testic");
    // console.log(personTest.getData());


    function Passenger(person, seat) {
        this.getData = function () {
            return person.getData() + ", " + seat.getData();
        }
        this.getPerson = function () {
            return person;
        }
        this.getSeat = function () {
            return seat;
        }
    }

    // var person = new Passenger(seatTest, personTest);
    // console.log(person.getData());




    function Flight(relation, date, listOfPassengers) {
        this.listOfPassengers = [];
        this.addPassenger = function (passenger) {
            
            var have2SamePassWithSameSeatNumber = false;
            var have2WithSameFullName = false;

            for (var j = 0; j < this.listOfPassengers.length; j++) {
                if (passenger.getSeat().getNumber() == this.listOfPassengers[j].getSeat().getNumber()
                    && passenger.getSeat().getCategory == this.listOfPassengers[j].getSeat().getCategory()) {
                    have2SamePassWithSameSeatNumber = true;
                }
                if(passenger.getPerson().getData() == this.listOfPassengers[j].getPerson().getData()){
                    have2WithSameFullName = true;
                    // this.listOfPassengers.splice(j,1);
                    // this.listOfPassengers.push(passenger);
                    // console.log("Zamenio sam istog putnika sa istim imenom!");
                    // return;
                }
            }
            if (this.listOfPassengers.length > 100) {
                console.log("Ima preko 100 putnika!");
            } 
            if (have2SamePassWithSameSeatNumber) {
                console.log("Ima dva ista putnika sa istim brojem sedista!");
            }
            if(have2WithSameFullName){
                console.log("Ima dva ista sa istim imenom!");
            }
     
            if(this.listOfPassengers.length < 100 && !have2SamePassWithSameSeatNumber
            && !have2WithSameFullName){
                this.listOfPassengers.push(passenger);
            }


        }
        this.getData = function () {
            var startDestination = relation.substring(0, relation.indexOf("-")).toUpperCase();
            var endDestination = relation.substring(relation.indexOf("-") + 1).toUpperCase();

            var startDestinationWithoutVowels = startDestination.replace(/[aeiou]/gi, '');
            var endDestinationWithoutVowels = endDestination.replace(/[aeiou]/gi, '');

            var shourtcutFromStartDest = startDestinationWithoutVowels.charAt(0) +
                startDestinationWithoutVowels.charAt(startDestinationWithoutVowels.length - 1);

            var shourtcutFromEndDest = endDestinationWithoutVowels.charAt(0) +
                endDestinationWithoutVowels.charAt(endDestinationWithoutVowels.length - 1);

            var result = "";
            result += new Date(date).toLocaleDateString();
            result = result + ", " + shourtcutFromStartDest + ' - ' + shourtcutFromEndDest + '\n' + '\t';
            for (var i = 0; i < this.listOfPassengers.length; i++) {
                result += this.listOfPassengers[i].getData() + "\n" + "\t";
            }

            return result;
        }
    }


    function AirPort(name, listOfFlights) {
        this.addFlight = function (flight) {
            listOfFlights.push(flight);
        }
        this.getData = function () {
            console.log(listOfFlights.length);
            var totalPassengers = 0;
            for (var j = 0; j < listOfFlights.length; j++) {
                totalPassengers += listOfFlights[j].listOfPassengers.length;
            }


            var result = "";
            result += "Airport: " + name + ', total passengers: ' + totalPassengers + '\n';
            for (var i = 0; i < listOfFlights.length; i++) {
                result += listOfFlights[i].getData() + "\n";
            }
            return result;
        }

    }

    function createPerson(firstName, lastName) {
        return new Person(firstName, lastName);
    }

    function createSeat(category, seatNumber) {
        return new Seat(category, seatNumber);
    }

    function createFlight(date, relation) {
        return new Flight(relation, date);
    }

    function createPassenger(firstName, lastName, category, seatNumber) {
        var person = createPerson(firstName, lastName);
        var seat = createSeat(category, seatNumber);
        return new Passenger(person, seat);
    }

    //4 putnika
    // var got1 = createPassenger("John", "Snow", "b", 1);
    var got1 = createPassenger("Cersei", "Lannister", "e", 14);
    var got2 = createPassenger("Cersei", "Lannister", "e", 14);
    var got3 = createPassenger("Daenerys", "Targaryen", "e", 14);
    var got4 = createPassenger("Tyrion", "Lannister");

    //PRVI let sa 1 putnikom
    var passengerTest = createPassenger("test", "testic", "a", 9);
    console.log(passengerTest.getData());

    var firstFligth = createFlight('12.05.2015', "Belgrade-Paris", []);
    firstFligth.addPassenger(got1);
    firstFligth.addPassenger(got2);
    firstFligth.addPassenger(got3);
    console.log(firstFligth.getData());

    //DRUGI let sa 2 putnika
    var passenger2 = createPassenger("test2", "testic2", "a2", 25);
    console.log(passenger2.getData());

    var secoundFligth = createFlight('12.05.2015', "Belgrade-Borca", []);
    secoundFligth.addPassenger(got3);
    secoundFligth.addPassenger(got4);
    // secoundFligth.addPassenger(passengerTest);

    console.log(secoundFligth.getData());

    //Aerodrom
    var airport = new AirPort("Nikola Tesla", [firstFligth, secoundFligth]);
    console.log(airport.getData());




}
)

