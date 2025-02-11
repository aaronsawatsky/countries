<script setup lang="ts">
import { useCountries } from '@/composables/useCountries';
import { computed, onMounted, ref } from 'vue';
import type { Country } from '@/types';

const { countries, fetchCountries } = useCountries();

const alphabet = computed(() =>
  Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)),
);

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

const alphabetHeight = ref<HTMLElement>();

const setAlphabetHeight = () => {
  const height = alphabetHeight.value?.offsetHeight;
  document.documentElement.style.setProperty('--alphabetHeight', `${height}px`);
};

onMounted(() => {
  fetchCountries();
  setAlphabetHeight();
  window.addEventListener('resize', setAlphabetHeight);
});
</script>

<template>
  <div
    ref="alphabetHeight"
    class="flex flex-wrap gap-4 items-center justify-center mb-10 fixed bg-white"
  >
    <a
      v-for="(letter, index) in alphabet"
      :key="index"
      :href="`#${letter}`"
      class="rounded-lg size-12 flex items-center justify-center hover:bg-rurikon-50 transition font-sans text-rurikon-800"
    >
      <p class="underline underline-offset-2">
        {{ letter }}
      </p>
    </a>
  </div>
  <div class="flex flex-col gap-10 font-sans mt-[var(--alphabetHeight)]">
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
