<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { useCountries } from '@/composables/useCountries';
import { onMounted, computed, ref } from 'vue';
import MaterialIcon from '@/components/common/MaterialIcon.vue';

const { fetchCountries, countries } = useCountries();

const route = useRoute();
const router = useRouter();
const searchedLetter = ref<string>(
  Array.isArray(route.params.letter)
    ? route.params.letter[0].toUpperCase()
    : route.params.letter.toUpperCase(),
);

const getCountryByLetter = computed(() => {
  return countries.value.filter((country) =>
    country.name.common.startsWith(searchedLetter.value),
  );
});

const handleGoToDetails = (name: string) => {
  router.push(`/details/${name}`);
};

onMounted(async () => {
  await fetchCountries();
});
</script>

<template>
  <div class="p-4 lg:p-10">
    <p class="font-bold text-4xl mb-10">
      Countries Starting with '{{ searchedLetter }}'
    </p>
    <div class="grid lg:grid-cols-2 gap-6 items-start">
      <div
        v-for="(country, index) in getCountryByLetter"
        :key="index"
        class="p-4 grid grid-cols-2 gap-6 hover:cursor-pointer hover:bg-gray/10 transition rounded"
        @click="handleGoToDetails(country.name.common)"
      >
        <img
          :src="country.flags.png"
          alt=""
          class="h-full w-full object-contain"
        />
        <div class="flex flex-col gap-2">
          <p class="font-bold text-3xl leading-none">
            {{ country.name.common }}
          </p>
          <div class="flex flex-col gap-2 mt-4 text-2xl">
            <div class="flex items-center gap-2">
              <MaterialIcon icon-name="things_to_do" class="text-accent" />
              <p class="text-accent">
                {{ country.capital ? country.capital.join(', ') : 'Unknown' }}
              </p>
            </div>
            <div class="flex items-center gap-2">
              <MaterialIcon icon-name="location_on" class="text-accent" />
              <p class="text-accent">
                {{
                  country.continents ? country.continents.join(', ') : 'Unknown'
                }}
              </p>
            </div>
            <div class="flex items-start gap-2">
              <MaterialIcon icon-name="language" class="text-accent mt-1" />
              <p class="text-accent">
                {{ Object.values(country.languages).join(', ') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
