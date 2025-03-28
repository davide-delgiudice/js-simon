// prendo gli elementi del DOM che mi servono
const form = document.getElementById('answers-form');
const input = document.querySelectorAll('input');
const countdown = document.getElementById('countdown');
const numberList = document.getElementById('numbers-list');
const message = document.getElementById('message');
const instructions = document.getElementById('instructions');
const button = document.querySelector('button');

// definizione delle variabili
const min = 1;
const max = 50;
const totalNumbers = 5;
let seconds = 30;
let li = "";

// creo una funzione che mi generi dei numeri casuali
const generateRandomNumbers = (min, max, total) => {
    // dichiaro un array vuoto che dovrà contenere dei numeri casuali
    const rNumbers = [];

    // genero i 5 numeri casuali
    for(let i=0; i<total; i++){
        const num = Math.floor(Math.random() * (max - min + 1)) + min;
        // inserisco il numer generato randomicamente nell'array vuoto
        rNumbers.push(num);
    }

    return rNumbers;
}

// stampo la funzione
console.log(generateRandomNumbers(1, 50, 5));

// evoco la funzione
const rNumbers = generateRandomNumbers(min, max, totalNumbers);

// assegno i numeri randomici ad una list item
for(let i=0; i<rNumbers.lenght; i++){
    li += `<li>${numbers[i]}</li>`
}

// inserisco la list item nel DOM
numberList.innerHTML = li;

// inserisco il countdown nel DOM
countdown.innerText = seconds;

// creo una funzione per startare il countdown
