<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const alphabet = computed(() =>
  Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)),
);

const router = useRouter();

const handleGoToAlphabetSearch = (letter: string) => {
  router.push(`/countries/${letter.toLowerCase()}`);
};
</script>

<template>
  <div class="flex flex-wrap gap-4 items-center justify-center">
    <button
      v-for="(letter, index) in alphabet"
      :key="index"
      type="button"
      class="rounded-lg size-12 flex items-center justify-center hover:bg-rurikon-50 transition"
      @click="handleGoToAlphabetSearch(letter)"
    >
      <p class="underline underline-offset-2">
        {{ letter }}
      </p>
    </button>
  </div>
</template>
