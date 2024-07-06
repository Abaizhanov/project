"use strict"
//alert('Hello');
//const result = confirm("Are you here?");
//const answer = prompt("How old are you?", "5");
//console.log(typeof(answer));
let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '')

    while(numberOfFilms === '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '')
    }
}

start();

const personalMovieDB = {
    actors: {},
    count: numberOfFilms,
    genres: [],
    movies: {},
    privat: false
};


function rememberMyFilms() {
    let a;
    for(let i = 0; i < 2; i++) {
        do {
            a = prompt("Один из последниз просмотренных фильмов?", "");
        } while ( a == null || a.length > 50 || a === '');
        personalMovieDB.movies[a] = prompt("Оцените его", "");
    }
}

rememberMyFilms();

function detectPersonalityLevel() {
    if( personalMovieDB.count < 10 ) {
        alert("Просмотрено довольно мало фильмов");
    } else if ( personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
        alert("Вы классический зритель");
    } else if ( personalMovieDB.count >= 30 ) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка")
    }
}

detectPersonalityLevel();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++ ) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый данр под номером ${i}`, '');
    }
}

writeYourGenres();

function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);
