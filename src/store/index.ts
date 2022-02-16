import { createStore } from "vuex";

export default createStore({
  state: {
    currentTopic: "Workout",
  },
  getters: {
    getCurrentTopic: (state) => state.currentTopic,
  },
  mutations: {
    changeCurrentTopic(state, topic) {
      return (state.currentTopic = topic);
    },
  },
  actions: {},
  modules: {},
});
