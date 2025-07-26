const openBtns = document.querySelectorAll('[data-modal-open]');
const closeBtns = document.querySelectorAll('[data-modal-close]');
openBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const modalId = btn.getAttribute('data-modal-open');
    const modal = document.getElementById(modalId);
    modal.classList.remove('is-hidden');
    modal.classList.add('is-open');
  });
});
closeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = btn.closest('.modal-backdrop');
    modal.classList.add('is-hidden');
    modal.classList.remove('is-open');
  });
});
document.addEventListener('click', event => {
  if (
    event.target.classList.contains('modal-backdrop') &&
    event.target.classList.contains('is-open')
  ) {
    event.target.classList.add('is-hidden');
    event.target.classList.remove('is-open');
  }
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    const openModal = document.querySelector('.modal-backdrop.is-open');
    if (openModal) {
      openModal.classList.add('is-hidden');
      openModal.classList.remove('is-open');
    }
  }
});
