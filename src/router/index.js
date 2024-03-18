import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailProduct from '@/views/DetailProduct.vue'
import LoginView from '../views/LoginView.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      meta: {
        requiresAuth:true
      },

    },
    {
      path: '/product/:id',
      name: 'product',
      component: DetailProduct,
      meta: {
        requiresAuth: true
      },
      
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    }
  ]
});

//Navigation Guard
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Cek apakah ada token di localStorage
    const token = localStorage.getItem('token');
    //Kondisi tidak ada token
    if (!token) {
      next('/login');
    } else {
      //ada token di lanjut ke route seterusnya
      next();
    }
  } else {
    next(); 
  }
});
export default router
