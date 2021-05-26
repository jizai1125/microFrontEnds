import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [{
  path: '/',
  redirect: '/home'
},{
  path: '/home',
  component: () => import('@/components/Home.vue')
},{
  path: '/about',
  component: () => import('@/components/About.vue')
}]

export default routes