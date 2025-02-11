<script setup lang="ts">
import { ref } from 'vue';
import CommonHeaderV2 from '../components/common/CommonHeaderV2.vue';
import SearchArea from '@/components/common/SearchArea.vue';

const searchValue = ref<string>('');
const isSearch = ref<boolean>(false);

const handleToggleSearch = () => {
  isSearch.value = !isSearch.value;
};
</script>

<template>
  <SearchArea
    :is-show="isSearch"
    v-model="searchValue"
    @click:close="handleToggleSearch"
  />
  <div class="p-4 lg:p-10 flex flex-col lg:flex-row min-h-screen">
    <div class="border-b border-rurikon-border lg:border-b-0 lg:border-r">
      <CommonHeaderV2 @handle-toggle-search="handleToggleSearch" />
    </div>
    <div class="pt-4 lg:pt-0 lg:pl-10 mx-auto w-full">
      <RouterView />
    </div>
  </div>
  <!-- <CommonHeader />
  <div class="bg-background lg:p-10 p-4 mx-auto min-h-screen">
    <div
      class="bg-white max-w-[80rem] mx-auto rounded-xl drop-shadow-xl mt-[var(--header-height)]"
    >
      <RouterView />
    </div>
  </div> -->
</template>
