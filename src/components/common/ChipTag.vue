<script setup lang="ts">
import MaterialIcon from './MaterialIcon.vue';
import { computed } from 'vue';

interface Props {
  text: string;
  isSelected?: boolean;
}

interface Emits {
  (e: 'click:removeTag'): void;
}

const props = defineProps<Props>();

const emits = defineEmits<Emits>();

const handleRemoveTag = () => emits('click:removeTag');

const capitalizedText = computed(() =>
  props.text ? props.text.charAt(0).toUpperCase() + props.text.slice(1) : '',
);
</script>

<template>
  <div
    class="rounded-full bg-rurikon-100 px-2 py-1 w-fit cursor-pointer hover:bg-rurikon-200 flex items-center gap-1"
    :class="{ 'hover:bg-rurikon-800 group': isSelected }"
  >
    <span
      class="text-xs group-hover:text-white text-rurikon-600 line-clamp-1"
      >{{ capitalizedText }}</span
    >
    <button
      v-if="isSelected"
      type="button"
      class="flex cursor-pointer"
      @click="handleRemoveTag"
    >
      <MaterialIcon
        icon-name="cancel"
        class="!text-sm !leading-none group-hover:text-white"
      />
    </button>
  </div>
</template>
