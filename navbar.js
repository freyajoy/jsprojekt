console.log("Jeg virker haha");

let menuToggle = document.querySelector(".navBar");
let menu = document.querySelector(".menu");

menuToggle.onclick = function () {
  menu.classList.toggle("active");
};

// Check the README.ME for the sections about "DOMContentLoaded", "document", "function()" and "addEventListener()"
document.addEventListener("DOMContentLoaded", function () {
  // querySelectorALL, it selects every element that has a class called 'star'.
  const stars = document.querySelectorAll(".star");
  const commentBox = document.getElementById("comment");
  const submitBtn = document.getElementById("submit-review");
  const reviewsContainer = document.getElementById("reviews-container");

  let currentRating = 0;

  //FROM HERE
  // Read sections "Array forEach()", "Regular and Arrow functions syntax and "If statement and the rest"
  function updateRatingDisplay(rating) {
    stars.forEach((star, index) => {
      if (index < rating) {
        star.classList.add("selected");
      } else {
        star.classList.remove("selected");
      }
    });
  }

  stars.forEach((star) => {
    star.addEventListener("click", function () {
      currentRating = this.getAttribute("data-value");
      updateRatingDisplay(currentRating);
    });
  });

  //TO HERE ------ This code works together

  submitBtn.addEventListener("click", function () {
    const commentText = commentBox.value;
    if (commentText.trim() && currentRating) {
      const review = document.createElement("div");
      review.classList.add("review");
      review.innerHTML = `
          <p>${commentText}</p>
          <p>Rating: ${"★".repeat(currentRating)}${"☆".repeat(
        5 - currentRating
      )}</p>
        `;
      reviewsContainer.appendChild(review);
      commentBox.value = ""; // Clear the text area
      updateRatingDisplay(0); // Reset star display
      currentRating = 0; // Reset current rating
    } else {
      alert("Please leave a comment and a rating before submitting.");
    }
  });
});
