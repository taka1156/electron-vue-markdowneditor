import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'help',
      component: () =>
        import(/* webpackChunkName: "help" */ '../views/help/help.vue')
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
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
});
