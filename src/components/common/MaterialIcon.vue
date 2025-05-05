<script setup lang="ts">
interface Props {
  iconName: string;
  classes?: string[];
}

defineProps<Props>();
</script>

<template>
  <span class="material-symbols-rounded !leading-none" :class="classes">
    {{ iconName }}
  </span>
</template>
