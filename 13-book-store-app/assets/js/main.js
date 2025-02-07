/*=============== SEARCH ===============*/
const searchBtn = document.getElementById('search-button'),
    searchClose = document.getElementById('search-close'),
    searchContent = document.getElementById('search-content');

if (searchBtn) {
    searchBtn.addEventListener('click', () => {
        searchContent.classList.add('show-search');
    })
}

if (searchClose) {
    searchClose.addEventListener('click', () => {
        searchContent.classList.remove('show-search')
    });
}


/*=============== SHOW MENU ===============*/
const loginBtn = document.getElementById('login-button'),
    loginClose = document.getElementById('login-close'),
    loginContent = document.getElementById('login-content');

    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            loginContent.classList.add('show-login');
        })
    }

    if (loginClose){
        loginClose.addEventListener('click', () => {
            loginContent.classList.remove('show-login');
        })
    }

/*=============== LOGIN ===============*/


/*=============== ADD SHADOW HEADER ===============*/
/*=============== ADD SHADOW HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header');
    // When the scroll is greater than 50 viewport height, add the shadow
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                       : header.classList.remove('shadow-header');
}
window.addEventListener('scroll', scrollHeader);



/*=============== HOME SWIPER ===============*/

let swiperHome = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: -24,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    breakpoints: {
        1220: {
            spaceBetween: -32
        }
    }

})
  


/*=============== FEATURED SWIPER ===============*/

let swiperFeatured = new Swiper('.featured__swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    breakpoints: {
        1150: {
            slidesPerView: 4,
            centerSlides: false,
        }
    }

})


/*=============== NEW SWIPER ===============*/

let swiperNew = new Swiper('.new__swiper', {
    loop: true,
    spaceBetween: 16,
    slidesPerView: 'auto',

    breakpoints: {
        1150: {
            slidesPerView: 3,
        }
    }

})



/*=============== TESTIMONIAL SWIPER ===============*/
let swipertestimonial = new Swiper('.testimonial__swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    breakpoints: {
        1150: {
            slidesPerView: 3,
            centerSlides: false,
        }
    }

})

/*=============== SHOW SCROLL UP ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
