const CongUanApi = 'src/json/api.json';

// start here
function processApi() {
    getApiProduct(renderApiProducts);
}

processApi();

function getApiProduct(callback) {
    fetch(CongUanApi).then(response => response.json()).then(callback);
}
  
// Render clicked product
let currentItemId = localStorage.getItem("currentItemId");

function renderApiProducts(items) {
    const products = items.products;
    let currentCategory;
    let currentProduct;
    for (const key in products) {
        if (Object.hasOwnProperty.call(products, key)) {
            if(products[key].filter(product => product.id == currentItemId).length > 0){
                currentCategory = key;
                currentProduct = products[key].filter(product => product.id == currentItemId)[0];
                products[key].filter(product => product.id != currentItemId)
                    .map(product => renderSwiperProduct(suggestionSwiperList, product));
            }
        }
    }
    renderProductDetail(currentCategory, currentProduct);
};

const imageList = document.querySelector(".image-swiper-wrapper");

const thumbList = document.querySelector(".thumb-swiper-wrapper");

const productDiscount = document.querySelector(".product__discount");

const productDetail = document.querySelector(".detail-section");

const productName = productDetail.querySelector(".product__name");

const productPrice = productDetail.querySelector(".product__price");

const productInfo = productDetail.querySelector(".product__info");

const productDescription = productDetail.querySelector(".product__description");

const renderProductDetail = (category, product) => {
    renderProductInfo(category, product);
    product.imageUrl.map((image) => renderImageItem(image));
    product.imageUrl.map((thumb) => renderThumbItem(thumb));
};

const renderProductInfo = (category, product) => {
    // Render Discount
    productDiscount.innerHTML = `${Math.round((product.newPrice - product.oldPrice) / product.oldPrice * 100 )}%<span>off</span>`;
  
    // Render Name
    productName.innerText = `${product.name}`;
  
    // Render Price
    productPrice.innerHTML = `
        <span class="old">${ product.oldPrice.toLocaleString('vn-VI', { style: 'currency', currency: 'VND' }) }</span>
        <span class="new">${ product.newPrice.toLocaleString('vn-VI', { style: 'currency', currency: 'VND' }) }</span>
    `;
  
    // Render Brand
    const productBrand = document.createElement("p");
    productBrand.className = "product__brand";
    productBrand.innerHTML = `<span>Thương hiệu:</span><span>${product.brand}</span>`;
    productInfo.appendChild(productBrand);
  
    // Render Size
    const productSize = document.createElement("p");
    productSize.className = "product__size";
    productSize.innerHTML = `<span>Kích thước:</span><span>${product.size}</span>`;
    productInfo.appendChild(productSize);
  
    // Render Tag
    if(product.tag.trim().length > 0){
        const productTag = document.createElement("p");
        productTag.className = "product__tag";
        productTag.innerHTML = `<span>Tag:</span><span>${product.tag}</span>`;
        productInfo.appendChild(productTag);
    }
  
    // Render Category
    const productCategory = document.createElement("p");
    productCategory.className = "product__category";
    productCategory.innerHTML = `<span>Danh mục:</span><span>${category}</span></span>`;
    productInfo.appendChild(productCategory);
  
    // Render Material
    const productMaterial = document.createElement("p");
    productMaterial.className = "product__material";
    productMaterial.innerHTML = "<span>Chất liệu:</span>";
    product.material.forEach(item => {
        let material = document.createElement("span");
        material.innerText = `${item.name}`;
        productMaterial.appendChild(material);
    })
    productInfo.appendChild(productMaterial);
  
    // Render Description
    if (product.description.trim().length > 0) {
        productDescription.innerText = `${product.description}`;
    } else {
        productDescription.innerHTML = "<span style=\"display: block; margin-top: 8px; width: 100%; text-align: center;\">Chưa có bài viết mô tả của sản phẩm này</span>";
    }
};
  
const renderImageItem = (image) => {
    const imageItem = document.createElement("div");
    imageItem.className = "swiper-slide";
    imageItem.innerHTML = `
          <div class="product__img">
              <img src="${image.url}" alt=""/>
          </div>
      `;
    imageList.appendChild(imageItem);
};
  
const renderThumbItem = (thumb) => {
    const thumbItem = document.createElement("div");
    thumbItem.className = "swiper-slide";
    thumbItem.innerHTML = `<img src="${thumb.url}" alt=""/>`;
    thumbList.appendChild(thumbItem);
};

const suggestionSwiperList = document.querySelector(".suggestion-swiper-wrapper");