let cart = [];

// Sample product data
const products = [
  {
    id: 1,
    name: "Orange Manga Volume 1 and 2",
    description: "Orange Manga Volume 1 and 2",
    price: 450,
    image: "./Orange/1,2.png",
  },

  {
    id: 2,
    name: "Orange Manga Volume 3",
    description: "Orange Manga Volume 3",
    price: 350,
    image: "./Orange/3.png",
  },

  {
    id: 3,
    name: "Orange Manga Volume 4",
    description: "Orange Manga Volume 4",
    price: 350,
    image: "./Orange/4.png",
  },

  {
    id: 4,
    name: "Orange Manga Volume 5",
    description: "Orange Manga Volume 5",
    price: 350,
    image: "./Orange/5.png",
  },

  {
    id: 5,
    name: "Orange Manga Volume 6",
    description: "Orange Manga Volume 6",
    price: 350,
    image: "./Orange/6.png",
  },
  {
    id: 6,
    name: "Orange Manga Volume 7",
    description: "Orange Manga Volume 7",
    price: 350,
    image: "./Orange/7.png",
  },

  {
    id: 7,
    name: "Orange Manga all Volumes 1-7 set",
    description: "Orange all completed Volumes 1-7",
    price: 1700,
    image: "./Orange/completed.png",
  },

  {
    id: 8,
    name: "Anime BookMark 1pec(Random)",
    description: "Anime themed BookMark",
    price: 20,
    image: "./mqsxzryk.png",
  },

  {
    id: 9,
    name: "Anime BookMark Box 30pec",
    description: "Anime themed BookMark Full box",
    price: 500,
    image: "./frc3f0t6.png",
  },
];

// Delivery Fee
const delivery = 110;

// Discount configuration
const discountConfig = [
  { quantity: 3, discount: 1 },
  { quantity: 6, discount: 2 },
  { quantity: 8, discount: 3 },
  { quantity: 10, discount: 4 },
  { quantity: 30, discount: 10 },
];

// Load products
function loadProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = products
    .map(
      (product) => `
        <div class="card bg-base-100 shadow-xl">
            <figure><img src="${product.image}" alt="${
        product.name
      }" /></figure>
            <div class="card-body">
                <h2 class="card-title">${product.name}</h2>
                <p>${product.description}</p>
                <p class="font-bold">Price: BDT ${product.price.toFixed(2)}</p>
                <div class="card-actions justify-end">
                    <button onclick="addToCart(${
                      product.id
                    })" class="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    `
    )
    .join("");
}

// Function to add an item to the cart
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (product) {
    product.quantity = 1; // Initialize quantity to 1
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} has been added to your cart!`);
  }
}

// Function to calculate the discount based on quantity
function calculateDiscount(quantity, price) {
  let discountPercentage = 0;

  // Find the appropriate discount based on quantity
  for (let i = discountConfig.length - 1; i >= 0; i--) {
    if (quantity >= discountConfig[i].quantity) {
      discountPercentage = discountConfig[i].discount;
      break;
    }
  }

  return price * discountPercentage;
}

// Load cart items on the cart page
function loadCart() {
  cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartItems = document.getElementById("cart-items");

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    const totalItems = cart.reduce(
      (total, item) => total + (item.quantity || 1),
      0
    );
    const totalPriceWithoutDelivery = cart.reduce((total, item) => {
      const discount = calculateDiscount(item.quantity || 1, item.price);
      return total + (item.price * (item.quantity || 1) - discount);
    }, 0);
    const totalPrice = totalPriceWithoutDelivery + delivery;

    cartItems.innerHTML =
      cart
        .map((item) => {
          const discount = calculateDiscount(item.quantity || 1, item.price);
          return `
            <div class="flex justify-between items-center border-b py-2">
                <div>
                    <h3>${item.name} (Quantity: ${item.quantity || 1})</h3>
                    <p>Price: BDT ${item.price.toFixed(2)}</p>
                    <p>Discount: BDT ${discount.toFixed(2)}</p>
                    <p>Delivery Fee: BDT ${delivery} (All Over BD)</p>
                </div>
                <div class="flex space-x-2">
                    <button onclick="addOneMore(${
                      item.id
                    })" class="btn btn-primary">+</button>
                    <button onclick="removeFromCart(${
                      item.id
                    })" class="btn btn-secondary">Remove</button>
                </div>
            </div>
        `;
        })
        .join("") +
      `<p class="font-bold">Total: BDT ${totalPrice.toFixed(2)} approx </p>`;
  }
}

// Function to remove an item from the cart
function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

// Function to add one more item to the cart
function addOneMore(productId) {
  const productInCart = cart.find((item) => item.id === productId);

  if (productInCart) {
    productInCart.quantity = (productInCart.quantity || 1) + 1;
  } else {
    const product = products.find((p) => p.id === productId);
    if (product) {
      product.quantity = 1;
      cart.push(product);
    }
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(
    `Added one more of ${
      productInCart ? productInCart.name : product.name
    } to your cart!`
  );

  loadCart();
}

if (document.getElementById("product-list")) {
  loadProducts();
}

if (document.getElementById("cart-items")) {
  loadCart();
}

// Checkout function
function checkout() {
  window.location.href = "checkout.html";
}

// Function to search products based on input
function searchProducts() {
  const searchInput = document.getElementById("search-bar").value.toLowerCase();
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchInput)
  );

  // Load the filtered products to the display
  loadFilteredProducts(filteredProducts);
}

// Function to load filtered products
function loadFilteredProducts(filteredProducts) {
  const productList = document.getElementById("product-list");
  productList.innerHTML =
    filteredProducts.length > 0
      ? filteredProducts
          .map(
            (product) => `
        <div class="card bg-base-100 shadow-xl">
            <figure><img src="${product.image}" alt="${
              product.name
            }" /></figure>
            <div class="card-body">
                <h2 class="card-title">${product.name}</h2>
                <p>${product.description}</p>
                <p class="font-bold">Price: BDT ${product.price.toFixed(2)}</p>
                <div class="card-actions justify-end">
                    <button onclick="addToCart(${
                      product.id
                    })" class="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    `
          )
          .join("")
      : "<p>No products found.</p>";
}
