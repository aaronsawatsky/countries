<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
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

onMounted(async () => {
  setHeaderHeight();
});
</script>

<template>
  <div
    ref="header"
    class="w-full fixed bg-white top-0 z-10 flex gap-4 justify-between items-center border-b border-border-base p-2 px-4"
  >
    <span class="font-bold">Explorer</span>
    <div
      class="grid lg:grid-cols-[20rem_auto] grid-cols-[min-content_1fr] gap-4"
    >
      <CommonSearch v-model="searchTerm" :results="filteredSearchResults" />
      <button
        class="bg-[#f3efe7] text-[#1b160e] text-sm leading-none rounded-full px-4 font-bold"
      >
        <span class="truncate">Log in</span>
      </button>
    </div>
  </div>
</template>
