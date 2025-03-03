// === Scroll Header
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
  
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        navbar.classList.add("navbar-colored");
      } else {
        navbar.classList.remove("navbar-colored");
      }
    });
  });
  

// === Slider

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slider-item");
  const prevButton = document.querySelector(".slider-arrow.prev");
  const nextButton = document.querySelector(".slider-arrow.next");
  let currentIndex = 0;

  function showSlide(index) {
      currentIndex = (index + slides.length) % slides.length; // Ensure circular navigation
      updateSlider();
  }

  function updateSlider() {
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  // Manual navigation (arrows)
  prevButton.addEventListener("click", () => showSlide(currentIndex - 1));
  nextButton.addEventListener("click", () => showSlide(currentIndex + 1));

  // Automatic sliding
  setInterval(() => showSlide(currentIndex + 1), 3000); // Slide every 3 seconds
});
