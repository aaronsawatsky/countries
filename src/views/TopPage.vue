<script setup lang="ts">
import { computed } from 'vue';
import { useCountryStore } from '@/stores/countries';
import { useRouter } from 'vue-router';
import CountryCard from '@/components/common/CountryCard.vue';
import QuickStartMenuItem from '@/components/common/QuickStartMenuItem.vue';
import AlphabetSearch from '@/components/common/AlphabetSearch.vue';

const router = useRouter();

const countryStore = useCountryStore();

const handleGoToCountry = (countryName: string) => {
  router.push(`/details/${countryName}`);
};

const getFeaturedCountries = computed(() => {
  const countries = countryStore.countries;
  return countries.sort(() => Math.random() - 0.5).slice(0, 4);
});
</script>

<template>
  <div class="font-sans text-rurikon-600 flex flex-col gap-6">
    <div class="flex flex-col gap-2">
      <p class="font-semibold">Featured Countries</p>
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <CountryCard
          v-for="(country, index) in getFeaturedCountries"
          :key="index"
          :name="country.name.common"
          :flag="country.flags.png"
          :capitals="country.capital ?? []"
          @click:goToCountry="handleGoToCountry"
        />
      </div>
    </div>
    <div class="flex flex-col gap-2">
      <p class="font-semibold">Featured Quizzes</p>
      <div class="flex flex-col gap-4">
        <QuickStartMenuItem
          icon="language"
          title="World capitals"
          subText="Test your knowledge of world capitals"
        />
        <QuickStartMenuItem
          icon="flag"
          title="Country flags"
          subText="Test your knowledge of flags"
        />
      </div>
    </div>
    <div class="flex flex-col gap-2">
      <p class="font-semibold">Search Country by Letter</p>
      <AlphabetSearch />
    </div>
  </div>
</template>
