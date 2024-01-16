import { createRouter , createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter( {
  history: createWebHistory( import.meta.env.BASE_URL ) ,
  routes: [
    {
      path: '/' ,
      name: 'home' ,
      component: HomeView,
    } ,
    {
      path: '/games' ,
      name: 'Games' ,
      component: () => import('../views/Games.vue'),
    } ,
    {
      path: '/goHome' ,
      name: 'GoHome' ,
      component: () => import('../views/GoHome.vue'),
    },
  ],
} );

export default router;
