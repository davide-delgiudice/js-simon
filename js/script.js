// prendo gli elementi dalla pagina html
const countdown = document.getElementById('countdown');
const numbersList = document.getElementById('numbers-list');
const numberForm = document.getElementById('answers-form');

// dichiaro una variabile per i secondi
let seconds = 10;

// assegno i secondi all'interno del countdown
countdown.innerText = seconds;

// dichiaro una costante per decretare la fine del countdown
const interval = setInterval(function(){

    // verifico a che valore sono arrivati i secondi
    if(seconds != 0){
        countdown.innerText = seconds;
    }
    else{
        clearInterval(interval);
    }

    // devo decrementare i secondi
    seconds--;
}, 1000);