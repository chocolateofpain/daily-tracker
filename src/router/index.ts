import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TrackerContent from "../components/TrackerContent.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/tracker",
    name: "tracker",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/TrackerView.vue"),
  },
  { path: "/tracker/:id", component: TrackerContent },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
