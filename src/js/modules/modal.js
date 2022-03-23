function modal() {
  const modalBtn = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal');

  modalBtn.forEach(item => {
    item.addEventListener('click', () => {
      modal.classList.add('modal_active');
      document.body.style.overflow = 'hidden';
    });
  });

  modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal__close') || e.target.classList.contains('modal__wrapper')) {
      modal.classList.remove('modal_active');
      document.body.style.overflow = '';
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modal.classList.contains('modal_active')) {
      modal.classList.remove('modal_active');
      document.body.style.overflow = '';
    }
  });
}

export default modal;