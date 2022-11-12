const container = document.querySelector('.container');
const movieSelection = document.getElementById('movie');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const countSpan = document.querySelector('.count');
const priceSpan = document.querySelector('.price');

populateUI();

let ticketPrice = +movieSelection.value;

//update of tickets price when selecting another movie

const setMovieData = (movieIndex, moviePrice) => {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
};

const ticketPriceUpdate = (e) => {
  ticketPrice = e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  countSelectedSeats();
};

//add selected seats and ticket price to summary on bottom of page

const countSelectedSeats = () => {
  const selectedSeats = [...document.querySelectorAll('.row .seat.selected')];

  const selectedSeatsIndex = selectedSeats.map((seat) =>
    [...seats].indexOf(seat)
  );

  localStorage.setItem('selectedSeatIndex', JSON.stringify(selectedSeatsIndex));

  const selectedSeatsNumber = selectedSeats.length;

  countSpan.textContent = selectedSeatsNumber;
  priceSpan.textContent = selectedSeatsNumber * ticketPrice;

  movieSelection.addEventListener('change', ticketPriceUpdate);
};

function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeatIndex'));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

  if (selectedMovieIndex !== null)
    movieSelection.selectedIndex = selectedMovieIndex;
}

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
countSelectedSeats();
