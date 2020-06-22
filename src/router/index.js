import Vue from 'vue'
import VueRouter from 'vue-router'
import Money from "../views/Money"
import Labels from "../views/Labels"
import Statistics from "../views/Statistics"
import NotFound from "../views/NotFound"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/money'
  },
  {
    path: '/money',
    component: Money
  },
  {
    path:'/labels',
    component:Labels
  },
  {
    path:'/statistics',
    component:Statistics
  },
  {
    path:'*',
    component:NotFound
  }

]

const router = new VueRouter({
  routes
})

export default router
