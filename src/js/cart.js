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
    for (const key in products) {
        if (Object.hasOwnProperty.call(products, key)) {
            products[key].map(product => {
                userCart.forEach(item => {
                    if(product.id == item.id){
                        renderCartProduct(product, item.qty);
                        renderSwiperProduct(suggestionSwiperList, product);
                    }
                });
            });
            cartSubtotal.innerText = `${globalSubtotal.toLocaleString('vn-VI', { style: 'currency', currency: 'VND' })}`;
            cartTotalPayment.innerText = `${globalSubtotal.toLocaleString('vn-VI', { style: 'currency', currency: 'VND' })}`;
        }
    }

    // Render order detail
    const cartListItem = document.querySelectorAll(".cart__item");

    cartListItem.forEach(product => {
        let quantity = product.querySelector(".product__quantity .quantity-value");
        let btnPlus = product.querySelector(".product__quantity .quantity-btn.increase");
        let btnMinus = product.querySelector(".product__quantity .quantity-btn.decrease");

        let unitPrice = product.querySelector(".product__price .new");
        let price = product.querySelector(".cart-subtotal .subtotal");
        
        let removeBtn = product.querySelector(".product__remove");
        
        // Increase on click
        btnPlus.addEventListener('click', () => {
            let qtyValue = Number(quantity.value);
            qtyValue = (isNaN(qtyValue)) ? 0 : qtyValue;
            qtyValue = qtyValue + 1;
            quantity.value = qtyValue;
            let digitPrice = qtyValue * Number(unitPrice.textContent.replace(/[^\d.-]/g, ''));
            price.innerText = `${digitPrice.toLocaleString('vn-VI', { style: 'currency', currency: 'VND' })}`;
            updateCartQuantity();
        }, false);
        
        // Decrease on click
        btnMinus.addEventListener('click', () => {
            let qtyValue = Number(quantity.value);
            qtyValue = (isNaN(qtyValue) || qtyValue < 2) ? 2 : qtyValue;
            qtyValue = qtyValue - 1;
            quantity.value = qtyValue;
            let digitPrice = qtyValue * Number(unitPrice.textContent.replace(/[^\d.-]/g, ''));
            price.innerText = `${digitPrice.toLocaleString('vn-VI', { style: 'currency', currency: 'VND' })}`;
            updateCartQuantity();
        }, false);

        //  Remove on click
        removeBtn.addEventListener('click', (event) => {
            var buttonClicked = event.target;
            let itemClicked = buttonClicked.parentElement.parentElement.parentElement;
            itemClicked.addEventListener('click', event => event.preventDefault(), false);
            itemClicked.remove();
            updateCartQuantity();
        }, false);
    });

    // Update Quantity and TotalPayment
    function updateCartQuantity() {
        let currentCartListItem = document.querySelectorAll(".cart__item");
        
        // Update Quantity
        let totalQty = 0;

        currentCartListItem.forEach(product => {
            totalQty += Number(product.querySelector(".product__quantity .quantity-value").value);
        });
        mobileCartQuantity.innerText = `${totalQty}`;
        shortcutCartQuantity.innerText = `${totalQty}`;
        
        // Update TotalPayment
        let subTotal = 0;
        currentCartListItem.forEach(product => {
            subTotal += Number(product.querySelector(".cart-subtotal .subtotal").textContent.replace(/[^\d.-]/g, ''))
        });
        cartSubtotal.innerText = `${subTotal.toLocaleString('vn-VI', { style: 'currency', currency: 'VND' })}`;
        cartTotalPayment.innerText = `${subTotal.toLocaleString('vn-VI', { style: 'currency', currency: 'VND' })}`;
    };
};

// Render cart's product
const cartProductList = document.querySelector(".cart__list");

const cartSubtotal = document.querySelector(".order__subtotal .value");
const cartTotalPayment = document.querySelector(".order__total .value");

const shortcutCartQuantity = document.querySelector(".shortcut__list .cart-quantity");
const mobileCartQuantity = document.querySelector(".home-cart-btn .cart-quantity");

let globalSubtotal = 0;
let userCart = JSON.parse(localStorage.getItem("cart")) ?? [];

const renderCartProduct = (product, qty) => {
    // Update subtotal
    globalSubtotal += product.newPrice;
    // Render product as a HTML element
    const cartProductItem = document.createElement("li");
    cartProductItem.className = "cart__item";
    cartProductItem.innerHTML = `
        <div id="${product.id}" class="product cart-product col-cart-product">
            <a href="./product-detail.html" class="product__img">
                <img src="${product.imageUrl[0].url}" alt="${product.name}"/>
            </a>
            <div class="product__info">
                <a href="./product-detail.html" class="product__name">${product.name}</a>
                <p class="product__brand"><span>Thương hiệu:</span><span>${product.brand}</span></p>
                <p class="product__size"><span>Kích thước:</span><span>${product.size}</span></p>
                <div class="product__price">
                    <span class="old">${product.oldPrice.toLocaleString('vn-VI', { style: 'currency', currency: 'VND' })}</span>
                    <span class="new">${product.newPrice.toLocaleString('vn-VI', { style: 'currency', currency: 'VND' })}</span>
                </div>
                <button class="product__remove" onclick="removeCartItem(${product.id});"> Xoá </button>
            </div>
        </div>
        <div class="cart-calculator col-cart-calculator">
            <div class="product__quantity">
                <button class="quantity-btn decrease">
                    <i class="fas fa-minus"></i>
                </button>
                <input type="number" class="quantity-value" name="" id="" min="1" max="99" value="${qty}" readonly>
                <button class="quantity-btn increase">
                    <i class="fas fa-plus"></i>
                </button>
            </div>
            <div class="cart-subtotal">
                <p class="subtotal">${product.newPrice.toLocaleString('vn-VI', { style: 'currency', currency: 'VND' })}</p>
            </div>
        </div>
        `;
    cartProductList.appendChild(cartProductItem);     
};

// List of suggestion products

const suggestionSwiperList = document.querySelector(".suggestion-swiper-wrapper");