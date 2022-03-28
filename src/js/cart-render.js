// Render cart's product
const cartProductList = document.querySelector(".cart__list");
const cartSubtotal = document.querySelector(".order-detail .order__subtotal .value");
const cartTotalPayment = document.querySelector(".order-detail .order__total .value");
const shortcutCartQuantity = document.querySelector(".shortcut .shortcut__cart-quantity");
const mobileCartQuantity = document.querySelector(".mobile-btn.home-cart-btn .cart-quantity");

let globalSubtotal = 0;
let globalQuantity = 0;

const renderCartProductList = () => {
    products.map((product) => renderCartProductItem(product));
    mobileCartQuantity.innerText = `${globalQuantity}`;
    shortcutCartQuantity.innerText = `${globalQuantity}`;
    cartSubtotal.innerText = `${globalSubtotal.toLocaleString('vn-VI', { style: 'currency', currency: 'VND' })}`;
    cartTotalPayment.innerText = `${globalSubtotal.toLocaleString('vn-VI', { style: 'currency', currency: 'VND' })}`;
};

const renderCartProductItem = (product) => {
    if (product.brand == 'penny') {
        // update subtotal
        globalQuantity++;
        globalSubtotal += product.newPrice;
        // render product as a HTML element
        const cartProductItem = document.createElement("li");
        cartProductItem.className = "cart__item";
        cartProductItem.innerHTML = `
        <a href="./product-detail.html" id="${product.id}" class="product cart-product col-cart-product">
            <div class="product__img">
                <img src="${product.imageUrl[0]}" alt="${product.name}"/>
            </div>
            <div class="product__info">
                <p class="product__name">${product.name}</p>
                <p class="product__brand"><span>Thương hiệu:</span><span>${product.brand}</span></p>
                <p class="product__size"><span>Kích thước:</span><span>${product.size}</span></p>
                <div class="product__price">
                    <span class="old">${product.oldPrice.toLocaleString('vn-VI', { style: 'currency', currency: 'VND' })}</span>
                    <span class="new">${product.newPrice.toLocaleString('vn-VI', { style: 'currency', currency: 'VND' })}</span>
                </div>
                <button class="product__remove"> Xoá </button>
            </div>
        </a>
        <div class="cart-calculator col-cart-calculator">
            <div class="cart-quantity product__quantity">
                <button class="quantity-btn decrease">
                    <i class="fas fa-minus"></i>
                </button>
                <input type="number" class="quantity-value" name="" id="" min="1" max="99" value="1" readonly>
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
    }
};
renderCartProductList();

// Render order detail
const cartListItem = document.querySelectorAll(".cart__item");

cartListItem.forEach(product => {
    let quantity = product.querySelector(".product__quantity .quantity-value");
    let btnPlus = product.querySelector(".product__quantity .quantity-btn.increase");
    let btnMinus = product.querySelector(".product__quantity .quantity-btn.decrease");
    let unitPrice = product.querySelector(".product__price .new");
    let price = product.querySelector(".cart-subtotal .subtotal");
    let removeProductCart = product.querySelector(".product__remove");
    
    // Increase on click
    btnPlus.addEventListener('click', () => {
        let qtyValue = Number(quantity.value);
        qtyValue = (isNaN(qtyValue)) ? 0 : qtyValue;
        qtyValue = qtyValue + 1;
        quantity.value = qtyValue;
        let digitPrice = qtyValue * Number(unitPrice.textContent.replace(/[^\d.-]/g, ''));
        price.innerText = `${digitPrice.toLocaleString('vn-VI', { style: 'currency', currency: 'VND' })}`;
        updateCartNumber();
    });
    
    // Decrease on click
    btnMinus.addEventListener('click', () => {
        let qtyValue = Number(quantity.value);
        qtyValue = (isNaN(qtyValue) || qtyValue < 2) ? 2 : qtyValue;
        qtyValue = qtyValue - 1;
        quantity.value = qtyValue;
        let digitPrice = qtyValue * Number(unitPrice.textContent.replace(/[^\d.-]/g, ''));
        price.innerText = `${digitPrice.toLocaleString('vn-VI', { style: 'currency', currency: 'VND' })}`;
        updateCartNumber();
    });

    //  Remove on click
    removeProductCart.addEventListener('click', removeCartItem);
});

// Remove cart item
function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.parentElement.remove();
    updateCartNumber();
}

