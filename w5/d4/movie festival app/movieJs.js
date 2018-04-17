//logika aplikacije
//pbjekat film
//lisa filmova

function Movie(movieTitle, movieLength, movieGenre) {
    this.movieTitle = movieTitle;
    this.movieLength = movieLength;
    this.movieGenre = movieGenre;

    this.getAbb = function () {
        var firstIndex = 0;
        var lastIndex = this.movieGenre.length - 1;
        var output = this.movieGenre.charAt(firstIndex) + this.movieGenre.charAt(lastIndex);
        return output.toUpperCase();
    }

    this.getData = function () {
        var c = "";

        c = this.movieTitle + " " + this.movieLength + "min" + " " + this.getAbb();
        return c;
    }

}
function Program ()
//prazna lista sfiloma i broj filmova u listi i datum

//lista filmova
var allMovies = [];
var allMoviesLength = 0;
//funkcionalni interfejs
//definistati klik add movei

document.querySelector(".btn").addEventListener("click", function (event) {

    //1--- procitati unete podatke
    var movieTitle = document.querySelector("#movie_title").value;
    var movieLength = document.querySelector("#movie_length").value;
    //var movieGenre = document.querySelector(".form-control").value;

    var movieGenreIndex = document.querySelector("#luka").selectedIndex;
    movieGenreValue = document.querySelector("#luka").options[movieGenreIndex].value;
    
    //2--- validacija

    var divError = document.getElementById("error");
    var textError = document.createElement("p");
    divError.appendChild(textError);
    
  
    var error = {
        OK: '',
        INSERT_TITLE: 'Please insert Movie title',
        INSERT_LENGTH: 'Please check movie length',
        SELECT_GENRE: 'Please check movie genre'
    }

    if (movieTitle === '') {
        return textError.innerHTML = error.INSERT_TITLE;
    }

    if (isNaN(movieLength) || movieLength === '') {
        return textError.innerHTML = error.INSERT_LENGTH;
        
    

    } if (movieGenreValue === "-") {
        return textError.innerHTML = error.SELECT_GENRE;
        // textError.innerHTML="";

    }


    //3--- napravtiti onjekat koji predstavlja film



    var movie = new Movie(movieTitle, movieLength, movieGenreValue);
    //4--- dodajemo film u listu filmova (na nivou aplilacike)
    allMovies.push(movie);
    //5--- azuriramo interfejs - prikazumo novi film
    // var myInput = function () {

    var newEl = document.createElement('li');
    var newText = document.createTextNode(movie.getData());
    newEl.appendChild(newText);
    someList = document.getElementById('movie-list');
    someList.appendChild(newEl);

    var moviesLengthCount = function () {
        var mLength = parseInt(movie.movieLength);
        allMoviesLength += mLength;
    }

    moviesLengthCount();

    var counterNode = document.getElementsByClassName("counter")[0];
    counterNode.textContent = allMoviesLength;

    //6--- azuriramo inerfejs





});