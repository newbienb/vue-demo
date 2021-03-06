import Vue from 'vue';

import '@/validate'

import {sync} from 'vuex-router-sync'

// import '@/public/rem';
import '@/public/fastclick';

import router from '@/router';
import store from '@/store';

sync(store, router);

import objectAssign from 'object-assign'
import '@/vux'


// simple history management
const history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)
let isPush = false
let endTime = Date.now()
let methods = ['push', 'go', 'replace', 'forward', 'back']

document.addEventListener('touchend', () => {
    endTime = Date.now()
})
methods.forEach(key => {
    let method = router[key].bind(router)
    router[key] = function (...args) {
        isPush = true
        method.apply(null, args)
    }
})
router.beforeEach(function (to, from, next) {
    const isLogin = store.state.login.token //true用户已登录， false用户未登录
    let redirectFlag = false;
    if (!isLogin && to.path != '/login') {
        redirectFlag = true;
    }
    const toIndex = history.getItem(to.path)
    const fromIndex = history.getItem(from.path)
    if (!redirectFlag) {
        store.commit('updateLoadingStatus', {isLoading: true})
        if (toIndex) {
            if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
                store.commit('updateDirection', {direction: 'forward'})
            }
            else {
                // 判断是否是ios左滑返回
                if (!isPush && (Date.now() - endTime) < 377) {
                    store.commit('updateDirection', {direction: ''})
                }
                else {
                    store.commit('updateDirection', {direction: 'reverse'})
                }
            }
        }
        else {
            ++historyCount
            history.setItem('count', historyCount)
            to.path !== '/' && history.setItem(to.path, historyCount)
            store.commit('updateDirection', {direction: 'forward'})
        }
    }

    if (/\/http/.test(to.path)) {
        let url = to.path.split('http')[1]
        window.location.href = `http${url}`
    }
    else {
        if (!isLogin && to.path != '/login') {
            next({path: '/login?from=' + to.path});
        }
        next()
    }
})

router.afterEach(function (to) {
    isPush = false
    store.commit('updateLoadingStatus', {isLoading: false})
})



new Vue({
    el: '#app',
    router,
    store
});
