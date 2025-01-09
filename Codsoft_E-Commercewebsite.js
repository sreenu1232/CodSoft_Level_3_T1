const products = [{
        id: 1,
        name: "Product 1",
        price: 35000.00
    },
    {
        id: 2,
        name: "Product 2",
        price: 40000.00
    },
    {
        id: 3,
        name: "Product 3",
        price: 30000.00
    }
];

let cart = [];
const cartInfoButton = document.getElementById("view-cart");
const cartSection = document.getElementById("cart");
const productsSection = document.getElementById("products");
const cartItemsList = document.getElementById("cart-items");
const totalPriceElement = document.getElementById("total-price");
const backToShopButton = document.getElementById("back-to-shop");
const checkoutButton = document.getElementById("checkout");

function updateCartInfo() {
    const cartCount = cart.length;
    cartInfoButton.textContent = `View Cart (${cartCount})`;
}

function updateCartDisplay() {
    cartItemsList.innerHTML = "";
    let totalPrice = 0;
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - Rs ${item.price.toFixed(2)}`;
        cartItemsList.appendChild(li);
        totalPrice += item.price;
    });
    totalPriceElement.textContent = totalPrice.toFixed(2);
}

document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", (event) => {
        const productId = event.target.closest(".product-card").dataset.id;
        const product = products.find(p => p.id === parseInt(productId));
        cart.push(product);
        updateCartInfo();
    });
});

cartInfoButton.addEventListener("click", () => {
    productsSection.style.display = "none";
    cartSection.style.display = "block";
    updateCartDisplay();
});

backToShopButton.addEventListener("click", () => {
    cartSection.style.display = "none";
    productsSection.style.display = "flex";
});

checkoutButton.addEventListener("click", () => {
    alert("Proceeding to checkout...");
    // Redirect to payment gateway or show further steps
});
