<script setup lang="ts">
interface Props {
  iconName: string;
  classes?: string[];
}

defineProps<Props>();
</script>

<template>
  <span class="material-symbols-outlined" :class="classes">
    {{ iconName }}
  </span>
</template>
