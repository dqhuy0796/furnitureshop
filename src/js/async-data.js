console.log("async.js has call");

// Get Current Product
window.onload = () => {    
    const items = document.querySelectorAll(".product");
    items.forEach(item => {
        // left click
        item.addEventListener('click', () => {
            localStorage.setItem('currentItemId', item.id);
        }, false);
        // right click
        item.addEventListener('contextmenu', (event) => {
            // event.preventDefault();
            localStorage.setItem('currentItemId', item.id);
            return false;
        }, false)
    });
    updateCartItemQuantity();
}

// Add item to user cart
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

// Remove item from user cart
function removeCartItem(removeId){
    let userCart = JSON.parse(localStorage.getItem("cart")) ?? [];
    userCart = userCart.filter(item => item.id != removeId);
    localStorage.setItem("cart", JSON.stringify(userCart));
    updateCartItemQuantity();
}

// Update and display cart quantity
function updateCartItemQuantity(){
    let userCart = JSON.parse(localStorage.getItem("cart")) ?? [];
    const cartQuantity = document.querySelectorAll("span.cart-quantity");
    let qty = Number(userCart.map(item => item.qty).reduce((a, b) => Number(a) + Number(b), 0));
    cartQuantity.forEach(cartQty => {
        cartQty.innerText = qty;
    });
}

// // method 2
// localStorage.cart2 = JSON.stringify(emptyCart);
// var userCart2 = JSON.parse(localStorage.cart2);

// var cl = new cloudinary.Cloudinary({cloud_name: "dqhuy", secure: true});
// cloudinary.v2.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
//   { public_id: "olympic_flag" }, 
//   function(error, result) {console.log(result); });
