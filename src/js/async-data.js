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
    })    
}