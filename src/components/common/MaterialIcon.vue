<script setup lang="ts">
interface Props {
  iconName: string;
  classes?: string[];
}

defineProps<Props>();
</script>

<template>
  <span class="material-symbols-rounded" :class="classes">
    {{ iconName }}
  </span>
</template>
