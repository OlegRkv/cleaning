function slider() {
  const sliderItems = document.querySelectorAll('.slider__img'),
        buttonPrev = document.querySelector('.slider__button_prev'),
        buttonNext = document.querySelector('.slider__button_next'),
        slidesInfo = document.querySelector('.slider__counter');

  let   currentSlide = 1;

  hideContent();
  showContent();

  buttonPrev.addEventListener('click', () => {
    if(currentSlide == 1) {
      hideContent();
      currentSlide = sliderItems.length;
      showContent();
    } else {
      hideContent();
      currentSlide--;
      showContent();
    }
  });

  buttonNext.addEventListener('click', () => {
    if(currentSlide === sliderItems.length) {
      hideContent();
      currentSlide = 1;
      showContent();
    } else {
      currentSlide++;
      hideContent();
      showContent();
    }
  });


  function hideContent() {
    sliderItems.forEach(item => {
      item.classList.remove('slider__img_active');
    });
  }

  function showContent() {
    sliderItems[currentSlide - 1].classList.add('slider__img_active');
    slidesInfo.textContent = `${currentSlide} / ${sliderItems.length}`;
  }

}

export default slider;