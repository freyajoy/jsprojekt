let slideIndex = 1;
showSlides(slideIndex);

// Navigationsfunktioner for slides:
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//Navigationsfunktioner for thumbnails:
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("thumbnail");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";

  dots[slideIndex-1].className += " active";
}


//EventListener:
document.addEventListener('DOMContentLoaded', (event) => {

  let prevButton = document.querySelector('.prev');
  let nextButton = document.querySelector('.next');

  prevButton.addEventListener('click', function() {
      plusSlides(-1);
  });

  nextButton.addEventListener('click', function() {
      plusSlides(1);
  });

  let thumbnails = document.querySelectorAll('.thumbnail');
  for (let i = 0; i < thumbnails.length; i++) {
      thumbnails[i].addEventListener('click', (function(index) {
          return function() {
              currentSlide(index + 1);
          };
      })(i));
  }
});