// "use strict"

// const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false

// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = prompt('На сколько его оцените?', ''),
//     c = prompt('Один из последних просмотренных фильмов?', ''),
//     d = prompt('На сколько его оцените?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB)

if (4 == 4) {
    console.log("ok");
} else {
    console.log("error");
}

const num = 50;
if (num < 49) {
    console.log("error");
} else if (num > 100) {
    console.log("error too");
} else {
    console.log("ok");
}

(num === 50) ? console.log('OK') : console.log(errror);

const num_1 = 4565;

switch (num_1) {
    case 47 :
        console.log('no');
        break;  
    case 12 :
        console.log('no');
        break;
        case 45 :
        console.log('ok');
        break;    
    default :
        console.log('no no no');
        break;   
}

var select = document.querySelector('select');
var para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather() {
  var choice = select.value;

  if (choice === 'heat') {
    para.textContent = 'Сегодня хорошо и солнечно. Носите шорты! Идите на пляж, или в парк, и купите мороженое.';
  } else if (choice === 'rainy') {
    para.textContent = 'Дождь падает за окном; возьмите плащ и зонт, и не находитесь слишком долго на улице.';
  } else if (choice === 'cold') {
    para.textContent = 'Снег падает - морозно! Лучше всего посидеть с чашкой горячего шоколада или слепить снеговика.';
  } else if (choice === 'cool') {
    para.textContent = 'Дождя нет, но небо серое и мрачное; он все может измениться в любую минуту, поэтому на всякий случай возьмите дождевик.';
  } else {
    para.textContent = '';
  }
}