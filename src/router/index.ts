import { createRouter, createWebHistory } from 'vue-router';
import TopPage from '../views/TopPage.vue';
import CountryDetailsPage from '@/views/CountryDetailsPage.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import SearchResultsPage from '@/views/SearchResultsPage.vue';
import AlphabetSearchPage from '@/views/AlphabetSearchPage.vue';
import AllCountries from '@/views/AllCountries.vue';
import AboutPage from '@/views/AboutPage.vue';
import QuizzesPage from '@/views/QuizzesPage.vue';

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
    {
      path: '/countries/:letter',
      name: 'search',
      component: AlphabetSearchPage,
      meta: {
        layout: DefaultLayout,
      },
    },
    {
      path: '/all-countries',
      name: 'countries',
      component: AllCountries,
      meta: {
        layout: DefaultLayout,
      },
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
      meta: {
        layout: DefaultLayout,
      },
    },
    {
      path: '/quizzes',
      name: 'quizzes',
      component: QuizzesPage,
      meta: {
        layout: DefaultLayout,
      },
    },
  ],
});

export default router;
