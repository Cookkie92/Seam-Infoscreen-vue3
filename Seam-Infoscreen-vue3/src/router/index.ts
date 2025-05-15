import { createRouter, createWebHistory } from 'vue-router'
import Screen from '../views/Screen.vue'


const routes = [
  {
    path: '/',
    name: 'Screen',
    component: Screen
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
