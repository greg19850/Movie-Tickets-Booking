const container = document.querySelector('.container');
const movieSelection = document.getElementById('movie');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');

const countSpan = document.querySelector('.count');
const priceSpan = document.querySelector('.price');

let ticketPrice = movieSelection.value;
