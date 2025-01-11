<script setup lang="ts">
import { ref, onMounted, watch, computed, watchEffect } from 'vue';
import CommonSearch from './CommonSearch.vue';
import { useCountryStore } from '@/stores/countries';

const header = ref<HTMLElement>();
const searchTerm = ref<string>('');
const countryStore = useCountryStore();

const setHeaderHeight = () => {
  document.documentElement.style.setProperty(
    '--header-height',
    `${header.value?.offsetHeight}px`,
  );
};

const filteredSearchResults = computed(() =>
  countryStore.searchResults.filter(
    (result) =>
      result.toLowerCase().includes(searchTerm.value) ||
      result.includes(searchTerm.value),
  ),
);

watchEffect(() => console.log(countryStore.searchResults));

onMounted(async () => {
  setHeaderHeight();
});
</script>

<template>
  <div
    ref="header"
    class="w-full border-b border-gray p-4 bg-navy fixed top-0 z-10"
  >
    <CommonSearch v-model="searchTerm" :results="filteredSearchResults" />
  </div>
</template>
