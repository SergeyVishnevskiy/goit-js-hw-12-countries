export default {
  searchQuery: '',
  fetchCountries() {
    const baseURL = `https://restcountries.eu/rest/v2/name/${this.query}`;
    return fetch(baseURL).then(response => response.json());
  },
  get query() {
    return this.searchQuery;
  },
  set query(value) {
    this.searchQuery = value;
  },
};
