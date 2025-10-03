import BleachViwes from '@/Views/BleachViwes.vue';
import HomeViews from '@/Views/HomeViews.vue';
import NarutoViews from '@/Views/NarutoViews.vue';
import OnePieceViews from '@/Views/OnePieceViews.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component : HomeViews,
  },
  {
    path: '/naruto',
    name: 'Naruto',
    component: NarutoViews,
  },
  {
    path: '/onepiece',
    name: 'OnePiece',
    component: OnePieceViews,
  },
  {
    path: '/bleach',
    name: 'Bleach',
    component: BleachViwes,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;