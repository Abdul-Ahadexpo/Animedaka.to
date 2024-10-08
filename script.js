let cart = [];

// Sample product data
const products = [
  {
    id: 1,
    name: "Goodbye, Eri Manga",
    description: "Goodbye, Eri. A one-shot Manga By Tasuki Fujimoto",
    price: 300,
    image:
      "https://i1.whakoom.com/large/28/0f/77cc583fb61441e38d47588167d13739.jpg",
  },

  {
    id: 2,
    name: "Look Back Manga",
    description: "Look Back. A one-shot Manga By Tasuki Fujimoto",
    price: 300,
    image:
      "https://th.bing.com/th/id/R.bab3de42535daa4af4f27ee4c5788d89?rik=BW3jqn2popclUg&pid=ImgRaw&r=0",
  },

  {
    id: 3,
    name: " Tokidoki Manga",
    description: " Tokidoki. A one-shot Manga",
    price: 400,
    image:
      "https://pm1.narvii.com/6271/afb3b57e2afb8d00f218ead95e438dc398ade987_hq.jpg",
  },

  {
    id: 4,
    name: "Orange Manga Volume 1 and 2",
    description: "Orange Manga Volume 1 and 2",
    price: 450,
    image:
      "https://th.bing.com/th/id/R.f90bf1fa781992ae0b11168ef6671c5b?rik=2a3BJGRzclm3mQ&riu=http%3a%2f%2fprodimage.images-bn.com%2fpimages%2f9781626923027_p0_v4_s1200x630.jpg&ehk=gT7oM1b7RM1s%2baPNWO6Wi8uNKn0bjN42oTmEomQ%2fwno%3d&risl=&pid=ImgRaw&r=0",
  },

  {
    id: 5,
    name: "Orange Manga Volume 3",
    description: "Orange Manga Volume 3",
    price: 350,
    image:
      "https://th.bing.com/th/id/OIP.XQoMuEkRXtxHAPVzqVwjDAHaKh?w=1600&h=2274&rs=1&pid=ImgDetMain",
  },

  {
    id: 6,
    name: "Orange Manga Volume 4",
    description: "Orange Manga Volume 4",
    price: 350,
    image:
      "https://i.pinimg.com/originals/5d/69/65/5d69655dffc825fc918431f53b023a4c.jpg",
  },

  {
    id: 7,
    name: "Orange Manga Volume 5",
    description: "Orange Manga Volume 5",
    price: 350,
    image:
      "https://i.pinimg.com/originals/92/0b/9b/920b9b3c28c576a577a473175821a543.jpg",
  },

  {
    id: 8,
    name: "Orange Manga Volume 6",
    description: "Orange Manga Volume 6",
    price: 350,
    image:
      "https://comicvine.gamespot.com/a/uploads/scale_medium/6/67663/5885501-06.jpg",
  },
  {
    id: 9,
    name: "Orange Manga Volume 7",
    description: "Orange Manga Volume 7",
    price: 350,
    image: "https://pbs.twimg.com/media/FcE7py9XEAISG2-?format=jpg&name=large",
  },

  {
    id: 10,
    name: "Orange Manga all Volumes 1-7 set",
    description: "Orange all completed Volumes 1-7",
    price: 1700,
    image: "https://i.ebayimg.com/images/g/8s0AAOSw6f5hC3yR/s-l1600.jpg",
  },

  {
    id: 11,
    name: "Anime Bookmarks 1pcs(Random)",
    description: "Anime themed BookMark",
    price: 20,
    image:
      "https://ae01.alicdn.com/kf/S985a3c37ee084aac9d87d282c653d99bW.jpg?width=800&height=800&hash=1600",
  },

  {
    id: 12,
    name: "Anime Bookmarks Box 30pcs",
    description: "Anime themed BookMark Full box",
    price: 500,
    image:
      "https://ae01.alicdn.com/kf/S2b73ae021eb0414a9f92aaf82a32a93bK.jpg?width=750&height=797&hash=1547",
  },

  {
    id: 13,
    name: "10cm Nobara Action fugure",
    description: "Action fugure",
    price: 450,
    image:
      "https://ae-pic-a1.aliexpress-media.com/kf/Sd32119c475134f8d988d99bd269943c96.jpg_640x640.jpg_.webp",
  },

  {
    id: 14,
    name: "10cm Gojo Action fugure",
    description: "Action fugure",
    price: 450,
    image:
      "https://ae-pic-a1.aliexpress-media.com/kf/S09e20f79f37140d681ba668296d9f10bi.jpg_640x640.jpg_.webp",
  },

  {
    id: 15,
    name: "10cm Gojo Action fugure(Open eyes)",
    description: "Action fugure",
    price: 450,
    image:
      "https://ae-pic-a1.aliexpress-media.com/kf/Sae94d294b6284e9d87bf973e6de6563dO.jpg_640x640.jpg_.webp",
  },

  {
    id: 16,
    name: "10cm Yuj Itadori Action fugure",
    description: "Action fugure",
    price: 450,
    image:
      "https://ae-pic-a1.aliexpress-media.com/kf/Sb3ca698251e64fc198a8d521158afff1y/9cm-Anime-Jujutsu-Kaisen-Figurine-Satoru-Gojo-Geto-Suguru-Action-Figures-PVC-Model-Collection-Toys-Desk.jpg_.webp",
  },
  {
    id: 16,
    name: "10cm Megumi Fushiguro Action fugure",
    description: "Action fugure",
    price: 450,
    image:
      "https://ae-pic-a1.aliexpress-media.com/kf/S55e6fce206a745a2a89acf676523fb69o.jpg_640x640.jpg_.webp",
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

// Function to filter products by category
function filterProducts(categoryId) {
  let filteredProducts;

  if (categoryId === 1) {
    // Filter only manga products (IDs 1-10)
    filteredProducts = products.filter(
      (product) => product.id >= 1 && product.id <= 10
    );
  } else if (categoryId === 2) {
    // Filter only bookmark products (IDs 11 and 12)
    filteredProducts = products.filter(
      (product) => product.id >= 11 && product.id <= 30
    );
  } else {
    // Show all products for the "All Products" category
    filteredProducts = products;
  }

  loadFilteredProducts(filteredProducts);
}
