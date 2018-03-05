var dataModule = (function () {

    function User(username, password) {
        this.username = username;
        this.password = password;
    }

    function Database() {
        this.database = [];

    }


    Database.prototype.checkUsernameAndPassword = function (username,password) {
        var userExist = false;
        this.database.forEach(function (user) {
            if (user.username == username && user.password == password) {
                userExist = true;
                return;
            }
        });

        return userExist;

    }


    Database.prototype.addUser = function (user) {
        //var user = new User(username, password);

        if (this.checkUsernameAndPassword(user.username,user.password) == false) {

            this.database.push(user);

        }

    }

    var database = new Database();

    var pera = new User ("pera", "pera123");
    

    database.addUser(pera);

    console.log(database);
    return {
        checkUsernameAndPassword:function(username,password){
            return database.checkUsernameAndPassword(username,password);
        }
    }



})();