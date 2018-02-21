'use strict';

(function () {
    function Product(name, price, expirationDate) {

        this.id = (function () {
            var productId;
            productId = 12345;
            return productId;
        })();
        this.name = name;
        this.price = price;
        this.expirationDate = expirationDate;


        this.getInfo = function () {
            var productCode;
            productCode = this.name[0] + this.name[this.name.length - 1] + ", " + this.id + ", " + this.expirationDate;
            return productCode;

        };
    };

    function ShoppingBag() {
        this.list = [];
        this.averageProductPrice = function () {
            var sum = 0;
            for (var i = 0; i < this.list.length; i++) {
                sum = sum + this.list[i].price;
            }
            var avg = sum / this.list.length;
            return avg;
        }

        this.addProduct = function (p) {
            this.list.push(p);
        }
    };

    var coffeeExpirationDate = new Date(2018, 7, 13);
    var bananaExpirationDate = new Date(2018, 4, 15);
    var coffee = new Product('Grand kafa', 120.45, coffeeExpirationDate);
    var banana = new Product("Banana", 135.50, bananaExpirationDate);
    var weekendBag = new ShoppingBag();

    var jsList = new ShoppingBag();
    jsList.addProduct(coffee);
    jsList.addProduct(banana);
    //console.log(jsList.averageProductPrice())
    console.log(jsList);
    // console.log(coffee.getInfo());
    //console.log(banana.getInfo());
})();


