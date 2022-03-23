const imageList = document.querySelector(".image-swiper-wrapper");
const thumbList = document.querySelector(".thumb-swiper-wrapper");
const productDetail = document.querySelector(".detail-container");
const productDiscount = document.querySelector(".product__discount");
const productName = productDetail.querySelector(".product__name");
const productPrice = productDetail.querySelector(".product__price");
const productInfo = productDetail.querySelector(".product__info");
const productDescription = productDetail.querySelector(".product__description");

const renderElement = (father, data, array) => {
    array.forEach(element => {
        let child = document.createElement("span");
        child.innerText = `${data[Number(element)]}`;
        father.appendChild(child);        
    });
};
let discountPercent = (newPrice, oldPrice) => {
    return Math.round((newPrice-oldPrice)/oldPrice*100);
};
const renderProductInfo = (product) => {
    // Render Discount
    productDiscount.innerHTML = `
        ${discountPercent(product.newPrice, product.oldPrice)}%
        <span>off</span>
    `;
    // Render Name
    productName.innerText = `${product.name}`;
    // Render Price
    productPrice.innerHTML = `
        <span class="old">${product.oldPrice.toLocaleString('vn-VI', { style: 'currency', currency: 'VND' })}</span>
        <span class="new">${product.newPrice.toLocaleString('vn-VI', { style: 'currency', currency: 'VND' })}</span>
    `;
    // Render Brand
    const productBrand = document.createElement("p"); 
    productBrand.className = "product__brand";
    productBrand.innerHTML = `
        <span>Thương hiệu:</span>
        <span>${product.brand}</span>
    `;
    productInfo.appendChild(productBrand);
    // Render Size
    const productSize = document.createElement("p"); 
    productBrand.className = "product__size";
    productBrand.innerHTML = `
        <span>Kích thước:</span>
        <span>${product.size}</span>
    `;
    productInfo.appendChild(productSize);
    // Render Tag
    const productTag = document.createElement("p"); 
    productTag.className = "product__tag";
    productTag.innerHTML = "<span>Tag:</span>";
    renderElement(productTag, tag, product.tag);
    productInfo.appendChild(productTag);
    // Render Category
    const productCategory = document.createElement("p");
    productCategory.className = "product__category";
    productCategory.innerHTML = "<span>Danh mục:</span>";
    renderElement(productCategory, category, product.category);
    productInfo.appendChild(productCategory);
    // Render Material
    const productMaterial = document.createElement("p");
    productMaterial.className = "product__material";
    productMaterial.innerHTML = "<span>Chất liệu:</span>";
    renderElement(productMaterial, material, product.material);
    productInfo.appendChild(productMaterial);
    // Render Description
    productDescription.innerHTML = `${product.description}`;
};
const renderProductDetail = (product) => {
    renderProductInfo(product);
    product.imageUrl.map((imageUrl) => renderImageItem(imageUrl));
    product.imageUrl.map((imageUrl) => renderThumbItem(imageUrl));
};
const renderImageItem = (imageUrl) => {
    const imageItem = document.createElement("div");
    imageItem.className = "swiper-slide";
    imageItem.innerHTML = `
        <div class="product__img">
            <img src="${imageUrl}" alt=""/>
        </div>
    `;
    imageList.appendChild(imageItem);
};
const renderThumbItem = (imageUrl) => {
    const thumbItem = document.createElement("div");
    thumbItem.className = "swiper-slide";
    thumbItem.innerHTML = `<img src="${imageUrl}" alt=""/>`;     
    thumbList.appendChild(thumbItem);
};
renderProductDetail(products[2]);