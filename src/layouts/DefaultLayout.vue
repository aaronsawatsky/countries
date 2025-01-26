<script setup lang="ts">
import CommonHeader from '../components/common/CommonHeader.vue';
</script>

<template>
  <div class="bg-background lg:p-10 p-4 mx-auto min-h-screen">
    <div class="bg-white max-w-[80rem] mx-auto rounded-xl drop-shadow-xl">
      <CommonHeader />
      <RouterView />
    </div>
  </div>
</template>
