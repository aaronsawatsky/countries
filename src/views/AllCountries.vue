<script setup lang="ts">
import { useCountries } from '@/composables/useCountries';
import { computed, onMounted, watchEffect } from 'vue';
import type { Country } from '@/types';
import CountryPreviewCard from '@/components/common/CountryPreviewCard.vue';

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

watchEffect(() => {
  console.log(sortedCountries.value);
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
      class="divide-y divide-border-rurikon"
    >
      <p class="font-semibold text-rurikon-600 text-4xl pb-4">{{ letter }}</p>
      <div class="flex flex-col gap-4 pt-4">
        <CountryPreviewCard
          v-for="(country, countryIndex) in sortedCountries[letter]"
          :key="countryIndex"
          :name="country.name.common"
          :flag="country.flags.png"
          :capitals="country.capital || []"
        />
      </div>
    </div>
  </div>
</template>
