import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'help',
    component: () => import(/* webpackChunkName: "help" */ '../views/help/help.vue')
  },
  {
    path: '/editor',
    name: 'editor',
    component: () =>
      import(/* webpackChunkName: "editor" */ '../views/editor/editor.vue')
  },
  {
    path: '/file',
    name: 'file',
    component: () =>
      import(/* webpackChunkName: "editor" */ '../views/file/file.vue')
  },
  {
    path: '/setting',
    name: 'setting',
    component: () =>
      import(/* webpackChunkName: "editor" */ '../views/setting/setting.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
