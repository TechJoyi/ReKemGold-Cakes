// Initialize cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update cart count
function updateCartCount() {
  document.querySelector('.cart-count').textContent = cart.length;
}

// Add item to cart
function addToCart(cake) {
  cart.push(cake);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}

// Remove item from cart
function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
}

// Render cart items
function renderCart() {
  const cartContainer = document.querySelector('.cart-items');
  cartContainer.innerHTML = '';
  cart.forEach((item, index) => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('cart-item');
    itemDiv.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div>
        <h4>${item.name}</h4>
        <p>${item.price}</p>
        <button onclick="removeFromCart(${index})">Remove</button>
      </div>
    `;
    cartContainer.appendChild(itemDiv);
  });
}

// Initialize cart page
if (document.body.id === 'cart') {
  renderCart();
  updateCartCount();
}

  function toggleMenu() {
    const menu = document.querySelector('.nav-menu');
    menu.classList.toggle('show');
  }

// Filter cakes based on search input
function filterCakes() {
  const query = document.getElementById('search').value.toLowerCase();
  const cakes = document.querySelectorAll('.cake');
  cakes.forEach(cake => {
    const name = cake.querySelector('h3').textContent.toLowerCase();
    cake.style.display = name.includes(query) ? 'block' : 'none';
  });
}

// Order Form Submission
document.getElementById('orderForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const cakeType = document.getElementById('cakeType').value;
  const message = document.getElementById('message').value;

  if (name && email && cakeType) {
    alert(`Thank you for your order, ${name}! We'll send a confirmation to ${email}.`);
    this.reset();
  } else {
    alert('Please fill out all required fields.');
  }
});




















// export default [
//     {
//       id: 1,
//       name: 'Chocolate Delight',
//       price: 25,
//       description: 'Rich chocolate cake with ganache',
//       image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c'
//     },
//     {
//       id: 2,
//       name: 'Vanilla Dream',
//       price: 22,
//       description: 'Soft vanilla layers with cream',
//       image: 'https://images.unsplash.com/photo-1599785209707-28c4673e6c61'
//     },
//     {
//       id: 3,
//       name: 'Red Velvet',
//       price: 28,
//       description: 'Classic red velvet with cream cheese frosting',
//       image: 'https://images.unsplash.com/photo-1613145997180-d02fe66a35d9'
//     }
//   ];
  