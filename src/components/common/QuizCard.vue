<script setup lang="ts">
import type { Quiz } from '@/types';
import ChipTag from './ChipTag.vue';
import MaterialIcon from './MaterialIcon.vue';

interface Props {
  quizData: Quiz;
  filteredTags?: string[];
}

interface Emits {
  (e: 'click:addTagFilter', val: string): void;
  (e: 'click:removeTagFilter', val: string): void;
}

const props = defineProps<Props>();

const handleCheckRelatedTag = (tag: string) => {
  return props.filteredTags?.includes(tag);
};

const emits = defineEmits<Emits>();

const handleAddTagFilter = (tag: string) => {
  emits('click:addTagFilter', tag);
};
</script>

<template>
  <div class="flex flex-col gap-2 leading-none">
    <div class="size-full rounded overflow-hidden relative cursor-pointer">
      <img :src="quizData.thumbnail" alt="" class="size-full" />
    </div>
    <div class="flex flex-col gap-2">
      <p
        class="font-semibold text-rurikon-600 hover:underline cursor-pointer w-fit"
      >
        {{ quizData.title }}
      </p>
      <p class="line-clamp-2 text-sm text-rurikon-500">
        {{ quizData.description }}
      </p>
      <div class="text-xs flex items-center gap-1 text-rurikon-500">
        <span>{{ quizData.view_count }} views</span>
        <span>・</span>
        <div class="flex items-center gap-1">
          <span>{{ quizData.number_of_questions }} questions</span>
        </div>
        <span>・</span>
        <div class="flex items-center gap-1">
          <MaterialIcon icon-name="star" :is-fill="true" class="!text-sm" />
          <span>{{ quizData.average_rating }}</span>
        </div>
      </div>
      <div class="flex items-center gap-1">
        <ChipTag
          v-for="(tag, index) in quizData.tags"
          :key="index"
          :text="tag"
          :is-related="handleCheckRelatedTag(tag)"
          @click="handleAddTagFilter(tag)"
        />
      </div>
    </div>
  </div>
</template>
