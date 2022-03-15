function faq() {

  const faqBtn = document.querySelectorAll('.faq__item-header');

  faqBtn.forEach(item => {
    item.addEventListener('click', (event) => {
      const target = event.target;
      console.log(target);

      if (target.classList.contains('faq__item-header_active')) {
        target.classList.remove('faq__item-header_active');
        target.nextElementSibling.classList.remove('faq__item-content_active');
      } else {
        console.log(target.nextElementSibling);
        target.classList.add('faq__item-header_active');
        target.nextElementSibling.classList.add('faq__item-content_active');
      }
    });
  });
}

export default faq;