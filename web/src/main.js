import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import './assets/iconfont/iconfont.css'
import './assets/scss/reset.scss'
import router from './router'
import axios from 'axios'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)

import Card from './components/card.vue'
Vue.component('m-card',Card)

import ListCard from './components/ListCard.vue'
Vue.component('m-list-card',ListCard)

Vue.prototype.$http = axios.create({
  baseURL:process.env.Vue_APP_API_URL || '/web/api',
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
