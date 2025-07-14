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
  