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
  <div class="text-rurikon-600">
    <p class="font-semibold mb-6">
      Countries Starting with '{{ searchedLetter }}'
    </p>
    <div
      class="grid grid-cols-1 md:divide-none divide-y divide-rurikon-base md:grid-cols-2 gap-6 items-start"
    >
      <div
        v-for="(country, index) in getCountryByLetter"
        :key="index"
        class="p-4 grid grid-cols-2 gap-6 hover:cursor-pointer lg:rounded-lg lg:hover:bg-rurikon-50 transition"
        @click="handleGoToDetails(country.name.common)"
      >
        <img
          :src="country.flags.png"
          alt=""
          class="h-full w-full object-contain"
        />
        <div class="flex flex-col gap-2">
          <p class="font-bold leading-none">
            {{ country.name.common }}
          </p>
          <div class="flex flex-col gap-2 mt-4">
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
              <MaterialIcon icon-name="language" class="text-accent" />
              <p class="text-accent">
                {{
                  country.languages
                    ? Object.values(country.languages).join(', ')
                    : 'Unknown'
                }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
