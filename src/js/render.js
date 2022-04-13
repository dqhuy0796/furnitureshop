console.log("render.js has call");

// 1:: Render grid items

const renderGridProduct = (parent, product) => {
    const productItem = document.createElement("a");
    productItem.className = "product filter-product display";
    productItem.setAttribute("id", product.id);
    productItem.setAttribute("href", "./product-detail.html");
    productItem.setAttribute("data-category", product.brand.toLowerCase());
    productItem.innerHTML = `
    <p class="product__discount">
        ${Math.round((product.newPrice - product.oldPrice) / product.oldPrice * 100 )}%
        <span>off</span>
    </p>
    <div class="product__img">
        <img src="${product.imageUrl[0].url}" alt="${product.name}"/>
    </div>
    <div class="product__info">
        <p class="product__name">${product.name}</p>
        <div class="product__price">
            <span class="old">${ product.oldPrice.toLocaleString('vn-VI', { style: 'currency', currency: 'VND' }) }</span>
            <span class="new">${ product.newPrice.toLocaleString('vn-VI', { style: 'currency', currency: 'VND' }) }</span>
        </div>
    </div>
    `;
    parent.appendChild(productItem);     
};

// 2:: Render cart items



// 3:: Render swiper items

// 3:1:: Render swiper products
const renderSwiperProduct = (parent, product) => {
    const productItem = document.createElement("div");
    productItem.className = "swiper-slide";
    productItem.innerHTML = `
    <a href="./product-detail.html" id="${product.id}" class="product">
        <p class="product__discount">
            ${Math.round((product.newPrice - product.oldPrice) / product.oldPrice * 100)}%<span>off</span>
        </p>
        <div class="product__img">
            <img src="${product.imageUrl[0].url}" alt="${product.name}"/>
        </div>
        <div class="product__info">
            <p class="product__name">${product.name}</p>
            <div class="product__price">
                <span class="old">${ product.oldPrice.toLocaleString('vn-VI', { style: 'currency', currency: 'VND' }) }</span>
                <span class="new">${ product.newPrice.toLocaleString('vn-VI', { style: 'currency', currency: 'VND' }) }</span>
            </div>
        </div>
    </a>
    `;
    parent.appendChild(productItem);     
};

// 3:2:: Render swiper stylishs
const renderSwiperStylish = (parent, stylish) => {
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
    parent.appendChild(stylishItem);
};

// 3:3:: Render swiper testimonials
const renderSwiperTestimonial = (parent, testimonial) => {
    const testimonialItem = document.createElement("div");
    testimonialItem.className = "swiper-slide";
    testimonialItem.innerHTML = `
        <div class="testimonial">
            <div class="testimonial__avatar testimonial__item">
                <img src="${testimonial.avatar}" alt="${testimonial.name}">
            </div>
            <p class="testimonial__name testimonial__item">${testimonial.name}</p>
            <a href="#" class="testimonial__email testimonial__item">${testimonial.email}</a>
            <div class="testimonial__rate testimonial__item">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <!-- <i class="far fa-star"></i> -->
            </div>
            <p class="testimonial__content testimonial__item">${testimonial.comment}</p>
        </div>
        `;
    parent.appendChild(testimonialItem);
};

// 4:: Render product categories

const renderCategories = (parent, category) => {
    const categoryItem = document.createElement("li");
    categoryItem.className = "filter__item";
    categoryItem.innerHTML = `
        <input type="radio" name="category-filter" id="${category}-filter" data-filter="${category}">
        <label for="${category}-filter"> ${category} </label>
    `;
    parent.appendChild(categoryItem);
};

// 5:: Render product brands

const renderBrands = (brand) => {
    const brandItem = document.createElement("li");
    brandItem.className = "filter__item";
    brandItem.innerHTML = `
        <input type="checkbox" name="brand-filter" id="${brand}-filter" data-filter="${brand}">
        <label for="${brand}-filter">${brand}</label>
    `;
    brandList.appendChild(brandItem);
};

