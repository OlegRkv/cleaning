/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/faq.js":
/*!*******************************!*\
  !*** ./src/js/modules/faq.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function faq() {
  const faqBtn = document.querySelectorAll('.faq__item-header');
  faqBtn.forEach(item => {
    item.addEventListener('click', event => {
      const target = event.target;

      if (target.classList.contains('faq__item-header_active')) {
        target.classList.remove('faq__item-header_active');
        target.nextElementSibling.classList.remove('faq__item-content_active');
      } else {
        target.classList.add('faq__item-header_active');
        target.nextElementSibling.classList.add('faq__item-content_active');
      }
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (faq);

/***/ }),

/***/ "./src/js/modules/form.js":
/*!********************************!*\
  !*** ./src/js/modules/form.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function form(formSelector) {
  const form = document.querySelector(formSelector),
        phoneInput = form.querySelector('.form__phone'),
        messangerBtn = form.querySelectorAll('.form__radio'),
        submitBtn = form.querySelector('.form__button'),
        checkbox = form.querySelector('.form__checkbox');
  messangerBtn.forEach(item => {
    item.parentElement.addEventListener('click', e => {
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
  form.addEventListener('submit', e => {
    e.preventDefault();
    document.location.href = '/thanks.html';
    e.target.reset();
    console.log(e.target);
  });
}

/* harmony default export */ __webpack_exports__["default"] = (form);

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function modal() {
  const modalBtn = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal');
  modalBtn.forEach(item => {
    item.addEventListener('click', () => {
      modal.classList.add('modal_active');
      document.body.style.overflow = 'hidden';
    });
  });
  modal.addEventListener('click', e => {
    if (e.target.classList.contains('modal__close') || e.target.classList.contains('modal__wrapper')) {
      modal.classList.remove('modal_active');
      document.body.style.overflow = '';
    }
  });
  document.addEventListener('keydown', e => {
    if (e.code === 'Escape' && modal.classList.contains('modal_active')) {
      modal.classList.remove('modal_active');
      document.body.style.overflow = '';
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (modal);

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function slider() {
  const sliderItems = document.querySelectorAll('.slider__img'),
        buttonPrev = document.querySelector('.slider__button_prev'),
        buttonNext = document.querySelector('.slider__button_next'),
        slidesInfo = document.querySelector('.slider__counter');
  let currentSlide = 1;
  hideContent();
  showContent();
  buttonPrev.addEventListener('click', () => {
    if (currentSlide == 1) {
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
    if (currentSlide === sliderItems.length) {
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

/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
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

  function showContent() {
    let i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    tabsContent[i].style.display = 'block';
    tabsButtons[i].classList.add('tabs__button_active');
  }

  hideContent();
  showContent();
  buttonsWrapper.addEventListener('click', event => {
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

/* harmony default export */ __webpack_exports__["default"] = (tabs);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js");
/* harmony import */ var _modules_faq__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/faq */ "./src/js/modules/faq.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/form */ "./src/js/modules/form.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");







window.addEventListener('DOMContentLoaded', () => {
  (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])('tabs__button_active');
  (0,_modules_faq__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_modules_form__WEBPACK_IMPORTED_MODULE_3__["default"])('#main-form');
  (0,_modules_form__WEBPACK_IMPORTED_MODULE_3__["default"])('#modal-form');
  (0,_modules_modal__WEBPACK_IMPORTED_MODULE_4__["default"])();
});
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map