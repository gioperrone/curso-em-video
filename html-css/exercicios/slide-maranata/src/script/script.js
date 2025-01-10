const myDocument = document.documentElement;
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const buttonsIgreja = document.querySelectorAll('.btn-igreja');


function initSlideshow(slideshow) {
  const slides = slideshow.querySelectorAll('.slide');
  let currentSlideIndex = 0;

  slides.forEach(slide => {
    slide.classList.add('hidden');
  });

  slides[currentSlideIndex].classList.remove('hidden');

  setInterval(() => {
    slides[currentSlideIndex].classList.add('hidden');
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    slides[currentSlideIndex].classList.remove('hidden');
  }, 7000);
}

function initFullScreen(event) {
  const igrejaId = event.target.id;
  const selectedSlideshow = document.querySelector(`.slideshow.${igrejaId}`);

  main.classList.add('disabled');
  footer.classList.add('disabled');
  myDocument.classList.add('hidden-overflow');
  myDocument.requestFullscreen();

  selectedSlideshow.classList.remove('disabled');

  initSlideshow(selectedSlideshow);
}

buttonsIgreja.forEach(button => {
  button.addEventListener('click', initFullScreen);
});
