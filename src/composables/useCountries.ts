import { ref } from 'vue';
import type { Country } from '@/types';

export function useCountries() {
  const countries = ref<Country[]>([]);
  const searchResults = ref<string[]>([]);
  const fetchCountries = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      if (!response.ok) {
        throw new Error(`Error fetching countries: ${response.statusText}`);
      } else {
        countries.value = await response.json();
        searchResults.value = countries.value.map(
          (country) => country.name.common,
        );
      }
    } catch (e) {
      console.log(e);
    }
  };

  const fetchCountryDetails = async (countryName: string | string[]) => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${countryName}?fullText=true`,
      );
      if (!response.ok) {
        throw new Error(`Error fetching countries: ${response.statusText}`);
      } else {
        return await response.json();
      }
    } catch (e) {
      console.log(e);
    }
  };

  return {
    fetchCountries,
    fetchCountryDetails,
    countries,
    searchResults,
  };
}
