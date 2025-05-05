<script setup lang="ts">
import MaterialIcon from '@/components/common/MaterialIcon.vue';
import { useCountries } from '@/composables/useCountries';
import { onMounted, ref } from 'vue';

interface Props {
  isShow: boolean;
}

interface Emits {
  (e: 'click:close'): void;
}

const emits = defineEmits<Emits>();

defineProps<Props>();

const { fetchCountries, searchResults } = useCountries();

const searchValue = defineModel<string>();

const isShowSearchResults = ref<boolean>(false);

const handleClearSearchValue = () => {
  searchValue.value = '';
};

const close = () => {
  emits('click:close');
  toggleSearchResults();
  handleClearSearchValue();
};

const toggleSearchResults = () => {
  isShowSearchResults.value = !isShowSearchResults.value;
};

onMounted(() => {
  fetchCountries();
});
</script>

<template>
  <div
    class="bg-black/10 backdrop-blur top-0 left-0 h-full w-full fixed transition-opacity duration-300 ease-in-out z-10"
    :class="isShow ? 'opacity-100' : 'opacity-0 pointer-events-none'"
    @click.self="close"
  >
    <div class="p-4 bg-rurikon-50 drop-shadow">
      <div
        class="max-w-[40rem] w-full gap-2 flex items-center mx-auto relative"
      >
        <div class="relative w-full">
          <MaterialIcon
            icon-name="search"
            class="absolute text-rurikon-600 top-4 left-4"
          />
          <input
            v-model="searchValue"
            type="text"
            class="w-full py-4 pr-4 pl-12 border rounded-full border-rurikon-300 outline-none text-rurikon-600"
            placeholder="Search"
            @focusin="toggleSearchResults"
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
        <!-- <button
          class="flex italic text-rurikon-300 hover:text-rurikon-800 transition underline"
          @click="close"
        >
          close
        </button> -->
        <div
          v-if="isShowSearchResults"
          class="absolute top-16 bg-white w-full flex flex-col max-h-[35.5rem] rounded-lg divide-y divide-border-rurikon overflow-scroll shadow-xl"
        >
          <router-link
            v-for="country in searchResults"
            :key="country"
            :to="`/details/${country}`"
            class="p-4 w-full text-rurikon-600 text-left hover:bg-rurikon-50"
          >
            {{ country }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
