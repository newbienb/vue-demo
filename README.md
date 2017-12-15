# vue-demo
## How to build a project
### A simple git process
1. `git clone https://github.com/newbienb/vue-demo.git`
2. add public key in github setting ->deploy key -> add
3. add Collaborators in github setting ->Collaborators -> add
4. copy invite link
5. modify you codes
6. in root fold, press `git add .`
7. `git commit -m "comments"`
8. `git push`
9. enter username and password for submit
10. Done

### 技术栈
1. Vue
`https://cn.vuejs.org/`
2. Vue-Router
`https://router.vuejs.org/zh-cn/index.html`
3. Vuex
`https://vuex.vuejs.org/zh-cn/`
4. vuex-router-sync

```js
store.state.route.path   // current path (string)
store.state.route.params // current params (object)
store.state.route.query  // current query (object)
```
5. vue-resource
[Http请求](https://www.cnblogs.com/axl234/p/5899137.html)

6. 使用vee-validate对于字段进行校验
+ 相关文档
    * [官网](http://vee-validate.logaretm.com/)
    * [example](https://jsfiddle.net/gongzza/m67d8f4x/2/)

7. 使用ui框架light7(Deprecated/用Vux取代light7)
https://github.com/lihongxun945/light7/blob/master/docs/demos/form/layout.html

8. 使用vue-i18n作为国际化(Deprecated)
https://unpkg.com/vue-i18n@7.3.2/dist/vue-i18n.js
https://www.2cto.com/kf/201711/700517.html

9. 使用vuex-i18n
http://blog.csdn.net/zjw0742/article/details/73477740

10. vux
[官方地址](https://vux.li/#/)
+ 步骤
    * npm install vux --save
    * 修改webpack.config.js

### Quick Start Vue
1. 全局安装vue客户端`npm install vue-cli -g`
2. 全局安装webpack `npm install webpack -g`
3. 使用vue-cli新建工程`vue init webpack-simple project-name`

>> note: webpack-simple 是模板名称 也可以填写诸如webpack,simple等
>> project-name 这里输入vue-demo

4. `cd vue-demo`
5. 安装依赖包 `npm install`
6. 启动测试`npm run dev` 会自动弹出vue首页
7. 发布命令`npm run build`

### 项目文件布局(Deprecated TODO update folder)

```
├── LICENSE                             // license申明文件
├── README.md                           // 项目说明文件
├── favicon.ico                         // 网站logo图标
├── index.html                          // 入口静态页面
├── node_modules                        // 所有本地依赖包安装目录
├── package-lock.json                   // 无视
├── package.json                        // 项目依赖申明
├── src                                 // 源代码目录
│   ├── App.vue                         // 初始化加载的页面组件文件
│   ├── components                      // 公共组件目录
│   ├── page                            // 所有页面入口目录
│   ├── assets                          // 所有静态资源目录
│   │   └── logo.png                    // 比如图片放在这下面
│   ├── main.js                         // 初始化加载js文件
│   └── public                          // 公共加载js文件及第三方依赖js文件目录
│   │   ├── rem.js                      // 字体自适应
│   │   ├── fastclick.js                // 防止用户快速重复点击
└── webpack.config.js                   // 项目打包配置文件
```

### 关于IDE
##### sublime
+ 开启vue语法
    - `https://pan.baidu.com/s/1nv7C4B3` 密码: `w5zs`
    - browse package->copy paste
    - set syntax vue
+ vue格式化
    * HTML-CSS-JS Prettify
    * 在”allowed_file_extensions”: [“htm”, “html”, “xhtml”, “shtml”, “xml”, “svg”,”vue”] 
    * Ctrl+Shift+H

### Q&A
##### 如何解决vue加载使用cdn问题

1. 在项目开始前增加外部脚本引用
   
```html
<script src="https://unpkg.com/vue@2.4.4/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router@3.0.1/dist/vue-router.js"></script>
<script src="https://unpkg.com/vuex@3.0.1/dist/vuex.js"></script>
```
2. 在webpack中增加external引用

```js
resolve: {
    alias: {
        // 'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
},
externals: {
    // 指定别名
    "vue$": 'window.Vue',
}
```
##### 如何生成项目视图
- 安装brew
`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
- 安装tree
`brew install tree`
- 使用
`cd project-name`
`tree -L 2`

##### TIPS
+ Vue-Router
    * router里面写完路由配置后,children内容需要在父节点下<router-view></router-view>下,不然children的vue无法渲染
    * @别名是在webpack config文件中配置来替代./或者xxx路径，一般指向根目录
    * externals配置的时候vue$:'Vue'的时候需要用render才能渲染，而vue:'Vue'则不需要
    * externals配置的时候比如'vue-router': 'VueRouter',vue-router对应的是import VueRouter from vue-router
    * const home = r => require.ensure([], () => r(require('@/page/home/home')), 'home'); 这就是懒加载/按需加载,最后的home是chunkName

##### Some Ref
[vue-router之keep-alive](http://www.jianshu.com/p/0b0222954483)

### 更新记录
- [x] 初始化vue并增加vue-route,vuex
- [x] 增加cdn配置
- [x] 增加favicon.ico
- [x] 增加public/rem.js(字体自适应)
- [x] index.html中增加viewport等属性不允许缩放和旋转
- [x] 增加fastclick引用，防止重复连续点击产生的网络请求
- [x] 增加@别名取代根路径
- [x] 编写路由转发+使用懒加载方式
- [x] 增加vuex并模块化
- [x] 迁移App.vue放入page下并改名为Layout
- [x] Layout及router中增加keepAlive属性判断来实现缓存页面
- [x] 安装chrome插件 vue.js devTools(注：devTools必须在非production的情况下才能使用)
- [x] 增加vuex-router-sync可以使用地址param查询
- [x] vuex阅读使用说明并了解如何进行模块间的数据交互
- [x] 使用vue-resource进行http请求交互
- [x] 增加ligth7和jquery引用.用于样式,并编写了/login界面
- [x] 增加国际化，引入vuex-i18n 
- [x] 去除light7，改为vux
- [x] vuex中增加pageisloading属性
- [x] vuex增加国际化配置，并初始化增加了常规configplugins 
- [x] 引入fontawesome作为图标处理

  






    
