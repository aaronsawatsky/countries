<script setup lang="ts">
import { useCountries } from '@/composables/useCountries';
import { computed, onMounted } from 'vue';
import type { Country } from '@/types';

const { countries, fetchCountries } = useCountries();

const sortedCountries = computed(() => {
  const grouped = countries.value.reduce<Record<string, Country[]>>(
    (acc, country) => {
      const firstLetter = country.name.common[0];

      if (!acc[firstLetter]) {
        acc[firstLetter] = [];
      }

      acc[firstLetter].push(country);
      return acc;
    },
    {},
  );
  return grouped;
});

onMounted(() => {
  fetchCountries();
});
</script>

<template>
  <div class="flex flex-col gap-10 font-sans">
    <div
      v-for="(letter, letterIndex) in Object.keys(sortedCountries).sort()"
      :key="letterIndex"
      :id="letter"
      class="divide-y divide-rurikon-border"
    >
      <p class="font-semibold text-rurikon-600 text-4xl pb-4">{{ letter }}</p>
      <div class="flex flex-col gap-4 pt-4">
        <router-link
          :to="`/details/${country.name.common}`"
          v-for="(country, countryIndex) in sortedCountries[letter]"
          :key="countryIndex"
          class="underline text-rurikon-300 hover:text-rurikon-800 transition w-fit"
        >
          {{ country.name.common }}
        </router-link>
      </div>
    </div>
  </div>
</template>
