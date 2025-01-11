<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useCountryStore } from '@/stores/countries';

const countryStore = useCountryStore();
const route = useRoute();
const router = useRouter();

const results = computed(() =>
  countryStore.searchResults.filter((country) =>
    country.includes(route.query.term as string),
  ),
);
</script>
<template>{{ results }}</template>
