<script setup lang="ts">
import MaterialIcon from './MaterialIcon.vue';
import { onClickOutside } from '@vueuse/core';
import { useRouter, useRoute } from 'vue-router';
import { ref, watch } from 'vue';

interface Props {
  results: string[];
  variant?: string;
  placeholder?: string; // Make placeholder optional
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: 'Search', // Default value
});
const router = useRouter();
const route = useRoute();
const model = defineModel<string>();
const isShowResultsCard = ref<boolean>(false);
const resultsCard = ref<HTMLElement>();
const selectedResultIndex = ref<number>(-1);

onClickOutside(resultsCard, () => (isShowResultsCard.value = false));

const handleClearSearchTerm = () => {
  model.value = '';
};

const handleSubmit = () => {
  if (model.value && selectedResultIndex.value === -1) {
    isShowResultsCard.value = false;
    router.push({ path: '/search', query: { term: model.value } });
  }
};

const handleShowResults = () => {
  if (!isShowResultsCard.value) {
    isShowResultsCard.value = true;
  }
};

const handleGoToCountryDetails = (country: string) => {
  router.push(`/details/${country}`);
};

const handleNavigateResults = (e: KeyboardEvent) => {
  if (
    e.key === 'ArrowDown' &&
    selectedResultIndex.value < props.results.length - 1
  ) {
    selectedResultIndex.value++;
  } else if (e.key === 'ArrowUp' && selectedResultIndex.value > 0) {
    selectedResultIndex.value--;
  }
  console.log(selectedResultIndex.value);
  console.log(props.results[selectedResultIndex.value]);
};

const handleGo = () => {
  const country = props.results[selectedResultIndex.value];
  router.push(`details/${country}`);
};

watch(
  () => route.fullPath,
  () => (isShowResultsCard.value = false),
);

watch(
  () => isShowResultsCard.value,
  () => {
    if (!isShowResultsCard.value) {
      selectedResultIndex.value = -1;
    }
  },
);
</script>

<template>
  <div class="relative w-full mx-auto">
    <form action="" @submit.prevent="handleSubmit">
      <input
        v-model="model"
        type="text"
        class="w-full bg-accent-bg py-2 pr-4 pl-12 rounded-xl text-accent placeholder:text-accent outline-none"
        :class="{ 'py-4': variant === 'large' }"
        :placeholder
        @input="handleShowResults"
        @keydown.down="handleNavigateResults"
        @keydown.up="handleNavigateResults"
        @keydown.enter.prevent="handleGo"
        @focus="isShowResultsCard = true"
      />
      <button
        type="button"
        class="absolute top-2 left-4"
        :class="{ 'top-4': variant === 'large' }"
      >
        <MaterialIcon icon-name="search" class="text-accent" />
      </button>
      <button
        v-if="model"
        type="button"
        class="absolute top-2 right-4"
        :class="{ 'top-4': variant === 'large' }"
        @click="handleClearSearchTerm"
      >
        <MaterialIcon icon-name="close" class="text-accent" />
      </button>
      <div
        v-if="isShowResultsCard && model"
        ref="resultsCard"
        class="bg-white z-10 divide-y divide-border-base drop-shadow w-full max-w-[40.8125rem] absolute mt-2 flex flex-col max-h-[35.5rem] overflow-scroll rounded-lg"
        @mouseover="selectedResultIndex = -1"
      >
        <button
          v-for="(result, index) in results"
          :key="index"
          type="button"
          class="hover:bg-accent-bg py-2 px-4 text-left hover:text-accent"
          :class="{ 'bg-accent-bg text-accent': index === selectedResultIndex }"
          @click="handleGoToCountryDetails(result)"
        >
          {{ result }}
        </button>
        <p v-if="results.length === 0" class="py-2 px-4">No results</p>
      </div>
    </form>
  </div>
</template>
