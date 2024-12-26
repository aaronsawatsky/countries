import { createRouter, createWebHistory } from 'vue-router';
import TopPage from '../views/TopPage.vue';
import CountryDetailsPage from '@/views/CountryDetailsPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TopPage,
    },
    {
      path: '/details/:name',
      name: 'details',
      component: CountryDetailsPage,
    },
  ],
});

export default router;
