import './css/styles.css';
var debounce = require('lodash.debounce');
const refs={
    inputSearchRef: document.querySelector('#search-box'),
    listCountryRef: document.querySelector('.country-list'),
    infoCountryBoxRef: document.querySelector('.country-info'),

}

const DEBOUNCE_DELAY = 300;
const BASE_URL="https://restcountries.com/v3.1/"
function searchCountry(city) {
    return fetch(`${BASE_URL}name/${city}`).then(
      response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      }
    ).then( response => {
        console.log(response)
      })
  }
  refs.inputSearchRef.addEventListener('input',debounce((event)=>{
    searchCountry(event.target.value)
  },300))
 