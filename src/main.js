// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router/index.js'
Vue.config.productionTip = false
// 0.引入vue-router和各个组件
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import goods from './components/tab/goods/goods.vue'
import ratings from './components/tab//ratings/ratings.vue'
import sellers from './components/tab/sellers/sellers.vue'
<<<<<<< HEAD
=======

>>>>>>> 201703241800
// 1.使用路由
Vue.use(VueRouter)
Vue.use(VueResource)
// 2.定义组件的路由路径
const routes = [
  {
    path: '/goods',
    name: 'goods',
    component: goods
  },
  {
    path: '/ratings',
    name: 'ratings',
    component: ratings
  },
  {
    path: '/sellers',
    name: 'sellers',
    component: sellers
  }
]
// 3.实例化路由
const router = new VueRouter({
  linkActiveClass: 'active',
  routes
})
// 4.
new Vue({
  router
}).$mount('#app')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
