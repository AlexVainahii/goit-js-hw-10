import Notiflix from 'notiflix';
import { refs } from './refs';

export function fetchCountry(country) {
  return fetch(`${BASE_URL}name/${country}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(() => {
      refs.inputSearchRef.value
        ? Notiflix.Notify.failure('Oops, there is no country with that name')
        : Notiflix.Notify.warning('Enter text');
    });
}
const BASE_URL = 'https://restcountries.com/v3.1/';
