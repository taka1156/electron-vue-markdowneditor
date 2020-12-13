import localStorageWrapper from '@/plugins/localstrage/index.js';
/**
 * !!! alertはコチラに書き込まない
 */

import { SETTING } from '@/constants/index.js';

const state = {
  userSetting: {},
  status: false
};

const getters = {
  userSetting(state) {
    return state.userSetting;
  },
  status(state) {
    return state.status;
  }
};

const mutations = {
  setUserStyle(state, style) {
    state.userSetting = style;
  },
  stateChange(state, status) {
    state.status = status;
  }
};

const actions = {
  updateSetting(context) {
    const SETTING = localStorageWrapper.updateSetting();
    if (SETTING != null) {
      context.commit('setUserStyle', SETTING);
      context.commit('stateChange', true);
    } else {
      context.commit('stateChange', false);
    }
  },
  saveSetting(context, setting) {
    localStorageWrapper.saveSetting(setting);
    context.commit('setUserStyle', setting);
  },
  initSetting(context) {
    localStorageWrapper.initSetting(SETTING);
    context.commit('setUserStyle', SETTING);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
