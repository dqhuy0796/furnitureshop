console.log("homepage.js has call");

const CongUanApi = 'src/json/api.json';

// start here
function processApi() {
    getApiProduct(renderApiProducts);
}

processApi();

function getApiProduct(callback) {
    fetch(CongUanApi).then(response => response.json()).then(callback);
}

function renderApiProducts(items) {
    // get products from API
    const products = items.products;
    for (const key in products) {
        if (Object.hasOwnProperty.call(products, key)) {
            products[key]
                .filter(product => product.tag.trim() == "mới nhất")
                .map(product => renderSwiperProduct(latestSwiperList, product));
            products[key]
                .filter(product => product.tag.trim() == "phổ biến")
                .map(product => renderSwiperProduct(featuredSwiperList, product));
        }
    }
    const stylishs = items.stylishs;
    stylishs.map(stylish => renderSwiperStylish(stylishSwiperList, stylish));

    const testimonials = items.testimonials;
    testimonials.map(testimonial => renderSwiperTestimonial(testimonialSwiperList, testimonial));
};

const latestSwiperList = document.querySelector(".latest-swiper-wrapper");

const featuredSwiperList = document.querySelector(".featured-swiper-wrapper");

const stylishSwiperList = document.querySelector(".stylish-swiper-wrapper");

const testimonialSwiperList = document.querySelector(".testimonial-swiper-wrapper");