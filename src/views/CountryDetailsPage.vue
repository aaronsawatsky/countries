<script setup lang="ts">
import { onMounted } from 'vue';
import { useCountries } from '../composables/useCountries.ts';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const countryName = route.params.name;

const { fetchCountryDetails } = useCountries();

onMounted(async () => {
  const res = await fetchCountryDetails(countryName);
  if (res) {
    console.log(res);
  }
});
</script>

<template>{{ countryName }}</template>
