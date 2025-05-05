<script setup lang="ts">
import type { Quiz } from '@/types';
import ChipTag from './ChipTag.vue';

interface Props {
  quizData: Quiz;
}

interface Emits {
  (e: 'click:addTagFilter', val: string): void;
  (e: 'click:removeTagFilter', val: string): void;
}

defineProps<Props>();

const emits = defineEmits<Emits>();

const handleAddTagFilter = (tag: string) => {
  emits('click:addTagFilter', tag);
};
</script>

<template>
  <div class="flex flex-col gap-1 leading-none">
    <div class="size-full rounded overflow-hidden relative">
      <img :src="quizData.thumbnail" alt="" class="size-full" />
      <div
        class="absolute bottom-0 left-0 w-full bg-black/80 p-2 text-white text-xs leading-none flex items-center justify-between"
      >
        <span class="text-xs leading-none">{{ quizData.category }}</span>
        <div class="flex items-center gap-1">
          <span>{{ quizData.view_count }} views</span>
          <span>・</span>
          <div class="flex items-center gap-1">
            <span>{{ quizData.number_of_questions }} questions</span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-2">
      <p class="font-semibold text-rurikon-600">{{ quizData.title }}</p>
      <p class="line-clamp-1 text-sm">
        {{ quizData.description }}
      </p>
      <div class="flex items-center gap-1">
        <ChipTag
          v-for="(tag, index) in quizData.tags"
          :key="index"
          :text="tag"
          @click="handleAddTagFilter(tag)"
        />
      </div>
    </div>
  </div>
</template>
