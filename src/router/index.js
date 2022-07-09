import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserView from '../views/UserView.vue'
import CartView from '../views/CartView.vue'
import SubmitView from '../views/SubmitView.vue'
import SubmitArea from '@/components/home/submitArea/submitArea.vue'
import redEvnelope from '@/components/user/RedEnvelope/redEvnelope.vue'
// 定位城市模块
import PositionCity from '@/components/home/submitArea/positionCity.vue'
// 商店详情页
import shopInterface from '@/components/home/shopInterface/shopInterface.vue'

// import { createRouter, createWebHashHistory } from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: HomeView },
  { path: '/user', component: UserView },
  { path: '/cart', component: CartView },
  { path: '/submit', component: SubmitView },
  { path: '/submitarea', component: SubmitArea },
  { path: '/positioncity', component: PositionCity },
  { path: '/shopinterface', component: shopInterface },
  { path: '/redEnvelope', component: redEvnelope }
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
