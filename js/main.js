document.addEventListener('DOMContentLoaded', () => {
  const cartToggle = document.getElementById('cart-toggle');
  const cartDropdown = document.getElementById('cart-dropdown');
  const cartItemsContainer = document.getElementById('cart-items');
  const cartTotalElement = document.getElementById('cart-total');
  const cartCountElement = document.getElementById('cart-count');
  const addButtons = document.querySelectorAll('.add-to-cart-btn');

  let cart = [];

  cartToggle.addEventListener('click', () => {
    cartDropdown.classList.toggle('active');
  });

  addButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const name = e.target.getAttribute('data-name');
      const price = parseInt(e.target.getAttribute('data-price'));
      
      cart.push({ name, price });
      updateCartUI();
    });
  });

  function updateCartUI() {
    cartItemsContainer.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
      total += item.price;
      const li = document.createElement('li');
      li.innerHTML = `<span>${item.name}</span><span>${item.price} грн</span>`;
      cartItemsContainer.appendChild(li);
    });
    
    cartTotalElement.textContent = total;
    cartCountElement.textContent = cart.length;
  }
});