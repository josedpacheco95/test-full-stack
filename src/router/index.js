import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Restaurant from '../views/Restaurant.vue';

Vue.use(VueRouter);

const routes = [
  /*
    Esta vista posee landing page con la lista
    de restaurantes
  */
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  /*
    Esta vista es para la informacion detallada de cada
    restaurante
  */
  {
    path: '/restaurant/:id',
    name: 'Restaurant',
    component: Restaurant,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
