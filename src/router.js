import {
  createRouter as _createRouter,
  createMemoryHistory,
  createWebHistory,
} from 'vue-router'

const Home = () => import('@/pages/Home.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
]

export function createRouter() {
  return _createRouter({
    history: import.meta.env.SSR
      ? createMemoryHistory('/')
      : createWebHistory('/'),
    routes,
  })
}
