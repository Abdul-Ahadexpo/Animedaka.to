document.documentElement.setAttribute("data-theme", "dark");

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

  // Anime merchandise
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

  // Action Figure
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
const delivery = 120;

// Discount configuration
const discountConfig = [
  { quantity: 3, discount: 0.2 },
  { quantity: 6, discount: 0.5 },
  { quantity: 8, discount: 0.6 },
  { quantity: 10, discount: 0.7 },
  { quantity: 20, discount: 0.9 },
  { quantity: 30, discount: 1 },
];

// Load products
function loadProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = products
    .map(
      (product) => `
      <div
  id="ppd"
  class="card w-full bg-gradient-to-b from-gray-900 to-gray-800 text-white shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl rounded-xl overflow-hidden relative group"
>
  <figure class="overflow-hidden">
    <img
      src="${product.image}"
      alt="${product.name}"
      class="rounded-t-xl"
    />
  </figure>
  <div class="card-body p-6 bg-opacity-80 backdrop-blur-sm bg-gradient-to-b from-black via-gray-800 to-transparent">
    <h2 class="card-title text-3xl font-extrabold mb-3 group-hover:text-green-400 transition duration-200">
      ${product.name}
    </h2>
    <p class="text-sm text-gray-400 mb-4 line-clamp-3">
      ${product.description}
    </p>
    <p class="text-lg font-bold mb-4">
      Price: <span class="text-green-400"> ${product.price.toFixed(2)}TK</span>
    </p>

    <p class="font-thin mb-0 text-gray-400">
    Stock: <i><span class="text-gray-400">${product.pcs}</span>.</i>
    </p>

    <div class="card-actions mt-4 flex justify-between items-center">
      <button
        onclick="addToCart(${product.id})"
        class="btn bg-gradient-to-r from-green-500 to-green-700 text-black font-bold px-6 py-3 rounded-lg shadow-lg hover:from-green-700 hover:to-green-500 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
      >
        Add to Cart
      </button>
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
    showNotification(
      `<a href="./cart.html">
        1. ${product.name} has been added to your cart!
      </a>`
    );
  }
}

// Popup you added a product to your cart
function showNotification(message) {
  const notification = document.getElementById("notification");
  notification.innerHTML = message; // Use innerHTML instead of textContent
  notification.classList.remove("hidden");
  setTimeout(() => {
    notification.classList.add("hidden");
  }, 3000); // Hide after 2 seconds
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

//
//
//
//
//
//
//
//
// Load cart items on the cart page
function loadCart() {
  cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartItems = document.getElementById("cart-items");

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    const totalPriceWithoutDelivery = cart.reduce((total, item) => {
      const discount = calculateDiscount(item.quantity || 1, item.price);
      return total + (item.price * (item.quantity || 1) - discount);
    }, 0);
    let totalPrice = totalPriceWithoutDelivery + delivery;

    cartItems.innerHTML =
      cart
        .map((item) => {
          const discount = calculateDiscount(item.quantity || 1, item.price);
          return `
             <div class="flex flex-col md:flex-row justify-between items-center border-b py-4 shadow-lg rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div class="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-lg">
                <img class="w-full h-full object-cover rounded-md" src="${
                  item.image
                }" alt="${item.name}" />
              </div>
              <div class="flex-1 px-4 mt-4">
                <h3 class="text-lg font-semibold text-gray-100">${
                  item.name
                } <span class="text-sm font-normal text-gray-400">(Quantity: ${
            item.quantity || 1
          })</span></h3>


            <p class="text-sm font-normal mb-0 text-gray-300">
    Stock: <i><span class="text-red-100">${item.pcs}</span>.</i>
    </p>
                <p class="text-sm text-gray-300">Price: <span class="text-blue-100"> ${item.price.toFixed(
                  2
                )}TK</span></p>
                <p class="text-sm text-gray-300">Discount: <span class="text-green-400"> ${discount.toFixed(
                  2
                )}TK</span></p>
                <p class="text-sm text-gray-300">Delivery Fee: <span class="text-yellow-400"> ${delivery}TK</span></p>
              </div>
              <div class="flex flex-col mt-4 md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                <button onclick="addOneMore(${
                  item.id
                })" class="btn btn-outline btn-info btn-sm md:btn-md">+</button>
                <button onclick="removeFromCart(${
                  item.id
                })" class="btn btn-outline btn-error btn-sm md:btn-md">Remove</button>
              </div>
            </div>
          `;
        })
        .join("") +
      `
      
      <!-- Coupon Section -->
<div id="coupon-section" class="mt-6 bg-gradient-to-r from-pink-200 to-blue-200 p-6 rounded-xl shadow-lg flex flex-col items-center space-y-4">
  <input 
    type="text" 
    id="coupon-code" 
    placeholder="Enter your coupon code..." 
    class="input input-bordered input-success w-full max-w-xs text-center text-pink-700 bg-white focus:outline-none focus:ring-4 focus:ring-blue-300" 
  />
  <button 
    id="apply-coupon" 
    class="btn btn-info w-full max-w-xs hover:bg-blue-700 transition-colors duration-300"
  >
    Apply Discount
  </button>
