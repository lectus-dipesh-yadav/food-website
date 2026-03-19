let cart = JSON.parse(localStorage.getItem("cart")) || [];
function addToCart(name, price) {
let existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.qty += 1;
    } else {
        cart.push({
            name: name,
            price: price,
            qty: 1
        });
    }

    
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(" " + name + " added to cart");
}


function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}


function removeItem(name) {
    cart = cart.filter(item => item.name !== name);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}


function updateQty(name, change) {
    let item = cart.find(i => i.name === name);

    if (!item) return;

    item.qty += change;

    if (item.qty <= 0) {
        removeItem(name);
        return;
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}


function getTotal() {
    return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function clearCart() {
    localStorage.removeItem("cart");
}
