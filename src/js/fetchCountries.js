export function fetchCountry(country) {
  return fetch(`${BASE_URL}name/${country}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
const BASE_URL = 'https://restcountries.com/v3.1/';
