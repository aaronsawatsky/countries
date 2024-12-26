export function useCountries() {
  const fetchCountries = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      if (!response.ok) {
        throw new Error(`Error fetching countries: ${response.statusText}`);
      } else {
        return await response.json();
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
  };
}
