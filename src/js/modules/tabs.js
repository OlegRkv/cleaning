function tabs() {
  const tabsButtons = document.querySelectorAll('.tabs__button');
  const buttonsWrapper = document.querySelector('.tabs__header');
  const tabsContent = document.querySelectorAll('.tabs__content');

  function hideContent() {
    tabsContent.forEach(item => {
      item.style.display = 'none';
    });

    tabsButtons.forEach(btn => {
      btn.classList.remove('tabs__button_active');
    });
  }

  function showContent(i = 0) {
    tabsContent[i].style.display = 'block';
    tabsButtons[i].classList.add('tabs__button_active');
  }

  hideContent();
  showContent();

  buttonsWrapper.addEventListener('click', (event) => {
    const target = event.target;

    if (target && target.classList.contains('tabs__button')) {
      tabsButtons.forEach((item, i) => {
        if (target == item) {
          hideContent();
          showContent(i);
        }
      });
    }
  });
}

export default tabs;