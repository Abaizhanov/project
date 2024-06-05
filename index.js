"use strict"
//alert('Hello');
//const result = confirm("Are you here?");
//const answer = prompt("How old are you?", "5");
//console.log(typeof(answer));
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    actors: {},
    count: numberOfFilms,
    genres: [],
    movies: {},
    privat: false
};

if( personalMovieDB.count < 10 ) {
    alert("Просмотрено довольно мало фильмов");
} else if ( personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
    alert("Вы классический зритель");
} else if ( personalMovieDB.count >= 30 ) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка")
}


let a;
for(let i = 0; i < 2; i++) {
    do {
        a = prompt("Один из последниз просмотренных фильмов?", "");
    } while ( a == null || a.length > 50 || a === '');
    personalMovieDB.movies[a] = prompt("Оцените его", "");
    }


console.log(personalMovieDB);