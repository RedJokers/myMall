// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vueLazyload from 'vue-lazyload'
import infiniteScroll from 'vue-infinite-scroll'
import './assets/css/base.css'
import './assets/css/checkout.css'
import './assets/css/login.css'
import './assets/css/product.css'

import {currency} from './util/currency.js'

Vue.use(vueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'static/loading-svg/loading-bars.svg'
})

Vue.use(infiniteScroll)

Vue.filter('currency', currency) // 定义全局过滤器

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
