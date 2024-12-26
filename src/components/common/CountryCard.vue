<script setup lang="ts">
import { computed } from 'vue';
import MaterialIcon from './MaterialIcon.vue';
import type { Currencies, Languages } from '@/types';

interface Props {
  name: string;
  continent: string;
  flag: string;
  currency: Currencies;
  language: Languages;
  population: number;
}

interface Emits {
  (e: 'click:goToCountry', name: string): void;
}

const emits = defineEmits<Emits>();

const continentColour = computed(() => {
  switch (props.continent) {
    case 'Antarctica':
      return '#797979';
    case 'South America':
      return '#73B790';
    case 'Oceania':
      return '#7990C5';
    case 'North America':
      return '#F17F90';
    case 'Europe':
      return '#77C0D8';
    case 'Asia':
      return '#FFC273';
    case 'Africa':
      return '#FBCBB7';
    default:
      return '';
  }
});

const currencyName = computed(() => {
  if (props.currency && Object.keys(props.currency).length > 0) {
    const key = Object.keys(props.currency)[0];
    return props.currency[key].name;
  }
  return '--'; // Return an empty string or a default value if currency is not available
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
    class="rounded-lg border overflow-hidden drop-shadow cursor-pointer"
    @click="handleGoToCountryDetails"
  >
    <div :class="`bg-[${continentColour}]`" class="p-4">
      <div class="flex items-center justify-between">
        <p class="text-white text-[24px] font-bold">
          {{ name }}
        </p>
      </div>
    </div>
    <div class="grid grid-cols-2 p-4 gap-4 items-center">
      <div class="overflow-hidden">
        <img :src="flag" class="aspect-[3/2] object-contain" />
      </div>
      <div class="flex flex-col gap-2">
        <div class="flex items-center gap-1 w-fit">
          <MaterialIcon
            icon-name="language"
            :style="{ color: continentColour }"
          />
          <p class="leading-none">{{ language }}</p>
        </div>
        <div class="flex items-center gap-1 w-fit">
          <MaterialIcon
            icon-name="account_balance"
            :style="{ color: continentColour }"
          />
          <p class="leading-none">{{ currencyName }}</p>
        </div>
        <div class="flex items-center gap-1 w-fit">
          <MaterialIcon
            icon-name="location_on"
            :style="{ color: continentColour }"
          />
          <p class="leading-none">{{ continent }}</p>
        </div>
        <div class="flex items-center gap-1 w-fit">
          <MaterialIcon
            icon-name="person"
            :style="{ color: continentColour }"
          />
          <p class="leading-none">{{ population }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
