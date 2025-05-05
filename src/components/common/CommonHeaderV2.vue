<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const headerRef = ref<HTMLElement>();

const emits = defineEmits(['handleToggleSearch']);

const handleToggleSearch = () => {
  emits('handleToggleSearch');
};

const setHeaderDimensions = () => {
  const height = headerRef.value?.offsetHeight;
  const width = headerRef.value?.offsetWidth;
  document.documentElement.style.setProperty('--headerHeight', `${height}px`);
  document.documentElement.style.setProperty('--headerWidth', `${width}px`);
};

onMounted(() => {
  setHeaderDimensions();
  window.addEventListener('resize', setHeaderDimensions);
});

onUnmounted(() => {
  window.addEventListener('resize', setHeaderDimensions);
});
</script>

<template>
  <nav
    ref="headerRef"
    class="fixed bg-white w-full lg:w-fit lg:min-h-screen flex px-4 lg:px-0 z-10"
  >
    <div
      class="flex w-full border-b border-border-rurikon lg:border-b-0 lg:border-r lg:w-fit py-4 lg:py-0 lg:my-10 lg:px-10"
    >
      <ul class="flex text-sm gap-2 lg:flex-col lg:gap-6 ml-auto">
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
          <router-link to="/quizzes">Quizzes</router-link>
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
          <router-link to="/about">About</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
