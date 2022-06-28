import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserView from '../views/UserView.vue'
import CartView from '../views/CartView.vue'
import SubmitView from '../views/SubmitView.vue'
import SubmitArea from '@/components/home/submitArea/submitArea.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: HomeView },
  { path: '/user', component: UserView },
  { path: '/cart', component: CartView },
  { path: '/submit', component: SubmitView },
  { path: '/submitarea', component: SubmitArea }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
