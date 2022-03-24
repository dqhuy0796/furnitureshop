// Render cart's product
const cartProductList = document.querySelector(".cart__list");
const cartSubtotal = document.querySelector(".order-detail .order__subtotal .value");
const cartTotalPayment = document.querySelector(".order-detail .order__total .value");
const shortcutCartQuantity = document.querySelector(".shortcut .shortcut__cart-quantity");
const mobileCartQuantity = document.querySelector(".mobile-menu .nav__btn .cart-quantity");

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
        <a href="#" class="product cart-product col-cart-product">
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
                <button class="product__remove" onclick="removeCartProduct();"> Xoá </button>
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
const cartListProductItem = document.querySelectorAll(".cart__item");

cartListProductItem.forEach(product => {
    let qty = product.querySelector(".product__quantity .quantity-value");
    let btnPlus = product.querySelector(".product__quantity .quantity-btn.increase");
    let btnMinus = product.querySelector(".product__quantity .quantity-btn.decrease");
    let unitPrice = product.querySelector(".product__price .new");
    let price = product.querySelector(".cart-subtotal .subtotal");
    // when click to increase
    btnPlus.addEventListener('click', () => {
        let quantity = Number(qty.value);
        quantity = (isNaN(quantity)) ? 0 : quantity;
        quantity = quantity + 1;
        qty.value = quantity;
        let digitPrice = quantity * Number(unitPrice.textContent.replace(/[^\d.-]/g, ''));
        price.innerText = `${digitPrice.toLocaleString('vn-VI', { style: 'currency', currency: 'VND' })}`;
        autoCalculate();
    });
    // when click to decrease
    btnMinus.addEventListener('click', () => {
        let quantity = Number(qty.value);
        quantity = (isNaN(quantity) || quantity < 2) ? 2 : quantity;
        quantity = quantity - 1;
        qty.value = quantity;
        let digitPrice = quantity * Number(unitPrice.textContent.replace(/[^\d.-]/g, ''));
        price.innerText = `${digitPrice.toLocaleString('vn-VI', { style: 'currency', currency: 'VND' })}`;
        autoCalculate();
    });
    // update subtotal and total payment
    function autoCalculate() {
        let totalQty = 0;
        cartListProductItem.forEach(product => {
            totalQty += Number(product.querySelector(".product__quantity .quantity-value").value);
        });
        mobileCartQuantity.innerText = `${totalQty}`;
        shortcutCartQuantity.innerText = `${totalQty}`;
        let subTotal = 0;
        cartListProductItem.forEach(product => {
            subTotal += Number(product.querySelector(".cart-subtotal .subtotal").textContent.replace(/[^\d.-]/g, ''))
        });
        cartSubtotal.innerText = `${subTotal.toLocaleString('vn-VI', { style: 'currency', currency: 'VND' })}`;
        cartTotalPayment.innerText = `${subTotal.toLocaleString('vn-VI', { style: 'currency', currency: 'VND' })}`;
    }
});