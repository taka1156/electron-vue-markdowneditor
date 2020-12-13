/**
 * !!! alertはコチラに書き込まない
 */

import { STYLES } from '@/constants/index.js';

const SETTING_KEY = 'setUserStyle';

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
    const SETTING_JSON = localStorage.getItem(SETTING_KEY);
    if (SETTING_JSON != null) {
      const userSetting = JSON.parse(SETTING_JSON);
      context.commit('setUserStyle', userSetting);
      context.commit('stateChange', true);
    } else {
      context.commit('stateChange', false);
    }
  },
  saveSetting(context, setting) {
    localStorage.setItem(SETTING_KEY, JSON.stringify(setting));
    context.commit('setUserStyle', setting);
  },
  initSetting(context) {
    localStorage.setItem(SETTING_KEY, JSON.stringify({ styles: STYLES }));
    context.commit('setUserStyle', STYLES);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
