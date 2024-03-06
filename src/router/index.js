import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailProduct from '@/views/DetailProduct.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/product/:id',
    name: 'detail-product',
    component: DetailProduct
  }

]

const router = new VueRouter({
  routes
})

export default router
