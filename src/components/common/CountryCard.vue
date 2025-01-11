<script setup lang="ts">
import { computed } from 'vue';
import MaterialIcon from './MaterialIcon.vue';
import type { Currencies, Languages } from '@/types';

interface Props {
  name: string;
  continent: string;
  flag: string;
  currency: Currencies | undefined;
  language: Languages | undefined;
  population: number;
}

interface Emits {
  (e: 'click:goToCountry', name: string): void;
}

const emits = defineEmits<Emits>();

const currencyName = computed(() => {
  if (props.currency && Object.keys(props.currency).length > 0) {
    const key = Object.keys(props.currency)[0];
    return props.currency[key].name;
  }
  return '--';
});

const language = computed(() => {
  if (props.language && Object.keys(props.language).length > 0) {
    const key = Object.keys(props.language)[0];
    return props.language[key];
  }
  return '--';
});

const population = computed(() => {
  return props.population.toLocaleString();
});

const props = defineProps<Props>();

const handleGoToCountryDetails = () => {
  emits('click:goToCountry', props.name);
};
</script>

<template>
  <div
    class="rounded-lg border border-gray overflow-hidden drop-shadow cursor-pointer"
    @click="handleGoToCountryDetails"
  >
    <div class="overflow-hidden border-b border-gray">
      <img :src="flag" alt="" class="h-full w-full object-cover aspect-video" />
    </div>
    <div class="p-4 flex flex-col gap-2 bg-white h-full">
      <p class="font-bold text-[1.5rem]">{{ name }}</p>
      <div class="grid grid-cols-2 gap-2 text-[0.875rem]">
        <div class="flex items-center gap-1 w-fit">
          <MaterialIcon icon-name="language" class="text-gray" />
          <p class="leading-none">{{ language }}</p>
        </div>
        <div class="flex items-center gap-1 w-fit">
          <MaterialIcon icon-name="account_balance" class="text-gray" />
          <p class="leading-none">{{ currencyName }}</p>
        </div>
        <div class="flex items-center gap-1 w-fit">
          <MaterialIcon icon-name="location_on" class="text-gray" />
          <p class="leading-none">{{ continent }}</p>
        </div>
        <div class="flex items-center gap-1 w-fit">
          <MaterialIcon icon-name="person" class="text-gray" />
          <p class="leading-none">{{ population }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
