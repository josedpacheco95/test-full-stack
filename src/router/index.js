import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Restaurant from '../views/Restaurant.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
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
