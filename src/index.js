import './css/styles.css';
import debounce from 'lodash.debounce'
import Notiflix from 'notiflix';
const refs={
    inputSearchRef: document.querySelector('#search-box'),
    listCountryRef: document.querySelector('.country-list'),
    infoCountryBoxRef: document.querySelector('.country-info'),

}

const DEBOUNCE_DELAY = 300;
const BASE_URL="https://restcountries.com/v3.1/"
function fetchCountry(country) {
    console.log("country",country);
    console.log(`${BASE_URL}name/${country}`)
    return fetch(`${BASE_URL}name/${country}`).then(
      response => {
        console.log(response.ok);
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
      })
  }
  refs.inputSearchRef.addEventListener('input',debounce(searchCountry,DEBOUNCE_DELAY))
   
  function searchCountry(event){
    const inputCountry=event.target.value;
console.log(inputCountry);
fetchCountry(event.target.value).then().then(onSucces
    ).catch(onError)
  }
  function onError(){
    Notiflix.Notify.failure("Oops, there is no country with that name");
    
  }
  function onSucces(array){

    console.log(array.length, "dsfgsfwsesf");
    if (array.length>10){
        Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");
    }
    else{
    createMarkup(array)
    }
  }
  function createMarkup(array)
  {
    console.log("uyi");
    if(array.length>1){
        console.log("object");
    }
    else{
        console.log("erorr");
    }
  }