import Vue from "vue";
import Router from "vue-router";
import HomeView from "@/views/HomeView";
import CharacterDetail from "@/views/CharacterDetail";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/detail/:id",
      name: "character-detail",
      component: CharacterDetail,
    },
  ],
});
