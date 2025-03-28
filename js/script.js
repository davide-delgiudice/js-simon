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

// evoco la funzione
const rNumbers = generateRandomNumbers(min, max, totalNumbers);

// stampo la funzione
console.log(numbers);

// assegno i numeri randomici ad una list item
for(let i=0; i<rNumbers.lenght; i++){
    li += `<li>${numbers[i]}</li>`
}

// inserisco la list item nel DOM
numberList.innerHTML = li;

// inserisco il countdown nel DOM
countdown.innerText = seconds;

// creo una funzione per startare il countdown
const timer = setInterval(() => {
    countdown.innerText = --seconds;

    if (seconds === 0){
        // rimuovo la funzione setInterval
        clearInterval(timer);
        // rimuovo la classe display none nel form
        form.classList.remove('d-none');
        // aggiungo la classe display none alla unordered list
        numberList.classList.add('d-none');
        instructions.innerText = 'Inserisci i valori che ricordi (Anche in ordine casuale)';
    }
}, 1000);

// aggiungo una funzione al click del bottone
button.addEventListener('click', (event) => {
    event.preventDefault();

    // dichiaro un array vuoto che dovrà contenere i numeri indovinati dall'utente
    const guessNumbers = [];

    // ciclo i valori inseriti in input dall'utente
    for (i=0; i<input.lenght; i++){
        const inputNumbers = input[i];

        const value = parseInt(inputNumbers.value);

        // inserisco il numero nell'array vuoto
        guessNumbers.push(value)
    }


})