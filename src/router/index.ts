import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Coesio from "../components/work/coesio.vue";
import Blackwood from "../components/work/blackwood.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/coesio",
      name: "coesio",
      component: Coesio,
    }
    ,{
      path: "/blackwood",
      name: "blackwood",
      component: Blackwood,
    }
  ],
});

export default router;
