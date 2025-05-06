<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  iconName: string;
  classes?: string[];
  isFill?: boolean;
}

const props = defineProps<Props>();

const iconStyle = computed(() => {
  return {
    fontVariationSettings: `'FILL' ${props.isFill ? 1 : 0}, 'wght' 400, 'GRAD' 0, 'opsz' 24`,
  };
});
</script>

<template>
  <span
    class="material-symbols-rounded !leading-none"
    :class="classes"
    :style="iconStyle"
  >
    {{ iconName }}
  </span>
</template>
