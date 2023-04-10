import { createRouter, createWebHistory } from "@ionic/vue-router"
import NativeDemo from "../views/NativeDemo.vue"

const routes = [
  {
    path: "/",
    name: "Demonstration",
    component: NativeDemo,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
