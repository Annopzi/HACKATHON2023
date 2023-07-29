import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import MainDefault from '../layout/MainDefault.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainDefault,
    children:[
      {
        path:'',
        component: HomeView
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: MainDefault,
    children:[
      {
        path:'',
        component: AboutView
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
