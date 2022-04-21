import { RouteNameEnum } from '@/const/router.const'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: RouteNameEnum.Index,
      component: HomeView
    },
    {
      path: '/publish',
      name: RouteNameEnum.Publish,
      component: HomeView
    }
  ]
})

export default router
