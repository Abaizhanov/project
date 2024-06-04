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

const a= prompt("Один из последниз просмотренных фильмов?", ""),
      b= prompt("Оцените его", ""),
      c= prompt("Один из последниз просмотренных фильмов?", ""),
      d= prompt("Оцените его", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB)