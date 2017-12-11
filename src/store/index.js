import Vue from 'vue'
import Vuex from 'vuex'
import vuexI18n from 'vuex-i18n';

import * as actions from './actions'
import * as getters from './getters'
import messages from '@/i18n'
import document from './modules/document'
import login from './modules/login'

import createLogger from '@/utils/log/storeLogger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
    actions,
    getters,
    modules: {
        i18n: vuexI18n.store,
        document,
        login
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})

Vue.use(vuexI18n.plugin, store);

Vue.i18n.add('en', messages.en.message);
Vue.i18n.add('cn', messages.cn.message);

Vue.i18n.set('cn');


export default store;
