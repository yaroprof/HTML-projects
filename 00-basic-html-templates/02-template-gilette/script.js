// === toggle menu ===

 const toggleBtn = document.querySelector('.header__toggle-btn');
 const menu = document.querySelector('.header__menu');
 const closeBtn = document.querySelector('.header__menu-close-btn');

 toggleBtn.addEventListener('click', () => {
    menu.classList.add('active');
 })

 closeBtn.addEventListener('click', () => {
    menu.classList.remove('active');
 })


// === Slider
// Отримуємо всі елементи слайдів
const slides = document.querySelectorAll('.hero__slide');
const prevButton = document.querySelector('.hero__slide-button--prev');
const nextButton = document.querySelector('.hero__slide-button--next');

// Змінна для відстеження активного слайду
let currentSlide = 0;

// Функція для показу слайду за його індексом
function showSlide(index) {
    // Приховуємо всі слайди
    slides.forEach((slide, i) => {
        slide.classList.remove('hero__slide--active');
    });
    // Показуємо тільки активний слайд
    slides[index].classList.add('hero__slide--active');
}

// Функція для переходу на наступний слайд
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length; // Перейти до наступного слайду
    showSlide(currentSlide);
}

// Функція для переходу на попередній слайд
function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Перейти до попереднього слайду
    showSlide(currentSlide);
}

// Додаємо обробники подій для кнопок
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Ініціалізуємо перший слайд
showSlide(currentSlide);


