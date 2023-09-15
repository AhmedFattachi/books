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

// Clonez les cartes et ajoutez-les à la fin du carrousel
const clonedCards = [...cards].map(card => card.cloneNode(true));
clonedCards.forEach(clonedCard => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('card-wrapper');
    wrapper.appendChild(clonedCard);
    carousel.appendChild(wrapper);
});

nextButton.addEventListener('click', () => {
    if (currentIndex < numCards - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = numCards - 1;
    }
    updateCarousel();
});

function updateCarousel() {
    const translateX = -currentIndex * (cardWidth + cardMargin);
    carousel.style.transition = 'transform 0.5s ease-in-out';
    carousel.style.transform = `translateX(${translateX}px)`;

    // Gestion de la visibilité des boutons
    if (currentIndex === 0) {
        prevButton.style.display = 'none';
        nextButton.style.display = 'block';
    } else if (currentIndex === numCards - 3) {
        prevButton.style.display = 'block';
        nextButton.style.display = 'none';
    } else {
        prevButton.style.display = 'block';
        nextButton.style.display = 'block';
    }
}

// Gestion initiale de la visibilité des boutons
prevButton.style.display = 'none';
if (numCards <= 1) {
    nextButton.style.display = 'none';
}


