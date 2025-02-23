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
  <CommonHeaderV2 @handle-toggle-search="handleToggleSearch" />
  <div
    class="pt-[calc(var(--headerHeight)+1rem)] px-4 lg:py-10 lg:px-0 lg:pl-[calc(var(--headerWidth)+2.5rem)] lg:pr-10"
  >
    <transition name="fade" mode="out-in">
      <RouterView :key="$route.fullPath" />
    </transition>
  </div>
</template>

<style>
/* Fade animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
