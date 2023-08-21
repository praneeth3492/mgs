let slides = document.querySelectorAll('.slide');
let arrowPrev = document.querySelector('.arrow-prev');
let arrowNext = document.querySelector('.arrow-next');
let index = 0;

arrowNext.addEventListener('click', () => {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
});

arrowPrev.addEventListener('click', () => {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
});

slides.forEach((slide, idx) => {
    slide.addEventListener('click', () => {
        slides[index].classList.remove('active');
        index = idx;
        slides[index].classList.add('active');
    });
});
