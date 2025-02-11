import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Generate from "@/views/Generate.vue";
import Awakened from "@/views/Awakened.vue";
import TierList from "@/views/TierList.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/generate", component: Generate },
  { path: "/awakened", component: Awakened },
  { path: "/tierlist", component: TierList },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