</div>


      <!-- Total Price -->
      <p id="total-cost" class="font-bold text-lg mt-4">Total: ${totalPrice.toFixed(
        2
      )}TK approx</p>
      `;

    const coupons = {
      WINNER10: 0.1,
      FLASHSALE25: 0.25,
      EXTRA30OFF: 0.3,
      SUPERDISCOUNT50: 0.5,
      MEGADEAL40: 0.4,
      QUICK5OFF: 0.05,
      COOLVIBES10: 0.1,
      LUCKYDAY20: 0.2,
      ZOOMDEAL30: 0.3,
      POWERUP60: 0.6,
      JUMPSTART70: 0.7,
      SMARTBUY80: 0.8,
      FREEDELIVERY100: 1.0,
      FASTTRACK35: 0.35,
      BIGSAVINGS45: 0.45,
      NEWUSER10: 0.1,
      RETURNING20: 0.2,
      WEEKENDSPECIAL25: 0.25,
      FESTIVEOFFER30: 0.3,
      BIRTHDAYGIFT50: 0.5,
      WHAT10: 0.1,
      YEAHS10: 0.1,
      OKAPIS20: 0.2,
      AAVE20: 0.2,
      MYFREEDEL: "free_delivery",
    };

    // Track used coupons
    const usedCoupons = JSON.parse(localStorage.getItem("usedCoupons")) || [];

    document.getElementById("apply-coupon").addEventListener("click", () => {
      const couponInput = document
        .getElementById("coupon-code")
        .value.trim()
        .toUpperCase();

      if (usedCoupons.includes(couponInput)) {
        alert("This coupon code has already been used! 😢");
        return;
      }

      const couponDiscount = coupons[couponInput];
      if (!couponDiscount) {
        alert("Invalid discount code 😢. Try again!");
        return;
      }

      let deliveryCost = delivery;
      let newTotalCost = totalPriceWithoutDelivery;

      if (couponDiscount === "free_delivery") {
        deliveryCost = 0;
        alert("🎉 Free delivery applied!");
      } else {
        const discountAmount = newTotalCost * couponDiscount;
        newTotalCost -= discountAmount;
        alert(
          `🎉 ${
            couponDiscount * 100
          }% discount applied! You saved ${discountAmount.toFixed(2)}TK . 
          Please "You must" use it in Checkout 🛒`
        );
      }

      // Add the coupon to used list
      usedCoupons.push(couponInput);
      localStorage.setItem("usedCoupons", JSON.stringify(usedCoupons));

      document.getElementById("total-cost").innerHTML = `Total: ${(
        newTotalCost + deliveryCost
      ).toFixed(2)}TK approx`;
    });
  }
}

//
//
//
//
//
//

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
  // Create a div for the popup
  const popup = document.createElement("div");
  popup.className = "popup";
  popup.innerText = `Added one more ${
    productInCart ? productInCart.name : product.name
  } to your cart!`;

  // Add popup to the body
  document.body.appendChild(popup);

  // Style and animate the popup
  popup.style.position = "fixed";
  popup.style.top = "20px"; // Change this to top for top-right
  popup.style.right = "20px";
  popup.style.padding = "10px";
  popup.style.backgroundColor = "#000";
  popup.style.color = "#fff";
  popup.style.borderRadius = "16px";
  popup.style.border = "2px solid greenyellow";
  popup.style.zIndex = "1000";

  // Remove popup after 3 seconds
  setTimeout(() => {
    popup.remove();
  }, 3000);
  localStorage.setItem("cart", JSON.stringify(cart));

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
      <div
  id="ppd"
  class="card w-full bg-gradient-to-b from-gray-900 to-gray-800 text-white shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl rounded-xl overflow-hidden relative group"
>
  <figure class="overflow-hidden">
    <img
      src="${product.image}"
      alt="${product.name}"
      class="rounded-t-xl"
    />
  </figure>
  <div class="card-body p-6 bg-opacity-80 backdrop-blur-sm bg-gradient-to-b from-black via-gray-800 to-transparent">
    <h2 class="card-title text-3xl font-extrabold mb-3 group-hover:text-green-400 transition duration-200">
      ${product.name}
    </h2>
    <p class="text-sm text-gray-400 mb-4 line-clamp-3">
      ${product.description}
    </p>
    <p class="text-lg font-bold mb-4">
      Price: <span class="text-green-400"> ${product.price.toFixed(2)}TK</span>
    </p>


  <p class="font-thin mb-0 text-gray-400">
    Stock: <i><span class="text-gray-400">${product.pcs}</span>.</i>
    </p>


    <div class="card-actions mt-4 flex justify-between items-center">
      <button
        onclick="addToCart(${product.id})"
        class="btn bg-gradient-to-r from-green-500 to-green-700 text-black font-bold px-6 py-3 rounded-lg shadow-lg hover:from-green-700 hover:to-green-500 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
      >
        Add to Cart
      </button>
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
      (product) => product.id >= 1 && product.id <= 3
    );
  } else if (categoryId === 2) {
    // Filter only bookmark products (IDs 11 and 14)
    filteredProducts = products.filter(
      (product) => product.id >= 10 && product.id <= 10.25
    );
  } else if (categoryId === 3) {
    // Filter only bookmark products (IDs 15 and 18)
    filteredProducts = products.filter(
      (product) => product.id >= 13 && product.id <= 30
    );
  } else if (categoryId === 4) {
    // Filter only bookmark products (IDs 1.5 and 1.6)
    filteredProducts = products.filter(
      (product) => product.id >= 11 && product.id <= 30
    );
  } else {
    // Show all products for the "All Products" category
    filteredProducts = products;
  }

  loadFilteredProducts(filteredProducts);
}
