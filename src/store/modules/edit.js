const state = {
  inputText: ''
};

const getters = {
  inputText(state) {
    return state.inputText;
  }
};

const mutations = {
  setInputText(state, inputText) {
    state.inputText = inputText;
  }
};

const actions = {
  initText(context) {
    context.commit('setInputText', '');
  },
  setText(context, text) {
    context.commit('setInputText', text);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
