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
      console.log("topic change");
      return (state.currentTopic = topic);
    },
  },
  actions: {},
  modules: {},
});
