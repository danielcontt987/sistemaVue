import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import VLogin from '../components/Login/VLogin';
import VDashboard from '../views/Panel/VDashboard';
import VCategory from '../views/Category/VCategory';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: VLogin
  },
  {
    path: '/categoria',
    name: 'category',
    component: VCategory
  },
  {
    path: '/inicio',
    name: 'inicio',
    component: VDashboard
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
