document.addEventListener('DOMContentLoaded', () => {
  // Находим элементы (пробуем и классы, и ID для надежности)
  const cartToggle = document.querySelector('.cart-toggle-btn') || document.getElementById('cart-toggle');
  const cartDropdown = document.querySelector('.cart-dropdown') || document.getElementById('cart-dropdown');
  const cartItemsContainer = document.getElementById('cart-items');
  const cartTotalElement = document.getElementById('cart-total');
  const cartCountElement = document.getElementById('cart-count');
  const addButtons = document.querySelectorAll('.add-to-cart-btn');

  let cart = [];

  if (cartToggle && cartDropdown) {
    cartToggle.addEventListener('click', (e) => {
      e.preventDefault();
      cartDropdown.classList.toggle('is-open');
      cartDropdown.classList.toggle('is-hidden'); 
      cartDropdown.classList.toggle('active');
    });
  }

  addButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();

      const btn = e.target.closest('.add-to-cart-btn'); 
      if (!btn) return;

      const name = btn.getAttribute('data-name');
      const price = parseInt(btn.getAttribute('data-price'));

      const existingItem = cart.find(item => item.name === name);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({ name, price, quantity: 1 });
      }

      updateCartUI();
    });
  });

  function updateCartUI() {
    if (!cartItemsContainer || !cartTotalElement) return;

    cartItemsContainer.innerHTML = '';
    let total = 0;
    let count = 0;

    cart.forEach(item => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;
      count += item.quantity;

      const li = document.createElement('li');
      li.innerHTML = `<span>${item.name} x ${item.quantity}</span><span>${itemTotal} грн</span>`;
      cartItemsContainer.appendChild(li);
    });

    cartTotalElement.textContent = total;
    if (cartCountElement) {
      cartCountElement.textContent = count;
    }
  }
});
  document.addEventListener('click', (e) => {
    if (cartDropdown && cartToggle) {
      if (!cartDropdown.contains(e.target) && !cartToggle.contains(e.target)) {
        cartDropdown.classList.remove('active', 'is-open', 'is-visible');
        cartDropdown.style.display = 'none';
      }
    }
  });

  if (cartToggle && cartDropdown) {
    cartToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      
      if (cartDropdown.style.display === 'block') {
        cartDropdown.style.display = 'none';
      } else {
        cartDropdown.style.display = 'block';
      }
      
      cartDropdown.classList.toggle('active');
      cartDropdown.classList.toggle('is-open');
    });
  }