<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  name: string;
  flag: string;
  capitals: string[];
}

interface Emits {
  (e: 'click:goToCountry', name: string): void;
}

const emits = defineEmits<Emits>();

const props = defineProps<Props>();

const handleGoToCountryDetails = () => {
  emits('click:goToCountry', props.name);
};

const capitals = computed(() => {
  if (props.capitals) return props.capitals?.join(', ');
  return '';
});
</script>

<template>
  <div class="overflow-hidden cursor-pointer" @click="handleGoToCountryDetails">
    <div class="rounded-lg overflow-hidden mb-2 drop-shadow-md">
      <img :src="flag" alt="" class="h-full w-full object-cover aspect-video" />
    </div>
    <div class="flex flex-col gap-2 leading-none">
      <p>{{ name }}</p>
      <p class="text-sm leading-none text-accent">{{ capitals }}</p>
    </div>
  </div>
</template>
