let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');

toggle.addEventListener('click', function () {
    body.classList.toggle('open');
})





document.addEventListener('scroll', () => {
    const element = document.querySelector('.choice-category');
    const distance = element.getBoundingClientRect().top;

    if (distance <= 0) {
        element.classList.add("scrolled");
    } else {
        element.classList.remove("scrolled");
    }
});

const gap = 15;

const carousel = document.getElementById("carousel"),
    content = document.querySelector("content"),
    next = document.getElementById("right"),
    prev = document.getElementById("left");

next.addEventListener("click", e => {
    carousel.scrollBy(width + gap, 0);
    if (carousel.scrollWidth !== 0) {
        prev.style.display = "flex";
    }
    if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
        next.style.display = "none";
    }
});
prev.addEventListener("click", e => {
    carousel.scrollBy(-(width + gap), 0);
    if (carousel.scrollLeft - width - gap <= 0) {
        prev.style.display = "none";
    }
    if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
        next.style.display = "flex";
    }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));
