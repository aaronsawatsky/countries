<script setup lang="ts">
import CommonHeader from '../components/common/CommonHeader.vue';
</script>

<template>
  <CommonHeader />
  <div class="bg-background mt-[var(--header-height)] p-4 mx-auto">
    <RouterView />
  </div>
</template>
