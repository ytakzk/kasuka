var slides = [];
var currentSlide = 0;

window.onload = function() {
  for (var i = 0; i < 7; i++) {
    slides[i] = document.getElementById('slide' + i);
    if (i == 0)
      slides[i].style.opacity = 1;
  }
  setInterval('slide()',3000);
}

function slide() {
  slides[currentSlide].style.opacity = 0;
  if (currentSlide < slides.length-1) {
    currentSlide++;
  } else {
    currentSlide = 0;
  }
  slides[currentSlide].style.opacity = 1;
}
