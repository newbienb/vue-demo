import Vue from 'vue';
import Vuex from 'vuex';
import App from '@/App';

import VueRouter from 'vue-router';

import '@/public/rem';
import '@/public/fastclick';

import routes from '@/router';

Vue.use(Vuex);
Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    strict: true
})

new Vue({
    router
}).$mount('#app');
