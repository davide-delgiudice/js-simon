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
const timer = 30;

// creo una funzione che mi generi dei numeri casuali
const generateRandomNumbers = (min, max, total) => {
    // dichiaro un array vuoto che dovrà contenere dei numeri casuali
    const rNumbers = [];

}