import { createStore } from "vuex";

interface Activity {
  id: string;
  date: Date;
  name: string;
}

export default createStore({
  state: {
    currentTopic: "Workout",
    activityLog: Array<Activity>(),
  },
  getters: {
    getActivityLog: (state) => state.activityLog,
    getCurrentTopic: (state) => state.currentTopic,
  },
  mutations: {
    logActivity(state, activity) {
      return (state.activityLog = [state.activityLog, ...activity]);
    },
    changeCurrentTopic(state, topic) {
      return (state.currentTopic = topic);
    },
  },
  actions: {
    async logActivity({ commit }, data) {
      const activityTime = Date.now();
      // PUT to backend
      console.log(data, activityTime);
      commit("logActivity");
    },
  },
  modules: {},
});
