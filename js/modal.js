document.addEventListener('DOMContentLoaded', () => {
  const openModalBtn = document.querySelector('.hero-btn');
  const closeModalBtn = document.querySelector('.modal-close-btn');
  const modal = document.getElementById('modal');

  function toggleModal(e) {
    if (e) e.preventDefault();
    
    modal.classList.toggle('is-open');
    modal.classList.toggle('is-hidden');
    
    if (modal.classList.contains('is-open') || !modal.classList.contains('is-hidden')) {
      const mainCartList = document.getElementById('cart-items');
      const mainCartTotal = document.getElementById('cart-total');
      const modalCartList = document.getElementById('modal-cart-list');
      const modalCartTotal = document.getElementById('modal-cart-total');
      
      if (mainCartList && modalCartList && mainCartTotal && modalCartTotal) {
        modalCartList.innerHTML = mainCartList.innerHTML;
        modalCartTotal.textContent = mainCartTotal.textContent;
      }
    }
  }

  if (openModalBtn) {
    openModalBtn.addEventListener('click', toggleModal);
  }
  
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', toggleModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        toggleModal();
      }
    });
  }
});