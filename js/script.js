// prendo gli elementi dalla pagina html
const countdown = document.getElementById('countdown');
const numbersList = document.getElementById('numbers-list');
const numberForm = document.getElementById('answers-form');

// dichiaro una variabile per i secondi
let seconds = 10;

// assegno i secondi all'interno del countdown
countdown.innerText = seconds;

