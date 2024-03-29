import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Abilities from "../views/Abilities.vue";
import About from "../views/About.vue";
import YesOrNo from "@/views/YesOrNo.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/abilities",
      name: "Abilities",
      component: Abilities,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "/yesorno",
      name: "Yes or no",
      component: YesOrNo,
    },
  ],
});

export default router;
