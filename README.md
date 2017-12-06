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

### 项目文件布局

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
│   ├── assets                          // 所有静态资源目录
│   │   └── logo.png                    // 比如图片放在这下面
│   ├── main.js                         // 初始化加载js文件
│   └── public                          // 公共加载js文件及第三方依赖js文件目录
│       └── rem.js                      // 字体自适应
└── webpack.config.js                   // 项目打包配置文件
```

### 关于IDE
##### sublime
+ 开启vue语法
    - `https://pan.baidu.com/s/1nv7C4B3` 密码: `w5zs`
    - browse package->copy paste
    - set syntax vue


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
安装brew
`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
安装tree
`brew install tree`
使用
`cd project-name`
`tree -L 2`

### 更新记录
- [x] 初始化vue并增加vue-route,vuex
- [x] 增加cdn配置
- [x] 增加favicon.ico
- [x] 增加public/rem.js(字体自适应)
- [x] index.html中增加viewport等属性不允许缩放和旋转





    
