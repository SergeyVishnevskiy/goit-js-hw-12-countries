import './styles.css';
import apiCountries from './js/fetchCountries';
import foundCountry from './js/foundCountry';
import refs from './js/refs';
import debounce from 'lodash.debounce';

const inputSearchCountry = event => {
  apiCountries.query = event.target.value;
  if (apiCountries.query) {
    apiCountries.fetchCountries().then(foundCountry);
  }
};
refs.input.addEventListener('input', debounce(inputSearchCountry, 500));
