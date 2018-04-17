function Person(name, surname) {
    this.name = name;
    this.surname = surname;

}
Person.prototype.fullname = function () {
    return this.name + " " + this.surname;
}
Person.prototype.printFullname = function () {
    console.log(this.fullname());
}

var pera = new Person("Pera", "Peric");

pera.printFullname();


function Programmer(name, surname, language) {
    Person.call(this, name, surname);
    this.language = language;

}

Programmer.prototype = Object.create(Person.prototype);
Programmer.prototype.constructor = "Programmer";
console.log(Programmer.prototype);

Programmer.prototype.printInfo = function () {

    var fullNameString = Programmer.prototype.__proto__.fullname.call(this);
    return fullNameString + " " + this.language;

    //console.log(this.name,this.surname,this.surname);
}

var zika = new Programmer("zika", "zikic", "JS");
console.log(zika);
zika.printInfo();


