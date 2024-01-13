(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-b]'),
    closeModalBtn: document.querySelector('[data-modal-close-b]'),
    additionalBtn: document.querySelector('[data-modal-additional-b]'), 
    modal: document.querySelector('[data-modal-b]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModalBuy);
  refs.closeModalBtn.addEventListener('click', toggleModalBuy);
  refs.additionalBtn.addEventListener('click', toggleModalBuy); 
  function toggleModalBuy() {
    refs.modal.classList.toggle('is-hidden');
  }
})();