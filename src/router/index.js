import Vue from 'vue'
import VueRouter from 'vue-router'
import Money from "../views/Money"
import Labels from "../views/Labels"
import Statistics from "../views/Statistics"
import NotFound from "../views/NotFound"
import EditLabel from "@/components/EditLabel"

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
    path:'/labels/edit/:id',
    component: EditLabel
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
