// // import Swiper JS
// import Swiper from 'swiper';
// // import Swiper styles
// import 'swiper/css';

// swiper in banner
const bannerSwiper = new Swiper(".banner-swiper", {
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
});

// swiper in stylish
const stylishSwiper = new Swiper(".stylish-swiper", {
  spaceBetween: 20,
  loop: true,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});

// swiper in latest
const latestSwiper = new Swiper(".latest-swiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    700: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// swiper in featured
const featuredSwiper = new Swiper(".featured-swiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    700: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// swiper in product detail
const swiper = new Swiper(".thumb-swiper", {
  loop: true,
  spaceBetween: 8,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
});
const swiper2 = new Swiper(".image-swiper", {
  loop: true,
  spaceBetween: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});

