import Vue from 'vue';
import {sync} from 'vuex-router-sync'

// import '@/public/rem';
import '@/public/fastclick';

import router from '@/router';
import store from '@/store';
sync(store, router);

import '@/validate';

new Vue({
    el: '#app',
    router,
    store
});
