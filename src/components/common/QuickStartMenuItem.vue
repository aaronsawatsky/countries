<script setup lang="ts">
import MaterialIcon from './MaterialIcon.vue';

interface Props {
  title: string;
  subText?: string;
  icon: string;
  to?: string;
}

defineProps<Props>();
</script>

<template>
  <div
    class="w-full flex items-center gap-2 px-4 py-2 hover:bg-rurikon-50 transition rounded-lg cursor-pointer"
  >
    <div
      class="rounded-lg bg-accent-bg flex items-center justify-center w-fit flex-shrink-0 p-2"
    >
      <MaterialIcon :iconName="icon" />
    </div>
    <div class="w-full gap-1 flex flex-col">
      <p class="leading-none text-sm">{{ title }}</p>
      <p class="leading-none text-accent text-xs">{{ subText }}</p>
    </div>
  </div>
</template>
