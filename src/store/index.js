import Vue from 'vue';
import Vuex from 'vuex';
import edit from './modules/edit.js';
import file from './modules/file.js';
import setting from './modules/setting.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { edit: edit, file: file, setting }
});
