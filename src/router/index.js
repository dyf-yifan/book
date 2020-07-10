import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import My from '../views/My.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'My',
    component: My
  }
]

const router = new VueRouter({
  routes
})

export default router
