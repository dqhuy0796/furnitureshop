// calculate discount percent
var discountPercent = (newPrice, oldPrice) => {
  return Math.round(((newPrice - oldPrice) / oldPrice) * 100);
};

// list of latest products
const latestList = document.querySelector(".latest-swiper-wrapper");
const renderLatestList = () => {
  products.map((product) => renderLatestItem(product));
};

const renderLatestItem = (product) => {
  const latestItem = document.createElement("div");
  latestItem.className = "swiper-slide";
  latestItem.innerHTML = `
    <a href="./product-detail.html" id="${product.id}" class="product">
      <p class="product__discount">
        ${discountPercent(product.newPrice, product.oldPrice)}%
        <span>off</span>
      </p>
      <div class="product__img">
        <img src="${product.imageUrl[0]}" alt="${product.name}"/>
      </div>
      <div class="product__info">
        <p class="product__name">${product.name}</p>
        <div class="product__price">
          <span class="old">${product.oldPrice.toLocaleString("vn-VI", {
            style: "currency",
            currency: "VND",
          })}</span>
          <span class="new">${product.newPrice.toLocaleString("vn-VI", {
            style: "currency",
            currency: "VND",
          })}</span>
        </div>
      </div>
    </a>
    `;
  latestList.appendChild(latestItem);
};
renderLatestList();

// list of featured products
const featuredList = document.querySelector(".featured-swiper-wrapper");
const renderFeaturedList = () => {
  products.map((product) => renderFeaturedItem(product));
};

const renderFeaturedItem = (product) => {
  const featuredItem = document.createElement("div");
  featuredItem.className = "swiper-slide";
  featuredItem.innerHTML = `
    <a href="./product-detail.html" id="${product.id}" class="product">
      <p class="product__discount">
        ${discountPercent(product.newPrice, product.oldPrice)}%
        <span>off</span>
      </p>
      <div class="product__img">
        <img src="${product.imageUrl[0]}" alt="${product.name}"/>
      </div>
      <div class="product__info">
        <p class="product__name">${product.name}</p>
        <div class="product__price">
          <span class="old">${product.oldPrice.toLocaleString("vn-VI", {
            style: "currency",
            currency: "VND",
          })}</span>
          <span class="new">${product.newPrice.toLocaleString("vn-VI", {
            style: "currency",
            currency: "VND",
          })}</span>
        </div>
      </div>
    </a>
    `;
  featuredList.appendChild(featuredItem);
};
renderFeaturedList();

// list of stylish banners
const stylishList = document.querySelector(".stylish-swiper-wrapper");
const renderStylishList = () => {
  stylishs.map((stylish) => renderStylishItem(stylish));
};

const renderStylishItem = (stylish) => {
  const stylishItem = document.createElement("div");
  stylishItem.className = "swiper-slide";
  stylishItem.innerHTML = `
    <div class="stylish__container">
        <div class="stylish__content">
            <h3 class="stylish__title">${stylish.title}</h3>
            <h4 class="stylish__subtitle">${stylish.subtitle}</h4>
            <p class="stylish__description">${stylish.description}</p>
            <a href="#" class="btn split-btn stylish__btn">
                <span class="content">Chi tiết</span>
            </a>
        </div>
        <div class="stylish__img">
            <img src="${stylish.imageUrl}" alt="${stylish.title}">
        </div>
    </div>
    `;
  stylishList.appendChild(stylishItem);
};
renderStylishList();

// list of testimonial
const testimonialList = document.querySelector(".testimonial-swiper-wrapper");
const renderTestimonialList = () => {
  cmts.map((cmt) => renderTestimonialItem(cmt));
};

const renderTestimonialItem = (cmt) => {
  const testimonialItem = document.createElement("div");
  testimonialItem.className = "swiper-slide";
  testimonialItem.innerHTML = `
    <div class="testimonial">
      <div class="testimonial__avatar testimonial__item">
          <img src="./src/image/product/1002-sofa-penny-3-cho-vai-xanh-1-600x400.jpg" alt="${cmt.name}">
      </div>
      <p class="testimonial__name testimonial__item">${cmt.name}</p>
      <a href="#" class="testimonial__email testimonial__item">${cmt.email}</a>
      <div class="testimonial__rate testimonial__item">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <!-- <i class="far fa-star"></i> -->
      </div>
      <p class="testimonial__content testimonial__item">${cmt.content}</p>
    </div>
    `;
    testimonialList.appendChild(testimonialItem);
};
renderTestimonialList();
