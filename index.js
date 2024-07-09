"use strict"
//alert('Hello');
//const result = confirm("Are you here?");
//const answer = prompt("How old are you?", "5");
//console.log(typeof(answer));

const personalMovieDB = {
    actors: {},
    count: 0,
    genres: [],
    movies: {},
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '')

        while(personalMovieDB.count === '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '')
        }
    },
    rememberMyFilms: function () {
        let a;
        for(let i = 0; i < 2; i++) {
            do {
                a = prompt("Один из последниз просмотренных фильмов?", "");
            } while ( a == null || a.length > 50 || a === '');
            personalMovieDB.movies[a] = prompt("Оцените его", "");
        }
    },
    detectPersonalityLevel: function () {
        if( personalMovieDB.count < 10 ) {
            alert("Просмотрено довольно мало фильмов");
        } else if ( personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
            alert("Вы классический зритель");
        } else if ( personalMovieDB.count >= 30 ) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка")
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++ ) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
            if( genre === '' || genre == null) {
                i--;
            } else personalMovieDB.genres[i - 1] = genre;
        }

        //let j = 1;
        //for ( let k of personalMovieDB.genres) {
        //    console.log(`Любимый жанр под номером #${j++} - это ${k}`);
        //}

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр под номером #${i+1} - это ${item}`);
        });
    },
    showMyDB: function (hidden) {
        if(!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        personalMovieDB.privat = !personalMovieDB.privat;
    }
};

