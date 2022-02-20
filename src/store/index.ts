import { createStore } from "vuex";
import { topicList } from "./../dummyData";

interface Activity {
  id: string;
  date: Date;
  name: string;
}

export default createStore({
  state: {
    currentTopic: "Workout",
    topicList,
    activityLog: Array<Activity>(),
  },
  getters: {
    getActivityLog: (state) => state.activityLog,
    getCurrentTopic: (state) => state.currentTopic,
    getTopicList: (state) => state.topicList,
  },
  mutations: {
    logActivity(state, activity) {
      console.log(state);
      console.log(activity);
      return (state.activityLog = [state.activityLog, ...activity]);
    },
    changeCurrentTopic(state, topic) {
      return (state.currentTopic = topic);
    },
  },
  actions: {
    async logActivity({ commit }, data) {
      console.log(data);
      const activityTime = Date.now();
      // PUT to backend
      console.log(data, activityTime);
      commit("logActivity");
    },
  },
  modules: {},
});
