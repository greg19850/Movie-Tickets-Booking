const container = document.querySelector('.container');
const movieSelection = document.getElementById('movie');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');

const countSpan = document.querySelector('.count');
const priceSpan = document.querySelector('.price');

let ticketPrice = +movieSelection.value;

// AddEventListener to select not occupied seats

const selectSeats = (e) => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');

    countSelectedSeats();
  }
};

container.addEventListener('click', selectSeats);
