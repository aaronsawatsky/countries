<script setup lang="ts">
import { onMounted } from 'vue';
import { useCountries } from '../composables/useCountries.ts';
import { useRoute } from 'vue-router';

const route = useRoute();

const { fetchCountryDetails } = useCountries();

onMounted(async () => {
  const res = await fetchCountryDetails(route.params.name);
  if (res) {
    console.log(res);
  }
});
</script>

<template>aaaa</template>
