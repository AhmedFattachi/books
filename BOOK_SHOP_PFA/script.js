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

prevButton.style.display = 'none';
if (numCards <= 1) {
    nextButton.style.display = 'none';
}

const carousel2 = document.querySelector('.content-bs'); 
const cards2 = document.querySelectorAll('.carte-bestsellers-books'); 
const prevButton2 = document.querySelector('.left-bs'); 
const nextButton2 = document.querySelector('.right-bs'); 
const cardWidth2 = cards2[0].offsetWidth + 10;
const cardMargin2 = 10; 
let currentIndex2 = 0;
const numCards2 = cards2.length;

const clonedCards2 = [...cards2].map(card => card.cloneNode(true));
clonedCards2.forEach(clonedCard => {
    const wrapper2 = document.createElement('div');
    wrapper2.classList.add('card-wrapper');
    wrapper2.appendChild(clonedCard);
    carousel2.appendChild(wrapper2);
});

nextButton2.addEventListener('click', () => {
    if (currentIndex2 < numCards2 - 1) {
        currentIndex2++;
    } else {
        currentIndex2 = 0;
    }
    updateCarousel2();
});

prevButton2.addEventListener('click', () => {
    if (currentIndex2 > 0) {
        currentIndex2--;
    } else {
        currentIndex2 = numCards2 - 1;
    }
    updateCarousel2();
});

function updateCarousel2() {
    const translateX2 = -currentIndex2 * (cardWidth2 + cardMargin2);
    carousel2.style.transition = 'transform 0.5s ease-in-out';
    carousel2.style.transform = `translateX(${translateX2}px)`;

    if (currentIndex2 === 0) {
        prevButton2.style.display = 'none';
        nextButton2.style.display = 'block';
    } else if (currentIndex2 === numCards2 - 3) {
        prevButton2.style.display = 'block';
        nextButton2.style.display = 'none';
    } else {
        prevButton2.style.display = 'block';
        nextButton2.style.display = 'block';
    }
}

prevButton2.style.display = 'none';
if (numCards2 <= 1) {
    nextButton2.style.display = 'none';
}
