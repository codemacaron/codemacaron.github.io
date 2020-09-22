import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    project: null,
    resume: null,
    skillInventory: null,
  },
  getters: {
    getProject: state => {
      return state.project;
    },
    getResume: state => {
      return state.resume;
    },
    getSkillinventory: state => {
      return state.skillInventory;
    },
  },
  mutations: {
    setProject(state, prop) {
      state.project = prop;
    },
    setResume(state, prop) {
      state.resume = prop;
    },
    setSkillInventory(state, prop) {
      state.skillInventory = prop;
    },
  },
  actions: {
    setProject({ commit }, prop) {
      commit('setProject', prop);
    },
    setResume({ commit }, prop) {
      commit('setResume', prop);
    },
    setSkillInventory({ commit }, prop) {
      commit('setSkillInventory', prop);
    },
  }
})


