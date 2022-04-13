// // import Swiper JS
// import Swiper from 'swiper';
// // import Swiper styles
// import 'swiper/css';

// swiper in banner
const bannerSwiper = new Swiper(".banner-swiper", {
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
      slidesPerView: 3,
    },
    950: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
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
      slidesPerView: 3,
    },
    950: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// swiper in product image
const thumbSwiper = new Swiper(".thumb-swiper", {
  rewind: true,
  spaceBetween: 8,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
});

//  swiper in product thumb
const imageSwiper = new Swiper(".image-swiper", {
  rewind: true,
  centeredSlides: true,
  spaceBetween: 1,
  thumbs: {
    swiper: thumbSwiper,
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
      slidesPerView: 3,
    },
    950: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const testimonialSwiper = new Swiper(".testimonial-swiper", {
  rewind: true,
  spaceBetween: 10,
  slidesPerView: 2,
  // autoplay: {
  //   delay: 2000,
  //   disableOnInteraction: false,
  // },
  breakpoints: {
    700: {
      slidesPerView: 3,
    },
    950: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
});