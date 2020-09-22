import Vue from "vue";
import Router from "vue-router";
// import store from "../store";

import nopage from "../views/nopage.vue";
import project from "../views/project";
import resume from "../views/resume";
import skillInventory from "../views/skillInventory";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: '*',
      component: nopage
    },
    {
      path: "/",
      name: "project",
      component: project,
    },
    {
      path: "/resume",
      name: "resume",
      component: resume,
    },
    {
      path: "/skillInventory",
      name: "skillInventory",
      component: skillInventory,
    },
  ],
});
export default router;
