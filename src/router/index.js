import { createRouter, createWebHistory } from "vue-router";
import Home from "/src/pages/Home.vue";
import NotFound from "/src/pages/PageNotFound.vue";
import searx from "/src/pages/searx.vue";

const routes = [
  
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/searx",
    name: "SovietSearch",
    component: searx,
  }, 
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,

  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
