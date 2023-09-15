let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');

toggle.addEventListener('click', function () {
    body.classList.toggle('open');
})


const carousel = document.querySelector('.content');
const cards = document.querySelectorAll('.carte-populair-books');
const prevButton = document.querySelector('.left');
const nextButton = document.querySelector('.right');
const cardWidth = cards[0].offsetWidth + 10; 
const cardMargin = 10; 
let currentIndex = 0;


const numCards = cards.length;
const clonedCards = [...cards].map(card => card.cloneNode(true));
clonedCards.forEach(clonedCard => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('card-wrapper');
    wrapper.appendChild(clonedCard);
    carousel.appendChild(wrapper);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % (numCards + 1); // 
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + numCards + 1) % (numCards + 1);
    updateCarousel();
});

function updateCarousel() {
    const translateX = -currentIndex * (cardWidth + cardMargin);
    carousel.style.transition = 'transform 0.5s ease-in-out';
    carousel.style.transform = `translateX(${translateX}px)`;

    if (currentIndex === numCards) {
        setTimeout(() => {
            carousel.style.transition = 'none';
            currentIndex = 0;
            updateCarousel();
        }, 600);
    }
}
