import App from '@/App';

const home = r => require.ensure([], () => r(require('@/page/home/home')), 'home');

export default [{
    path: '/',
    component: App, // 顶层路由，对应index.html
    children: [{
        path: '', // 地址为空时跳转home页面
        redirect: '/home'
    }, {
        path: '/home', // home主页
        component: home
    }]
}];
