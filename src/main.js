import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import VueRouter from 'vue-router'


import './public/rem'

Vue.use(Vuex)
Vue.use(VueRouter)

new Vue({
  el: '#app',
  render: h => h(App)
})
