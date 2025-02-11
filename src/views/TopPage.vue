<script setup lang="ts">
import { computed, ref } from 'vue';
import { useCountryStore } from '@/stores/countries';
import { useRouter } from 'vue-router';
import CountryCard from '@/components/common/CountryCard.vue';
import CommonSearch from '@/components/common/CommonSearch.vue';
import QuickStartMenuItem from '@/components/common/QuickStartMenuItem.vue';
import AlphabetSearch from '@/components/common/AlphabetSearch.vue';

const router = useRouter();

const countryStore = useCountryStore();

const searchTerm = ref<string>('');

const handleGoToCountry = (countryName: string) => {
  router.push(`/details/${countryName}`);
};

const filteredSearchResults = computed(() =>
  countryStore.searchResults.filter(
    (result) =>
      result.toLowerCase().includes(searchTerm.value) ||
      result.includes(searchTerm.value),
  ),
);

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
    <!-- <div class="flex flex-col gap-10">
      <div class="grid lg:grid-cols-2 gap-6">
        <div class="rounded-xl overflow-hidden">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/15/Old-world-map.jpg"
            alt=""
            class="size-full"
          />
        </div>
        <div class="flex flex-col lg:justify-between gap-4 py-4">
          <div class="flex flex-col gap-2">
            <p class="text-6xl font-bold">Explore The World</p>
            <p>Discover countries, flags, and quizzes</p>
          </div>
          <CommonSearch
            v-model="searchTerm"
            variant="large"
            :results="filteredSearchResults"
            placeholder="Search for a country"
          />
        </div>
      </div>
      <div class="flex flex-col gap-6">
        <p class="font-bold text-[1.5rem]">Featured</p>
        <div class="grid lg:grid-cols-4 gap-4">
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
      <div class="flex flex-col gap-4">
        <p class="font-bold text-[1.5rem]">Quick start</p>
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
      <div class="flex flex-col gap-4">
        <p class="font-bold text-[1.5rem]">Search by letter</p>
        <AlphabetSearch />
      </div>
    </div> -->
  </div>
</template>
