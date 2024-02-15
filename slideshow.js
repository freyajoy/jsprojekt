//Her erklæres variablen "slideIndex", som holder styr på hvilket slide der er den aktuelle. Den sættes til 1 for at starte fra den første slide. 
//Funktionen showSlides kaldes med slideIndex som argument for at vise den første slide, når siden indlæses.
let slideIndex = 1;
showSlides(slideIndex);

// Navigationsfunktioner for slides:
//Her deklæres funktionen plusSlides, som ændre "slideIndex" ved brug af værdien n, hvilket tillader brugeren at navigerer mellem slides.
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//currentSlide funktionen sætter slideIndex til værdien af n, hvilket gør det muligt at skifte direkte til en specifik slide ved at klikke på dens tilsvarende thumbnail.
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("thumbnail");
  // Sikrer, at slideIndex er inden for det gyldige interval.
  //Hvis n er større end antallet af slides sættes slideIndex til 1 for at loope tilbage til den første slide.
  if (n > slides.length) {slideIndex = 1}
  //Hvis n er mindre end 1, sættes slideIndex til det totale antal slides, hvilket gør, at navigationen kan looppe tilbage til den sidste slide.
  if (n < 1) {slideIndex = slides.length}
  //Her gennemgår loopet alle de store billeder og gør at de ikke kan ses, altså "...display = "none";".
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // Fjerner "active" klassen fra alle thumbnails, dvs. thumbnails mister deres opacitet.
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  //Her gør den så det specifikke slide bliver vist, altså det bliver displayet som block.
  slides[slideIndex-1].style.display = "block";

  //Her gør den at den thumbnail man har klikket på, får påført klassen "active".
  dots[slideIndex-1].className += " active";
}


// Attach event listeners after the DOM has fully loaded
document.addEventListener('DOMContentLoaded', (event) => {
  // Attach event listeners to next/previous buttons
  let prevButton = document.querySelector('.prev');
  let nextButton = document.querySelector('.next');

  prevButton.addEventListener('click', function() {
      plusSlides(-1);
  });

  nextButton.addEventListener('click', function() {
      plusSlides(1);
  });

  // Attach event listeners to thumbnail images
  let thumbnails = document.querySelectorAll('.thumbnail');
  for (let i = 0; i < thumbnails.length; i++) {
      thumbnails[i].addEventListener('click', (function(index) {
          return function() {
              currentSlide(index + 1);
          };
      })(i));
  }
});