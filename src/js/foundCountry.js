import listCountry from '../templates/listCountry.hbs';
import countryFound from '../templates/countryFound.hbs';
import refs from '../js/refs';

import { notice } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

const createMarkup = countryMarkup => {
  clearMarkup();
  if (countryMarkup.length > 1 && countryMarkup.length <= 10) {
    refs.body.insertAdjacentHTML('beforeend', listCountry(countryMarkup));
  }
  if (countryMarkup.length === 1) {
    refs.body.insertAdjacentHTML('beforeend', countryFound(countryMarkup));
  }
  if (countryMarkup.length > 10) {
    notice({
      title: 'Oh, no(((',
      text: 'Too many matches found. Please enter a more specific query!',
      delay: 1000,
    });
  }
};
const clearMarkup = () => {
  removeElement(document.querySelector('.js-container'));
};
const removeElement = element => {
  if (element) {
    element.remove();
  }
};
export default createMarkup;
