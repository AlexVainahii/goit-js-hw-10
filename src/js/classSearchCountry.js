import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { refs } from './refs';

export class SearchCountry {
  constructor(refs, fetchCountry, DEBOUNCE_DELAY) {
    this.refs = refs;
    this.fetchCountry = fetchCountry;
    this.DEBOUNCE_DELAY = DEBOUNCE_DELAY;
  }
  Listener() {
    refs.inputSearchRef.addEventListener(
      'input',
      debounce(this.SearchCountry.bind(this), this.DEBOUNCE_DELAY)
    );
  }
  SearchCountry(event) {
    const inputCountry = event.target.value.trim().toLowerCase();
    this.fetchCountry(inputCountry)
      .then()
      .then(this.onSucces.bind(this))
      .catch(this.OnError.bind(this));
  }
  ClearPage() {
    this.refs.listCountryRef.innerHTML = '';
    this.refs.infoCountryBoxRef.innerHTML = '';
  }
  OnError() {
    this.ClearPage();
    this.refs.inputSearchRef.value
      ? Notiflix.Notify.failure('Oops, there is no country with that name')
      : Notiflix.Notify.warning('Enter text');
  }
  onSucces(arr) {
    if (arr.length > 10) {
      this.refs.listCountryRef.innerHTML = '';
      this.refs.infoCountryBoxRef.innerHTML = '';
      Notiflix.Notify.info(
        'Too many matches found. Please enter a more specific name.'
      );
    } else {
      this.createMarkup(arr);
    }
  }
  createMarkup(arr) {
    this.ClearPage();
    if (arr.length > 1) {
      arr.map(item => {
        {
          const { flags, name } = item;
          const imgElem = document.createElement('img');
          imgElem.src = flags.svg;
          imgElem.alt = name.common;
          imgElem.width = '50';
          imgElem.height = '30';
          const divElem = document.createElement('div');
          divElem.textContent = name.common;
          divElem.classList.add('text');
          const liElem = document.createElement('li');
          liElem.append(imgElem, divElem);
          this.refs.listCountryRef.append(liElem);
        }
      });
    } else {
      const { flags, name, capital, population, languages } = arr[0];
      languages.object;
      const ulElem = document.createElement('ul');
      const imgElem = document.createElement('img');
      imgElem.src = flags.svg;
      imgElem.alt = name.common;
      imgElem.width = '60';
      imgElem.height = '40';
      const divElem = document.createElement('div');
      divElem.textContent = name.common;
      divElem.classList.add('texth');
      const liElem = document.createElement('li');
      liElem.append(imgElem, divElem);
      let spanElemKey = document.createElement('span');
      let spanElemVal = document.createElement('span');
      const liElemCapital = document.createElement('li');
      spanElemKey.textContent = 'Capital: ';
      spanElemVal.textContent = capital;
      spanElemKey.classList.add('key');
      spanElemVal.classList.add('value');
      liElemCapital.append(spanElemKey, spanElemVal);
      spanElemKey = document.createElement('span');
      spanElemVal = document.createElement('span');
      const liElemPopulation = document.createElement('li');
      spanElemKey.textContent = 'Population: ';
      spanElemVal.textContent = population;
      spanElemKey.classList.add('key');
      spanElemVal.classList.add('value');
      liElemPopulation.append(spanElemKey, spanElemVal);
      spanElemKey = document.createElement('span');
      spanElemVal = document.createElement('span');
      const liElemLang = document.createElement('li');
      let textLang = '';

      const lang = Object.values(languages);
      for (let i = 0; i < lang.length; i++) {
        textLang += lang[i] + ', ';
      }
      spanElemKey.textContent = 'Languages: ';
      spanElemVal.textContent = textLang.slice(0, textLang.length - 2);
      spanElemKey.classList.add('key');
      spanElemVal.classList.add('value');
      liElemLang.append(spanElemKey, spanElemVal);
      ulElem.append(liElem, liElemCapital, liElemPopulation, liElemLang);
      this.refs.infoCountryBoxRef.append(ulElem);
    }
  }
  Init() {
    this.Listener();
  }
}
