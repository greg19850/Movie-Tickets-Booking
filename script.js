const container = document.querySelector('.container');
const movieSelection = document.getElementById('movie');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');

const countSpan = document.querySelector('.count');
const priceSpan = document.querySelector('.price');

let ticketPrice = +movieSelection.value;

//add selected seats and ticket price to summary on bottom of page

const countSelectedSeats = () => {
  const selectedSeatsNumber = document.querySelectorAll(
    '.row .seat.selected'
  ).length;

  countSpan.textContent = selectedSeatsNumber;
  priceSpan.textContent = selectedSeatsNumber * ticketPrice;
};

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
