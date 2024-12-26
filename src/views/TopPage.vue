<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useCountries } from '../composables/useCountries.ts';
import CountryCard from '../components/common/CountryCard.vue';
import type { Country } from '@/types.ts';
import { useRouter } from 'vue-router';

const router = useRouter();

const { fetchCountries } = useCountries();

const allCountries = ref<Country[]>([]);

const handleGoToCountry = (countryName: string) => {
  router.push(`/details/${countryName}`);
};

onMounted(async () => {
  allCountries.value = await fetchCountries();
});
</script>

<template>
  <div class="grid grid-cols-2 gap-6">
    <div
      v-for="(country, index) in allCountries"
      :key="index"
      class="max-w-[25rem]"
    >
      <CountryCard
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
</template>
