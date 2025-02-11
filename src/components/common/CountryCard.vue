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
  <div
    class="overflow-hidden cursor-pointer hover:bg-rurikon-50 p-4 transition rounded-lg"
    @click="handleGoToCountryDetails"
  >
    <div class="overflow-hidden mb-2">
      <img :src="flag" alt="" class="h-full w-full object-cover aspect-video" />
    </div>
    <div class="flex flex-col gap-2 leading-none">
      <p class="text-rurikon-600">{{ name }}</p>
      <p class="text-sm leading-none text-rurikon-300">{{ capitals }}</p>
    </div>
  </div>
</template>
