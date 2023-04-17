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
      path: '/cv',
      name: 'cv',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CV.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    },
    {
      path: '/galery',
      name: 'galery',
      component: () => import('../views/Galery.vue')
    },
    {
      path: '/sosmed',
      name: 'sosmed',
      component: () => import('../views/Sosmed.vue')
    },
    {
      path: '/visitors',
      name: 'visitors',
      component: () => import('../views/Visitors.vue')
    }
  ]
})

export default router
