'use strict';

import tabs from './modules/tabs';
import faq from './modules/faq';
import slider from './modules/slider';
import form from './modules/form';
import modal from './modules/modal';



window.addEventListener('DOMContentLoaded', () => {
  tabs('tabs__button_active');
  faq();
  slider();
  form('#main-form');
  form('#modal-form');
  modal();
});


