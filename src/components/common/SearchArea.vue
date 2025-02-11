<script setup lang="ts">
import { ref } from 'vue';
import MaterialIcon from '@/components/common/MaterialIcon.vue';

interface Props {
  isShow: boolean;
}

interface Emits {
  (e: 'click:close'): void;
}

const emits = defineEmits<Emits>();

defineProps<Props>();

const searchValue = defineModel<string>('');

const handleClearSearchValue = () => {
  searchValue.value = '';
};

const close = () => {
    emits('click:close');
    handleClearSearchValue();
};
</script>

<template>
  <div
    class="bg-black/80 top-0 left-0 h-full w-full fixed transition-opacity duration-300 ease-in-out"
    :class="isShow ? 'opacity-100' : 'opacity-0 pointer-events-none'"
    @click.self="close"
  >
    <div class="p-4 bg-white">
      <div class="max-w-[80rem] w-full gap-2 flex items-center mx-auto">
        <div class="relative w-full">
          <MaterialIcon
            icon-name="search"
            class="absolute text-rurikon-600 top-4 left-4"
          />
          <input
            v-model="searchValue"
            type="text"
            class="w-full py-4 pr-4 pl-12 border border-rurikon-300 outline-none text-rurikon-600"
            placeholder="Search"
          />
          <button
            v-if="searchValue"
            class="italic text-rurikon-300 hover:text-rurikon-800 transition absolute right-4 top-4"
            @click="handleClearSearchValue"
          >
            <MaterialIcon
              icon-name="close"
              class="text-rurikon-300 transition hover:text-rurikon-800"
            />
          </button>
        </div>
        <button
          class="flex italic text-rurikon-300 hover:text-rurikon-800 transition underline"
          @click="close"
        >
          close
        </button>
      </div>
    </div>
  </div>
</template>
