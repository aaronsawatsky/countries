import { createRouter, createWebHistory } from 'vue-router';
import TopPage from '../views/TopPage.vue';
import CountryDetailsPage from '@/views/CountryDetailsPage.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import SearchResultsPage from '@/views/SearchResultsPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TopPage,
      meta: {
        layout: DefaultLayout,
      },
    },
    {
      path: '/details/:name',
      name: 'details',
      component: CountryDetailsPage,
      meta: {
        layout: DefaultLayout,
      },
    },
    {
      path: '/search/',
      name: 'search',
      component: SearchResultsPage,
      meta: {
        layout: DefaultLayout,
      },
    },
  ],
});

export default router;
