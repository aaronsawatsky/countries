<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Quiz } from '@/types';
import { quizData } from '@/const/quizzes';
import QuizCard from '@/components/common/QuizCard.vue';
import ChipTag from '@/components/common/ChipTag.vue';

const tagFilters = ref<string[]>([]);

const handleAddTagFilter = (tag: string) => {
  const isTagExists = tagFilters.value.some((item) => item === tag);
  if (!isTagExists) tagFilters.value.push(tag);
};

const handleRemoveTagFilter = (tag: string) => {
  tagFilters.value = tagFilters.value.filter((item) => item !== tag);
};

// dummy data
const quizzes = ref<Quiz[]>([...quizData]);

const filteredQuizData = computed(() => {
  if (!tagFilters.value.length) return quizzes.value;

  return quizzes.value.filter((quiz) => {
    return tagFilters.value.some((tag) => quiz.tags.includes(tag));
  });
});
</script>

<template>
  <div class="font-sans">
    <h1 class="font-semibold text-rurikon-600 mb-6">Quizzes</h1>
    <div v-if="tagFilters.length" class="flex items-center gap-2 mb-4">
      <ChipTag
        v-for="(tag, index) in tagFilters"
        :key="index"
        :text="tag"
        :is-selected="true"
        @click:remove-tag="handleRemoveTagFilter(tag)"
      />
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
    >
      <QuizCard
        v-for="quiz in filteredQuizData"
        :key="quiz.quiz_id"
        :quizData="quiz"
        @click:add-tag-filter="handleAddTagFilter"
      />
    </div>
  </div>
</template>
