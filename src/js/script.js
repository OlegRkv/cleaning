'use strict';

import tabs from './modules/tabs';
import faq from './modules/faq';
import slider from './modules/slider';



window.addEventListener('DOMContentLoaded', () => {
  tabs('tabs__button_active');
  faq();
  slider();
});


