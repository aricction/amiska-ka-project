// Countdown Function
let countDate = new Date('June 1, 2025 00:00:00').getTime();

function CountDown() {
  let now = new Date().getTime();
  let gap = countDate - now;

  let second = 1000;
  let minute = second * 60;
  let hour = minute * 60;
  let day = hour * 24;

  let d = Math.floor(gap / day);
  let h = Math.floor((gap % day) / hour);
  let m = Math.floor((gap % hour) / minute);
  let s = Math.floor((gap % minute) / second);

  document.getElementById('day').innerText = d;
  document.getElementById('hour').innerText = h;
  document.getElementById('minute').innerText = m;
  document.getElementById('second').innerText = s;
}

setInterval(CountDown, 1000);

// Products Data
const products = [
  { id: 3, name: "Organic Orange", url: "https://i.postimg.cc/63c1jgFP/product-3.png", price: 10.5 },
  { id: 1, name: "Organic Banana", url: "https://i.postimg.cc/GmBwBL6m/product-1.png", price: 10.5 },
  { id: 2, name: "Organic Tomato", url: "https://i.postimg.cc/bJ9KXsS3/product-2.png", price: 10.5 },
  { id: 4, name: "Natural Mild", url: "https://i.postimg.cc/26tnSxW6/product-4.png", price: 10.5 },
  { id: 5, name: "Organic Grapes", url: "https://i.postimg.cc/gkFNyYw0/product-5.png", price: 10.5 },
  { id: 6, name: "Natural Almonds", url: "https://i.postimg.cc/L8mD7N3K/product-6.png", price: 10.5 },
  { id: 7, name: "Organic Apples", url: "https://i.postimg.cc/hPB1zpwz/product-7.png", price: 10.5 },
  { id: 8, name: "Natural Butter", url: "https://i.postimg.cc/PqgwGqnp/product-8.png", price: 10.5 },
];

// Add products to cart
function addToCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const addToCartBtns = document.querySelectorAll('.addTocartBtn');

  addToCartBtns.forEach((button) => {
    button.addEventListener('click', (e) => {
      const productId = parseInt(e.target.dataset.id);
      const product = products.find((item) => item.id === productId);

      if (product) {
        // Check if the item already exists in the cart
        const existingItem = cart.find((item) => item.id === productId);
        if (existingItem) {
          console.log(`Product already in cart: ${product.name}`);
        } else {
          cart.push(product);
          console.log(`Added to cart: ${product.name} - $${product.price}`);
          localStorage.setItem('cart', JSON.stringify(cart));
        }
      } else {
        console.error('Product not found!');
      }
    });
  });
}

// Update cart UI
function updateCartUI() {
  const cartContainer = document.getElementById('cartItems');
 
  if (!cartContainer) return;

  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  if (cart.length === 0) {
    cartContainer.innerHTML = 'Your cart is empty';
    return;
  }
  
  
  cartContainer.innerHTML = ''; 

  // Calculate total price
  let total = cart.reduce((acc, item) => acc + item.price, 0);

  cart.forEach((item) => {
    const div = document.createElement('div');
    div.classList.add('product-card');

    div.innerHTML = `
      <img src="${item.url}" alt="${item.name}" style="width:50px; height:50px;" />
      <p>${item.name} - $${item.price.toFixed(2)}</p>
    `;
    cartContainer.appendChild(div);
  });

  // Display total price
  const totalDiv = document.createElement('div');
  totalDiv.classList.add('cart-total');
  totalDiv.innerHTML = `<h3>Total Price: $${total.toFixed(2)}</h3>`;
  cartContainer.appendChild(totalDiv);
}

addToCart();
updateCartUI();


const itemCount = document.getElementById('item-count');

itemCount.innerHTML = `${cart.length}`;

itemCount.appendChild(div);  


const modal = document.getElementById('myModal');
const span = document.getElementById('close');
const btn = document.getElementById('myBtn');



// Close the modal when clicking outside the modal content
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
