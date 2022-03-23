// calculate discount percent
var discountPercent = (newPrice, oldPrice) => {return Math.round((newPrice-oldPrice)/oldPrice*100)};

// list of latest products
const productList = document.querySelector(".product-grid");
const renderLatestList = () => {
  products.map((product) => renderproductItem(product));
};

const renderproductItem = (product) => {
    const productItem = document.createElement("a");
    productItem.className = "product";
    productItem.setAttribute("href", "./product-detail.html");
    productItem.innerHTML = `
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
            <span class="old">${product.oldPrice.toLocaleString('vn-VI', { style: 'currency', currency: 'VND' })}</span>
            <span class="new">${product.newPrice.toLocaleString('vn-VI', { style: 'currency', currency: 'VND' })}</span>
        </div>
    </div>
    `;
    productList.appendChild(productItem);     
};
renderLatestList();