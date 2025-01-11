<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router';
import { onMounted } from 'vue';
import { useCountryStore } from '@/stores/countries';

const route = useRoute();
const countryStore = useCountryStore();
onMounted(async () => {
  await countryStore.fetchCountries();
});
</script>

<template>
  <component :is="route.meta.layout">
    <RouterView />
  </component>
</template>
