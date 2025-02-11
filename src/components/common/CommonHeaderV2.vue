<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

const emits = defineEmits(['handleToggleSearch']);

const handleToggleSearch = () => {
  emits('handleToggleSearch');
};
</script>

<template>
  <nav ref="headerRef" class="flex justify-end pb-4 lg:pb-0 lg:pr-10">
    <ul class="flex text-sm gap-2 lg:flex-col lg:gap-6">
      <li
        class="italic text-rurikon-300 transition hover:text-rurikon-800"
        :class="{ 'text-rurikon-800': route.name === 'home' }"
      >
        <router-link to="/">Home</router-link>
      </li>
      <li
        class="italic text-rurikon-300 transition hover:text-rurikon-800"
        :class="{ 'text-rurikon-800': route.name === 'quizzes' }"
      >
        <router-link to="/">Quizzes</router-link>
      </li>
      <li
        class="italic text-rurikon-300 transition hover:text-rurikon-800"
        :class="{ 'text-rurikon-800': route.name === 'countries' }"
      >
        <router-link to="/all-countries">Countries</router-link>
      </li>
      <li
        class="italic text-rurikon-300 transition hover:text-rurikon-800 cursor-pointer"
        :class="{ 'text-rurikon-800': route.name === 'search' }"
        @click="handleToggleSearch"
      >
        Search
      </li>
      <li
        class="italic text-rurikon-300 transition hover:text-rurikon-800"
        :class="{ 'text-rurikon-800': route.name === 'about' }"
      >
        <router-link to="/">About</router-link>
      </li>
    </ul>
  </nav>
</template>
