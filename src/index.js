import './css/styles.css';
import { refs } from './js/refs';
import { fetchCountry } from './js/fetchCountries';
import { SearchCountry } from './js/classSearchCountry';
const DEBOUNCE_DELAY = 300;

const mySerachclass = new SearchCountry(refs, fetchCountry, DEBOUNCE_DELAY);
mySerachclass.Init();
