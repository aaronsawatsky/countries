import { ref } from 'vue';

export function useHeaderHeight() {
  const headerHeight = ref<number>(0);

  const setHeaderHeight = (height: number) => {
    headerHeight.value = height;
  };
  return {
    headerHeight,
    setHeaderHeight,
  };
}
