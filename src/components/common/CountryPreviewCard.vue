<script setup lang="ts">
import { ref } from 'vue';
interface Props {
  name: string;
  flag: string;
  capitals: string[];
}

defineProps<Props>();

const isMouseOver = ref(false);

const handleMouseOver = () => {
  setTimeout(() => {
    isMouseOver.value = true;
  }, 300);
};

const handleMouseLeave = () => {
  setTimeout(() => {
    isMouseOver.value = false;
  }, 300);
};
</script>

<template>
  <div class="relative w-fit">
    <router-link
      :to="`/details/${name}`"
      class="underline text-rurikon-300 hover:text-rurikon-800 transition w-fit"
      @mouseover="handleMouseOver"
      @mouseleave="handleMouseLeave"
    >
      {{ name }}
    </router-link>
    <div
      class="absolute right-0 translate-x-[calc(100%+1rem)] z-10 rounded-lg w-sm rounded overflow-hidden drop-shadow-lg transition-all duration-500 ease-in-out"
      :class="
        isMouseOver
          ? 'opacity-100 -translate-y-1/2'
          : 'opacity-0 translate-y-0 pointer-events-none'
      "
    >
      <div class="aspect-video">
        <img :src="flag" alt="flag" class="object-cover h-full w-full" />
      </div>
      <div class="flex flex-col gap-2 leading-none bg-white p-2">
        <p class="text-rurikon-600">{{ name }}</p>
        <p class="text-sm leading-none text-rurikon-300">
          {{ capitals?.join(', ') }}
        </p>
      </div>
    </div>
  </div>
</template>
