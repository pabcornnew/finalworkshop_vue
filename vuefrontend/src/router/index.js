import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

// workshop
import IndexShopView from '../views/shop/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/shop',
    name: 'shop',
    component: IndexShopView,
    children: [
      {
        path: '/',
        name: 'showproduct',
        component: () => import('../views/shop/showProducts.vue')
      },
      {
        path: '/cart',
        name: 'cart',
        component: () => import('../views/shop/cart.vue')
      },
      {
        path: '/detail/:id',
        name: 'thisproduct',
        component: () => import('../views/shop/productView.vue')
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
