import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/topic',
      name: 'topic',
      component: () => import('../views/TopicView.vue')
    },
    {
      path: '/session',
      name:'session',
      component: () => import('../views/SessionView.vue')
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: () => import('../views/FeedbackView.vue')
    }
  ]
})

export default router
