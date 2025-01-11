<script setup lang="ts">
import MaterialIcon from './MaterialIcon.vue';
import { onClickOutside } from '@vueuse/core';
import { useRouter, useRoute } from 'vue-router';
import { ref, watch } from 'vue';

interface Props {
  results: string[];
}

defineProps<Props>();

const router = useRouter();
const route = useRoute();
const model = defineModel<string>();
const isShowResultsCard = ref<boolean>(false);
const resultsCard = ref<HTMLElement>();

onClickOutside(resultsCard, () => (isShowResultsCard.value = false));

const handleClearSearchTerm = () => {
  model.value = '';
};

const handleSubmit = () => {
  if (model.value) {
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

watch(
  () => route.fullPath,
  () => (isShowResultsCard.value = false),
);
</script>

<template>
  <div class="relative w-full max-w-[40.8125rem] mx-auto">
    <form action="" @submit.prevent="handleSubmit">
      <input
        v-model="model"
        type="text"
        class="w-full border border-gray rounded-full py-4 pl-12"
        placeholder="Search"
        @input="handleShowResults"
      />
      <button type="button" class="absolute top-4 left-4">
        <MaterialIcon icon-name="search" class="text-gray" />
      </button>
      <button
        v-if="model"
        type="button"
        class="absolute top-4 right-4"
        @click="handleClearSearchTerm"
      >
        <MaterialIcon icon-name="close" class="text-gray" />
      </button>
      <div
        v-if="isShowResultsCard && model"
        ref="resultsCard"
        class="bg-white drop-shadow w-full max-w-[40.8125rem] absolute mt-2 flex flex-col max-h-[35.5rem] overflow-scroll rounded-lg"
      >
        <button
          v-for="result in results"
          type="button"
          class="hover:bg-gray/20 py-2 px-4 text-left"
          @click="handleGoToCountryDetails(result)"
        >
          {{ result }}
        </button>
        <p v-if="results.length === 0" class="py-2 px-4">No results</p>
      </div>
    </form>
  </div>
</template>
