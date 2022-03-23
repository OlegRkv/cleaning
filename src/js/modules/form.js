function form(formSelector) {
  const form = document.querySelector(formSelector),
        phoneInput = form.querySelector('.form__phone'),
        messangerBtn = form.querySelectorAll('.form__radio'),
        submitBtn = form.querySelector('.form__button'),
        checkbox = form.querySelector('.form__checkbox');

  messangerBtn.forEach(item => {
    item.parentElement.addEventListener('click', (e) => {
      if (item.checked) {
        return;
      } else {
        messangerBtn.forEach(i => {
          i.parentElement.classList.remove('form__choice_active');
        });
        e.target.classList.add('form__choice_active');
      }
    });
  });

  phoneInput.addEventListener('input', () => {
    if (phoneInput.value.match(/\D/g)) {
      phoneInput.style.borderColor = 'red';
    } else {
      phoneInput.style.borderColor = 'transparent';
    }
  });

  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      submitBtn.removeAttribute('disabled');
    } else {
      submitBtn.setAttribute('disabled', 'true');
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    document.location.href = '/thanks.html';
    e.target.reset();
    console.log(e.target);
  });
}

export default form;