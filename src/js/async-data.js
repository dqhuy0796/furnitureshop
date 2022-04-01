// Update Quantity and TotalPayment
function updateCartNumber() {
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

// Get Current Product
window.onload = () => {    
    const items = document.querySelectorAll(".product");
    items.forEach(item => {
        item.addEventListener('click', () => {
            localStorage.setItem('currentItemId', item.id);
        });
    });
    updateCartItemQuantity();
}

// add item to user cart
function addCartItem(){
    let userCart = JSON.parse(localStorage.getItem("cart")) ?? [];

    let itemQty = document.querySelector("input[type='number'].quantity-value").value;
    let itemId = localStorage.currentItemId;
    
    if(userCart.filter(item => item.id == currentItemId).length > 0) {
        let currentQty = userCart.filter(item => item.id == currentItemId)[0].qty;
        let totalItemQty = Number(currentQty) + Number(itemQty);
        userCart = userCart.filter(item => item.id !== itemId);
        userCart.push({ id: itemId, qty: Number(totalItemQty) });
    } else {
        userCart.push({ id: itemId, qty: Number(itemQty) });
    }
    localStorage.setItem("cart", JSON.stringify(userCart));
    updateCartItemQuantity();
}

// remove item from user cart
function removeCartItem(removeId){
    let userCart = JSON.parse(localStorage.getItem("cart")) ?? [];
    userCart = userCart.filter(item => item.id != removeId);
    console.log(userCart); 
    localStorage.setItem("cart", JSON.stringify(userCart));
    updateCartItemQuantity();
}

// Cập nhật hiển thị số lượng giỏ hàng
function updateCartItemQuantity(){
    let userCart = JSON.parse(localStorage.getItem("cart")) ?? [];
    const cartQuantity = document.querySelectorAll("span.cart-quantity");
    let qty = Number(userCart.map(item => item.qty).reduce((a, b) => Number(a) + Number(b), 0));
    cartQuantity.forEach(cartQty => {
        cartQty.innerText = qty;
    });
}

// // cách 2
// localStorage.cart2 = JSON.stringify(emptyCart);
// var userCart2 = JSON.parse(localStorage.cart2);
