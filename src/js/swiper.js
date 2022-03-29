// // import Swiper JS
// import Swiper from 'swiper';
// // import Swiper styles
// import 'swiper/css';

// swiper in banner
const bannerSwiper = new Swiper(".banner-swiper", {
  // effect: "cube",
  loop: true,
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});

// swiper in stylish
const stylishSwiper = new Swiper(".stylish-swiper", {
  loop: true,
  spaceBetween: 1,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});

// swiper in latest
const latestSwiper = new Swiper(".latest-swiper", {
  rewind: true,
  spaceBetween: 10,
  slidesPerView: 2,
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
  rewind: true,
  spaceBetween: 10,
  slidesPerView: 2,
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

// swiper in product image
const swiper = new Swiper(".thumb-swiper", {
  loop: true,
  spaceBetween: 8,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
});

//  swiper in product thumb
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

// swiper in maybe you like
const suggestionSwiper = new Swiper(".suggestion-swiper", {
  rewind: true,
  spaceBetween: 10,
  slidesPerView: 2,
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
