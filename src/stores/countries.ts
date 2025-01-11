import { defineStore } from 'pinia';
import type { Country } from '@/types';

export const useCountryStore = defineStore('countries', {
  state: () => ({
    countries: [] as Country[],
    searchResults: [] as string[],
  }),
  actions: {
    async fetchCountries() {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        if (!response.ok) {
          throw new Error(`Error fetching countries: ${response.statusText}`);
        } else {
          this.countries = await response.json();
          this.searchResults = this.countries.map(
            (country) => country.name.common,
          );
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
});
