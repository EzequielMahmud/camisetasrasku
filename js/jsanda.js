let slideIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".carousel-item");
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  slides[index].style.display = "block";
}

function plusSlides(n) {
  slideIndex += n;
  const slides = document.querySelectorAll(".carousel-item");
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlide(slideIndex);
}

document.querySelector('.prev').addEventListener('click', () => {
  plusSlides(-1);
});

document.querySelector('.next').addEventListener('click', () => {
  plusSlides(1);
});

// Mostrar la primera diapositiva al cargar la página
showSlide(slideIndex);
