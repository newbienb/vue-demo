import Vue from 'vue';
import Layout from '@/component/layout';

Vue.use(VueRouter);

const home = r => require.ensure([], () => r(require('@/component/home')), 'home');
const document = r => require.ensure([], () => r(require('@/component/document')), 'document');
const login = r => require.ensure([], () => r(require('@/component/login')), 'login');

const routes =  [{
    path: '/',
    component: Layout, // 顶层路由，对应index.html
    children: [{
        path: '', // 地址为空时跳转home页面
        redirect: '/home'
    }, {
        path: '/home', // home主页
        component: home
    }, {
        path: '/document', // 文档编辑页面
        component: document
    }, {
        path: '/login', // 登陆
        component: login
    }]
}];

const router = new VueRouter({
    routes,
    mode: 'history',
    strict: true
});

export default router;
