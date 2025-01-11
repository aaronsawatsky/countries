<script setup lang="ts">
import { onMounted, ref, computed, watchEffect } from 'vue';
import { useCountryStore } from '@/stores/countries';
import type { Country } from '@/types.ts';
import { useRouter } from 'vue-router';
import CountryCard from '@/components/common/CountryCard.vue';

const router = useRouter();

const countryStore = useCountryStore();

const handleGoToCountry = (countryName: string) => {
  router.push(`/details/${countryName}`);
};

const sortedCountries = computed(() => {
  const groupedCountries = countryStore.countries.reduce(
    (acc, country) => {
      const firstLetter = country.name.common[0].toLowerCase();
      const group = acc.find((group) => group.key === firstLetter);
      if (!group) {
        acc.push({ key: firstLetter, countries: [country] });
      } else {
        group.countries.push(country);
      }
      return acc;
    },
    [] as { key: string; countries: Country[] }[],
  );
  return groupedCountries.sort((a, b) => {
    if (a.key < b.key) return -1;
    if (a.key > b.key) return 1;
    return 0;
  });
});
</script>

<template>
  <div class="flex flex-col gap-10 max-w-[68.75rem] mx-auto">
    <div
      v-for="(key, index) in sortedCountries"
      :key="index"
      class="flex flex-col gap-4"
    >
      <h1 class="font-bold text-[2rem]">{{ key.key.toUpperCase() }}</h1>
      <div class="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-6">
        <CountryCard
          v-for="country in key.countries"
          :name="country.name.common"
          :continent="country.continents[0]"
          :flag="country.flags.png"
          :currency="country.currencies"
          :language="country.languages"
          :population="country.population"
          @click:goToCountry="handleGoToCountry"
        />
      </div>
    </div>
  </div>
</template>
