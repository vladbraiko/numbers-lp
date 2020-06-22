import refs from './refs';

refs.priceButton.addEventListener('click', scrollToPrice);
refs.lawButton.addEventListener('click', scrollToLaw);
refs.deliveryButton.addEventListener('click', scrollToDelivery);
refs.commentsButton.addEventListener('click', scrollToComments);

function scrollToPrice() {
  window.scrollBy({
    top: 1800,
    left: 0,
    behavior: 'smooth',
  });
}

function scrollToLaw() {
  window.scrollBy({
    top: 1050,
    left: 0,
    behavior: 'smooth',
  });
}

function scrollToDelivery() {
  window.scrollBy({
    top: 200,
    left: 0,
    behavior: 'smooth',
  });
}

function scrollToComments() {
  window.scrollBy({
    top: 2600,
    left: 0,
    behavior: 'smooth',
  });
}
